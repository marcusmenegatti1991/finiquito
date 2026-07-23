import { describe, it, expect } from "vitest";
import {
  calcularSalarioDiario,
  calcularDiasVacacionesLFT,
  calcularAnosCompletos,
  calcularAnosProporcionales,
  calcularSDI,
  calcularPrimaAntiguedad,
  calcularIndemnizacionDespido,
  calcularFiniquito,
  SALARIO_MINIMO_2026,
  TOPE_PRIMA_ANTIGUEDAD,
} from "./finiquito";

// Fechas en horario local (las funciones usan getFullYear/getMonth/getDate).
const d = (y: number, m: number, day: number) => new Date(y, m - 1, day);
/** Par de fechas separadas por `anos` años exactos (mismo mes/día). */
const rango = (anos: number): [Date, Date] => [d(2010, 1, 15), d(2010 + anos, 1, 15)];

describe("salario diario", () => {
  it("mensual ÷ 30", () => {
    expect(calcularSalarioDiario(15000)).toBe(500);
    expect(calcularSalarioDiario(9000)).toBe(300);
  });
});

describe("tabla de vacaciones (Art. 76 Vacaciones Dignas)", () => {
  const dv = (anos: number) => calcularDiasVacacionesLFT(...rango(anos));
  it("menos de 1 año → 0", () => expect(dv(0)).toBe(0));
  it("años 1-5: +2 por año", () => {
    expect(dv(1)).toBe(12);
    expect(dv(2)).toBe(14);
    expect(dv(3)).toBe(16);
    expect(dv(4)).toBe(18);
    expect(dv(5)).toBe(20);
  });
  it("años 6-10: TODOS 22 (no 24/26/28/30)", () => {
    expect(dv(6)).toBe(22);
    expect(dv(8)).toBe(22);
    expect(dv(10)).toBe(22);
  });
  it("+2 por cada 5 años después del 5", () => {
    expect(dv(11)).toBe(24);
    expect(dv(15)).toBe(24);
    expect(dv(16)).toBe(26);
    expect(dv(20)).toBe(26);
    expect(dv(21)).toBe(28);
  });
});

describe("años de servicio", () => {
  it("completos y proporcionales exactos en el aniversario", () => {
    expect(calcularAnosCompletos(...rango(10))).toBe(10);
    expect(calcularAnosProporcionales(...rango(10))).toBeCloseTo(10, 3);
  });
  it("no cuenta un año incompleto", () => {
    // 361 días < 1 año
    expect(calcularAnosCompletos(d(2024, 1, 15), d(2025, 1, 10))).toBe(0);
  });
});

describe("SDI (salario diario integrado)", () => {
  it("integra aguinaldo (15) y prima vacacional (25% de vacaciones)", () => {
    // 1 + 15/365 + (0.25×22)/365 = 1.0561644
    expect(calcularSDI(500, 22)).toBeCloseTo(528.0822, 3);
  });
});

describe("prima de antigüedad (tope 2× salario mínimo, NO 2× UMA)", () => {
  it("el tope es 2× salario mínimo 2026 = $630.08", () => {
    expect(SALARIO_MINIMO_2026).toBe(315.04);
    expect(TOPE_PRIMA_ANTIGUEDAD).toBeCloseTo(630.08, 2);
  });
  it("salario por debajo del tope: NO se topa", () => {
    // SD=500 < 630.08 → 12 × 10 × 500
    expect(calcularPrimaAntiguedad(500, ...rango(10), true)).toBeCloseTo(60000, 2);
  });
  it("salario por encima del tope: se topa a 630.08", () => {
    // SD=1000 > 630.08 → 12 × 10 × 630.08
    expect(calcularPrimaAntiguedad(1000, ...rango(10), true)).toBeCloseTo(75609.6, 1);
  });
  it("en renuncia sólo aplica con 15+ años", () => {
    expect(calcularPrimaAntiguedad(500, ...rango(10), false)).toBe(0);
    expect(calcularPrimaAntiguedad(500, ...rango(15), false)).toBeCloseTo(90000, 2);
  });
});

describe("indemnización por despido (sobre SDI)", () => {
  it("90 días + 20 días/año, todo sobre SDI", () => {
    const sdi = calcularSDI(500, 22); // 528.0822
    // (90 + 20×10) × sdi = 290 × 528.0822
    expect(calcularIndemnizacionDespido(sdi, ...rango(10))).toBeCloseTo(290 * sdi, 2);
  });
});

describe("calcularFiniquito (integración)", () => {
  it("el total es la suma de los conceptos y no truena", () => {
    const out = calcularFiniquito({
      salarioMensual: 15000,
      fechaIngreso: d(2016, 1, 15),
      fechaTerminacion: d(2026, 5, 15),
      diasVacacionesCorrespondientes: 22,
      diasLaboradosNoPagados: 5,
      esLiquidacionPorDespido: true,
    });
    const suma = out.desglose.conceptos.reduce((s, c) => s + c.monto, 0);
    expect(out.totalFiniquito).toBeCloseTo(suma, 6);
    expect(out.salarioDiario).toBe(500);
    expect(out.salarioDiarioIntegrado).toBeCloseTo(528.0822, 3);
    // en liquidación por despido debe incluir indemnización
    expect(out.indemnizacionDespido).toBeGreaterThan(0);
  });
});
