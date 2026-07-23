/**
 * Cálculo de finiquito y liquidación según la Ley Federal del Trabajo (LFT), MX.
 * Reglas verificadas 2026:
 *
 *  - Vacaciones (Art. 76, "Vacaciones Dignas"): 12, 14, 16, 18, 20 días en los
 *    años 1-5, y +2 días por cada 5 años a partir del año 6 (6-10=22, 11-15=24,
 *    16-20=26, ...). NO es +2 por cada año después del 5.
 *  - Prima de antigüedad (Arts. 162, 485, 486): 12 días por año de servicio, con
 *    el salario diario TOPADO a 2× salario mínimo (NO a 2× UMA). Sólo aplica en
 *    renuncia con 15+ años; en despido, desde el primer año. Se paga proporcional
 *    a los años (incluida la fracción del último año).
 *  - Indemnización por despido injustificado (Arts. 48, 50, 84, 89): 90 días +
 *    20 días por año de servicio, calculados sobre el Salario Diario Integrado
 *    (SDI) = salario diario + aguinaldo prorrateado + prima vacacional prorrateada.
 */

// Salario mínimo general diario 2026 (CONASAMI, DOF). Zona Libre Frontera Norte
// es mayor ($440.87); usamos el general por cubrir a la mayoría del país.
export const SALARIO_MINIMO_2026 = 315.04;
/** Tope salarial para prima de antigüedad: 2× salario mínimo (Arts. 485-486). */
export const TOPE_PRIMA_ANTIGUEDAD = 2 * SALARIO_MINIMO_2026; // $630.08/día

const MS_DIA = 1000 * 60 * 60 * 24;
/** Días de aguinaldo mínimo legal (Art. 87). */
const DIAS_AGUINALDO = 15;

export interface FiniquitoInput {
  salarioMensual: number;
  fechaIngreso: Date;
  fechaTerminacion: Date;
  diasVacacionesCorrespondientes: number;
  diasLaboradosNoPagados: number;
  esLiquidacionPorDespido: boolean;
}

export interface FiniquitoOutput {
  salarioDiario: number;
  salarioDiarioIntegrado: number;
  diasLaboradosNoPagados: number;
  montoLaborado: number;
  aguinaldoProporcional: number;
  vacacionesProporcionales: number;
  primavacacional: number;
  primaAntiguedad: number;
  indemnizacionDespido: number;
  totalFiniquito: number;
  desglose: DesgloceFiniquito;
}

export interface DesgloceFiniquito {
  conceptos: ConceptoFiniquito[];
  totalBruto: number;
}

export interface ConceptoFiniquito {
  nombre: string;
  descripcion: string;
  monto: number;
  formula?: string;
  icono?: string;
}

/** Salario diario = salario mensual ÷ 30. */
export function calcularSalarioDiario(salarioMensual: number): number {
  return salarioMensual / 30;
}

function diasEntre(a: Date, b: Date): number {
  return Math.max(0, Math.floor((b.getTime() - a.getTime()) / MS_DIA));
}

/** Días laborados entre dos fechas. */
export function calcularDiasLaborados(fechaIngreso: Date, fechaTerminacion: Date): number {
  return diasEntre(fechaIngreso, fechaTerminacion);
}

/** Años de servicio COMPLETOS (aniversarios cumplidos, como la edad). */
export function calcularAnosCompletos(fechaIngreso: Date, fechaTerminacion: Date): number {
  let anos = fechaTerminacion.getFullYear() - fechaIngreso.getFullYear();
  const difMes = fechaTerminacion.getMonth() - fechaIngreso.getMonth();
  if (difMes < 0 || (difMes === 0 && fechaTerminacion.getDate() < fechaIngreso.getDate())) {
    anos--;
  }
  return Math.max(0, anos);
}

/** Años exactos = años completos + fracción del año en curso (para pagos proporcionales). */
export function calcularAnosProporcionales(fechaIngreso: Date, fechaTerminacion: Date): number {
  const completos = calcularAnosCompletos(fechaIngreso, fechaTerminacion);
  const ultimoAniversario = new Date(fechaIngreso);
  ultimoAniversario.setFullYear(fechaIngreso.getFullYear() + completos);
  return completos + diasEntre(ultimoAniversario, fechaTerminacion) / 365;
}

/**
 * Salario Diario Integrado (SDI): salario diario + parte diaria proporcional del
 * aguinaldo y de la prima vacacional. Base de la indemnización (Arts. 84, 89).
 * factor = 1 + (díasAguinaldo / 365) + (25% × díasVacaciones / 365)
 */
export function calcularSDI(salarioDiario: number, diasVacaciones: number): number {
  const primaVacacionalDias = diasVacaciones * 0.25;
  const factor = 1 + DIAS_AGUINALDO / 365 + primaVacacionalDias / 365;
  return salarioDiario * factor;
}

/**
 * Aguinaldo proporcional del año en curso (Art. 87). Mínimo 15 días/año.
 * (15 ÷ 365) × días trabajados en el año calendario × salario diario.
 */
export function calcularAguinaldoProporcional(
  salarioDiario: number,
  fechaIngreso: Date,
  fechaTerminacion: Date
): number {
  const inicioAnio = new Date(fechaTerminacion.getFullYear(), 0, 1);
  const inicioAguinaldo = fechaIngreso > inicioAnio ? fechaIngreso : inicioAnio;
  const diasEnAnioActual = diasEntre(inicioAguinaldo, fechaTerminacion);
  return (DIAS_AGUINALDO / 365) * diasEnAnioActual * salarioDiario;
}

/**
 * Días de vacaciones según antigüedad (Art. 76, Vacaciones Dignas 2023):
 *   1→12  2→14  3→16  4→18  5→20   (+2 por año los primeros 5)
 *   6-10→22  11-15→24  16-20→26 ... (+2 por cada 5 años a partir del 6)
 */
export function calcularDiasVacacionesLFT(fechaIngreso: Date, fechaTerminacion: Date): number {
  const anos = calcularAnosCompletos(fechaIngreso, fechaTerminacion);
  if (anos < 1) return 0;
  if (anos <= 5) return 10 + anos * 2;
  return 20 + 2 * Math.ceil((anos - 5) / 5);
}

/**
 * Vacaciones proporcionales: los días de vacaciones acumulados desde el último
 * aniversario laboral hasta la terminación.
 * (díasVacaciones ÷ 365) × días desde el último aniversario × salario diario.
 */
export function calcularVacacionesProporcionales(
  salarioDiario: number,
  diasVacacionesCorrespondientes: number,
  fechaIngreso: Date,
  fechaTerminacion: Date
): number {
  const completos = calcularAnosCompletos(fechaIngreso, fechaTerminacion);
  const ultimoAniversario = new Date(fechaIngreso);
  ultimoAniversario.setFullYear(fechaIngreso.getFullYear() + completos);
  const diasDesdeAniversario = diasEntre(ultimoAniversario, fechaTerminacion);
  return (diasVacacionesCorrespondientes / 365) * diasDesdeAniversario * salarioDiario;
}

/** Prima vacacional: 25% del monto de las vacaciones (Art. 80). */
export function calcularPrimaVacacional(vacacionesProporcionales: number): number {
  return vacacionesProporcionales * 0.25;
}

/**
 * Prima de antigüedad (Art. 162): 12 días por año, salario topado a 2× salario
 * mínimo. En renuncia sólo con 15+ años; en despido desde el primer año.
 * Proporcional a los años (incluye la fracción del último año).
 */
export function calcularPrimaAntiguedad(
  salarioDiario: number,
  fechaIngreso: Date,
  fechaTerminacion: Date,
  esLiquidacion = false
): number {
  const anosCompletos = calcularAnosCompletos(fechaIngreso, fechaTerminacion);
  if (!esLiquidacion && anosCompletos < 15) return 0;

  const anosProporcionales = calcularAnosProporcionales(fechaIngreso, fechaTerminacion);
  const salarioTopado = Math.min(salarioDiario, TOPE_PRIMA_ANTIGUEDAD);
  return 12 * anosProporcionales * salarioTopado;
}

/**
 * Indemnización por despido injustificado (Arts. 48, 50): 90 días + 20 días por
 * año de servicio, calculados sobre el Salario Diario Integrado (SDI).
 */
export function calcularIndemnizacionDespido(
  sdi: number,
  fechaIngreso: Date,
  fechaTerminacion: Date
): number {
  const anosProporcionales = calcularAnosProporcionales(fechaIngreso, fechaTerminacion);
  const tresMeses = 90 * sdi;
  const veinteDiasPorAno = 20 * anosProporcionales * sdi;
  return tresMeses + veinteDiasPorAno;
}

/** Calcula el finiquito/liquidación completo. */
export function calcularFiniquito(input: FiniquitoInput): FiniquitoOutput {
  const salarioDiario = calcularSalarioDiario(input.salarioMensual);
  const sdi = calcularSDI(salarioDiario, input.diasVacacionesCorrespondientes);

  const montoLaborado = salarioDiario * input.diasLaboradosNoPagados;
  const aguinaldoProporcional = calcularAguinaldoProporcional(
    salarioDiario,
    input.fechaIngreso,
    input.fechaTerminacion
  );
  const vacacionesProporcionales = calcularVacacionesProporcionales(
    salarioDiario,
    input.diasVacacionesCorrespondientes,
    input.fechaIngreso,
    input.fechaTerminacion
  );
  const primaVacacional = calcularPrimaVacacional(vacacionesProporcionales);
  const primaAntiguedad = calcularPrimaAntiguedad(
    salarioDiario,
    input.fechaIngreso,
    input.fechaTerminacion,
    input.esLiquidacionPorDespido
  );
  const indemnizacionDespido = input.esLiquidacionPorDespido
    ? calcularIndemnizacionDespido(sdi, input.fechaIngreso, input.fechaTerminacion)
    : 0;

  const conceptos: ConceptoFiniquito[] = [
    {
      nombre: "Saldo de Salario",
      descripcion: "Días laborados no pagados",
      monto: montoLaborado,
      formula: "Salario Diario × Días No Pagados",
      icono: "💼",
    },
    {
      nombre: "Aguinaldo Proporcional",
      descripcion: "Parte proporcional del aguinaldo del año en curso",
      monto: aguinaldoProporcional,
      formula: "(15 ÷ 365) × Días Trabajados en el Año × Salario Diario",
      icono: "🎁",
    },
    {
      nombre: "Vacaciones Proporcionales",
      descripcion: "Días de vacaciones desde el último aniversario laboral",
      monto: vacacionesProporcionales,
      formula: "(Días de Vacaciones ÷ 365) × Días desde Aniversario × Salario Diario",
      icono: "🏖️",
    },
    {
      nombre: "Prima Vacacional",
      descripcion: "25% sobre las vacaciones (Art. 80 LFT)",
      monto: primaVacacional,
      formula: "Vacaciones × 0.25",
      icono: "✨",
    },
  ];

  if (primaAntiguedad > 0) {
    const topeAplicado = salarioDiario > TOPE_PRIMA_ANTIGUEDAD;
    conceptos.push({
      nombre: "Prima de Antigüedad",
      descripcion: topeAplicado
        ? `12 días por año — salario topado a 2× salario mínimo ($${TOPE_PRIMA_ANTIGUEDAD.toFixed(2)}/día)`
        : "12 días por cada año de servicio (Art. 162 LFT)",
      monto: primaAntiguedad,
      formula: `12 × Años × ${topeAplicado ? `$${TOPE_PRIMA_ANTIGUEDAD.toFixed(2)} (tope 2× sal. mínimo)` : "Salario Diario"}`,
      icono: "🏅",
    });
  }

  if (indemnizacionDespido > 0) {
    conceptos.push({
      nombre: "Indemnización por Despido",
      descripcion: "90 días + 20 días por año, sobre el Salario Diario Integrado (SDI)",
      monto: indemnizacionDespido,
      formula: "(90 × SDI) + (20 × Años × SDI)",
      icono: "⚖️",
    });
  }

  const totalBruto = conceptos.reduce((sum, c) => sum + c.monto, 0);

  return {
    salarioDiario,
    salarioDiarioIntegrado: sdi,
    diasLaboradosNoPagados: input.diasLaboradosNoPagados,
    montoLaborado,
    aguinaldoProporcional,
    vacacionesProporcionales,
    primavacacional: primaVacacional,
    primaAntiguedad,
    indemnizacionDespido,
    totalFiniquito: totalBruto,
    desglose: {
      conceptos,
      totalBruto,
    },
  };
}

/** Formatea número como moneda mexicana. */
export function formatearMoneda(monto: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(monto);
}

/** Formatea fecha en formato legible. */
export function formatearFecha(fecha: Date): string {
  return new Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(fecha);
}
