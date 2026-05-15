/**
 * Utilidades para cálculo de finiquito según la Ley Federal del Trabajo
 * Diseño Híbrido: Corporativo + Educativo + Minimalista
 */

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

/**
 * Calcula el salario diario
 * Fórmula: Salario Mensual ÷ 30
 */
export function calcularSalarioDiario(salarioMensual: number): number {
  return salarioMensual / 30;
}

/**
 * Calcula días laborados
 */
export function calcularDiasLaborados(fechaIngreso: Date, fechaTerminacion: Date): number {
  const tiempo = fechaTerminacion.getTime() - fechaIngreso.getTime();
  return Math.floor(tiempo / (1000 * 60 * 60 * 24));
}

/**
 * Calcula años de servicio
 */
export function calcularAnosServicio(fechaIngreso: Date, fechaTerminacion: Date): number {
  return (fechaTerminacion.getFullYear() - fechaIngreso.getFullYear()) +
    (fechaTerminacion.getMonth() - fechaIngreso.getMonth()) / 12;
}

/**
 * Calcula aguinaldo proporcional
 * Mínimo legal: 15 días de salario
 * Fórmula: (15 ÷ 365) × Días Laborados en el Año × Salario Diario
 */
export function calcularAguinaldoProporcional(
  salarioDiario: number,
  fechaIngreso: Date,
  fechaTerminacion: Date
): number {
  const diasLaborados = calcularDiasLaborados(fechaIngreso, fechaTerminacion);
  const diasEnAnio = 365;
  const diasAguinaldo = 15;
  
  return (diasAguinaldo / diasEnAnio) * diasLaborados * salarioDiario;
}

/**
 * Calcula vacaciones proporcionales
 * Mínimo legal: 12 días (después de 1 año)
 * Incremento: 2 días por cada año subsecuente
 * Fórmula: (Días Asignados ÷ 365) × Días Laborados × Salario Diario
 */
export function calcularVacacionesProporcionales(
  salarioDiario: number,
  diasVacacionesCorrespondientes: number,
  fechaIngreso: Date,
  fechaTerminacion: Date
): number {
  const diasLaborados = calcularDiasLaborados(fechaIngreso, fechaTerminacion);
  const diasEnAnio = 365;
  
  return (diasVacacionesCorrespondientes / diasEnAnio) * diasLaborados * salarioDiario;
}

/**
 * Calcula prima vacacional
 * Mínimo legal: 25% del salario de los días de vacaciones
 * Fórmula: Monto de Vacaciones × 0.25
 */
export function calcularPrimaVacacional(vacacionesProporcionales: number): number {
  return vacacionesProporcionales * 0.25;
}

/**
 * Calcula prima de antigüedad
 * En finiquito: solo si tiene más de 15 años
 * En liquidación: desde el primer año
 * Fórmula: 12 días × Años de Servicio × Salario Diario
 */
export function calcularPrimaAntiguedad(
  salarioDiario: number,
  fechaIngreso: Date,
  fechaTerminacion: Date,
  esLiquidacion: boolean = false
): number {
  const anosServicio = calcularAnosServicio(fechaIngreso, fechaTerminacion);
  
  // En finiquito, prima de antigüedad solo aplica si tiene más de 15 años
  if (!esLiquidacion && anosServicio < 15) {
    return 0;
  }
  
  const diasPrimaAntiguedad = 12;
  return diasPrimaAntiguedad * Math.floor(anosServicio) * salarioDiario;
}

/**
 * Calcula indemnización por despido injustificado
 * Fórmula: (3 meses × Salario Mensual) + (20 días × Años × Salario Diario)
 */
export function calcularIndemnizacionDespido(
  salarioMensual: number,
  salarioDiario: number,
  fechaIngreso: Date,
  fechaTerminacion: Date
): number {
  const anosServicio = calcularAnosServicio(fechaIngreso, fechaTerminacion);
  const tresMeses = 3 * salarioMensual;
  const veinteDisPorAno = 20 * Math.floor(anosServicio) * salarioDiario;
  
  return tresMeses + veinteDisPorAno;
}

/**
 * Calcula el finiquito completo
 */
export function calcularFiniquito(input: FiniquitoInput): FiniquitoOutput {
  const salarioDiario = calcularSalarioDiario(input.salarioMensual);
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
    ? calcularIndemnizacionDespido(
        input.salarioMensual,
        salarioDiario,
        input.fechaIngreso,
        input.fechaTerminacion
      )
    : 0;

  const conceptos: ConceptoFiniquito[] = [
    {
      nombre: "Saldo de Salario",
      descripcion: "Días laborados no pagados",
      monto: montoLaborado,
      formula: "Salario Diario × Días No Pagados",
      icono: "💼"
    },
    {
      nombre: "Aguinaldo Proporcional",
      descripcion: "Parte proporcional del aguinaldo anual",
      monto: aguinaldoProporcional,
      formula: "(15 ÷ 365) × Días Laborados × Salario Diario",
      icono: "🎁"
    },
    {
      nombre: "Vacaciones Proporcionales",
      descripcion: "Días de vacaciones no disfrutados",
      monto: vacacionesProporcionales,
      formula: "(Días Asignados ÷ 365) × Días Laborados × Salario Diario",
      icono: "🏖️"
    },
    {
      nombre: "Prima Vacacional",
      descripcion: "25% adicional sobre vacaciones",
      monto: primaVacacional,
      formula: "Vacaciones × 0.25",
      icono: "✨"
    }
  ];

  if (primaAntiguedad > 0) {
    conceptos.push({
      nombre: "Prima de Antigüedad",
      descripcion: "12 días por año de servicio",
      monto: primaAntiguedad,
      formula: "12 × Años de Servicio × Salario Diario",
      icono: "🏅"
    });
  }

  if (indemnizacionDespido > 0) {
    conceptos.push({
      nombre: "Indemnización por Despido",
      descripcion: "3 meses + 20 días por año de servicio",
      monto: indemnizacionDespido,
      formula: "(3 × Salario Mensual) + (20 × Años × Salario Diario)",
      icono: "⚖️"
    });
  }

  const totalBruto = conceptos.reduce((sum, c) => sum + c.monto, 0);

  return {
    salarioDiario,
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
      totalBruto
    }
  };
}

/**
 * Formatea número como moneda mexicana
 */
export function formatearMoneda(monto: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(monto);
}

/**
 * Formatea fecha en formato legible
 */
export function formatearFecha(fecha: Date): string {
  return new Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(fecha);
}
