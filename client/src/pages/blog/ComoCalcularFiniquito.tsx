import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";

export default function ComoCalcularFiniquito() {
  useSEO({
    title: "Cómo Calcular tu Finiquito Paso a Paso en México 2026",
    description:
      "Aprende a calcular tu finiquito en México con fórmulas exactas según la Ley Federal del Trabajo 2026. Incluye aguinaldo, vacaciones, prima vacacional y más.",
    canonical: "/blog/como-calcular-finiquito",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-200 text-sm mb-3 font-medium">📚 Guía Completa</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Cómo Calcular tu Finiquito Paso a Paso en México 2026
          </h1>
          <p className="text-lg text-blue-50">
            Fórmulas exactas, ejemplos prácticos y todo lo que necesitas saber según la Ley Federal del Trabajo
          </p>
          <div className="flex items-center gap-4 mt-6 text-blue-200 text-sm">
            <span>📅 15 de mayo de 2026</span>
            <span>•</span>
            <span>⏱️ 8 min de lectura</span>
          </div>
        </div>
      </section>

      {/* CTA rápido */}
      <div className="bg-blue-50 border-b border-blue-100 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-sm">¿Prefieres calcularlo directo? Usa nuestra herramienta gratuita</p>
          <a
            href="/"
            className="bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm whitespace-nowrap"
          >
            → Ir a la Calculadora
          </a>
        </div>
      </div>

      {/* Contenido */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          {/* Introducción */}
          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Cuando termina una relación laboral —ya sea por renuncia, despido justificado o despido injustificado— el empleador está obligado por ley a pagar al trabajador una serie de prestaciones. A este pago se le llama <strong>finiquito</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Muchos trabajadores no saben exactamente cuánto les corresponde, lo que puede llevar a que acepten montos incorrectos. En esta guía te explicamos, paso a paso y con fórmulas exactas, cómo calcular cada componente de tu finiquito según la <strong>Ley Federal del Trabajo (LFT) vigente en 2026</strong>.
            </p>
          </section>

          {/* Qué es */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es el Finiquito?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El finiquito es el documento y pago que el patrón entrega al trabajador al concluir la relación laboral. Incluye todos los adeudos pendientes: salarios no pagados, parte proporcional del aguinaldo, vacaciones no disfrutadas y prima vacacional.
            </p>
            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="pt-4">
                <p className="text-blue-900 font-semibold mb-1">Importante:</p>
                <p className="text-blue-800 text-sm">
                  El finiquito aplica en todos los casos de terminación laboral. Si la terminación es por <strong>despido injustificado</strong>, además del finiquito corresponde una <strong>indemnización adicional</strong> (3 meses de salario + 20 días por año).
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Datos necesarios */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Datos que Necesitas para Calcular</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "💰", label: "Salario mensual bruto" },
                { icon: "📅", label: "Fecha de ingreso a la empresa" },
                { icon: "📅", label: "Fecha de terminación laboral" },
                { icon: "🏖️", label: "Días de vacaciones que te corresponden" },
                { icon: "📋", label: "Días laborados no pagados" },
                { icon: "⚖️", label: "Tipo de terminación (renuncia o despido)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-700 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Paso 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso 1: Calcular el Salario Diario</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todo el finiquito se calcula a partir del <strong>salario diario</strong>. La LFT establece que el salario diario se obtiene dividiendo el salario mensual entre 30, independientemente de los días que tenga el mes.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 font-mono text-purple-900">
              <p className="font-bold mb-2">Fórmula:</p>
              <p>Salario Diario = Salario Mensual ÷ 30</p>
              <p className="mt-2 text-purple-700">Ejemplo: $15,000 ÷ 30 = <strong>$500.00 diarios</strong></p>
            </div>
          </section>

          {/* Paso 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso 2: Saldo de Salario (Días No Pagados)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si al momento de la terminación hay días trabajados que aún no se han pagado, el patrón está obligado a cubrirlos. Es el componente más sencillo del finiquito.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 font-mono text-purple-900">
              <p className="font-bold mb-2">Fórmula:</p>
              <p>Saldo de Salario = Salario Diario × Días Laborados No Pagados</p>
              <p className="mt-2 text-purple-700">Ejemplo: $500 × 5 días = <strong>$2,500.00</strong></p>
            </div>
          </section>

          {/* Paso 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso 3: Aguinaldo Proporcional</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El aguinaldo mínimo legal es de <strong>15 días de salario</strong> por año completo (Art. 87 LFT), pagadero antes del 20 de diciembre. Si la relación laboral termina antes de esa fecha, se paga la parte proporcional correspondiente a los días trabajados <strong>en el año en curso</strong> (desde el 1 de enero hasta la fecha de terminación).
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 font-mono text-purple-900">
              <p className="font-bold mb-2">Fórmula:</p>
              <p>Aguinaldo = (15 ÷ 365) × Días Trabajados en el Año × Salario Diario</p>
              <p className="mt-2 text-purple-700">
                Ejemplo (terminación 15 mayo 2026, 135 días del año):<br />
                (15 ÷ 365) × 135 × $500 = <strong>$2,773.97</strong>
              </p>
            </div>
          </section>

          {/* Paso 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso 4: Vacaciones Proporcionales</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Con la reforma de <strong>Vacaciones Dignas (2023)</strong>, el mínimo de vacaciones subió a 12 días después del primer año, aumentando 2 días por cada año adicional. En el finiquito, se pagan los días proporcionales desde el <strong>último aniversario laboral</strong> hasta la fecha de terminación.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-2 text-left">Años de servicio</th>
                    <th className="p-2 text-center">Días de vacaciones</th>
                  </tr>
                </thead>
                <tbody>
                  {[["1 año","12 días"],["2 años","14 días"],["3 años","16 días"],["4 años","18 días"],["5 años","20 días"],["6 años","22 días"],["7 años","24 días"]].map(([años, dias], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-2 border">{años}</td>
                      <td className="p-2 border text-center font-semibold">{dias}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 font-mono text-purple-900">
              <p className="font-bold mb-2">Fórmula:</p>
              <p>Vacaciones = (Días Asignados ÷ 365) × Días desde Último Aniversario × Salario Diario</p>
              <p className="mt-2 text-purple-700">
                Ejemplo (120 días desde aniversario, 14 días asignados):<br />
                (14 ÷ 365) × 120 × $500 = <strong>$2,301.37</strong>
              </p>
            </div>
          </section>

          {/* Paso 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso 5: Prima Vacacional</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La prima vacacional es un pago adicional del <strong>25% sobre el monto de vacaciones</strong> (Art. 80 LFT). Si no se tomaron las vacaciones, se paga este porcentaje extra sobre el valor proporcional calculado.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 font-mono text-purple-900">
              <p className="font-bold mb-2">Fórmula:</p>
              <p>Prima Vacacional = Vacaciones Proporcionales × 0.25</p>
              <p className="mt-2 text-purple-700">Ejemplo: $2,301.37 × 0.25 = <strong>$575.34</strong></p>
            </div>
          </section>

          {/* Resumen */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resumen: Total del Finiquito</h2>
            <Card className="bg-blue-50 border-2 border-primary">
              <CardContent className="pt-6">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Saldo de Salario", "$2,500.00"],
                      ["Aguinaldo Proporcional", "$2,773.97"],
                      ["Vacaciones Proporcionales", "$2,301.37"],
                      ["Prima Vacacional", "$575.34"],
                    ].map(([concepto, monto], i) => (
                      <tr key={i} className="border-b border-blue-200">
                        <td className="py-2 text-gray-700">{concepto}</td>
                        <td className="py-2 text-right font-semibold text-primary">{monto}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="py-3 font-bold text-gray-900 text-base">TOTAL FINIQUITO</td>
                      <td className="py-3 text-right font-bold text-primary text-xl">$8,150.68</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-3">*Ejemplo con salario $15,000, ingreso 15/01/2020, terminación 15/05/2026, 5 días no pagados</p>
              </CardContent>
            </Card>
          </section>

          {/* Aviso */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">⚠️ Aviso Legal</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Esta guía proporciona una estimación basada en los mínimos establecidos por la Ley Federal del Trabajo. Los montos pueden variar según contratos colectivos, salarios integrados, o circunstancias particulares. Para casos específicos, consulta con un asesor laboral certificado.
            </p>
          </section>

          {/* CTA final */}
          <section className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">¿Listo para calcular tu finiquito?</h2>
            <p className="text-blue-100 mb-6">Usa nuestra calculadora gratuita y obtén el resultado exacto en segundos</p>
            <a
              href="/"
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg"
            >
              Calcular mi Finiquito Ahora →
            </a>
          </section>
        </div>
      </article>
    </div>
  );
}
