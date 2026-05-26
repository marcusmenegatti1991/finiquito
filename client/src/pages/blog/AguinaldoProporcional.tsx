import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import AdSense from "@/components/AdSense";

export default function AguinaldoProporcional() {
  useSEO({
    title: "Aguinaldo Proporcional 2026: Cómo Calcularlo en tu Finiquito",
    description:
      "Todo sobre el aguinaldo proporcional en México 2026: fórmula, ejemplos, cuándo se paga en el finiquito y qué dice el Artículo 87 de la Ley Federal del Trabajo.",
    canonical: "/blog/aguinaldo-proporcional-finiquito",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-200 text-sm mb-3 font-medium">🎁 Prestaciones Laborales</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Aguinaldo Proporcional 2026: Cómo Calcularlo en tu Finiquito
          </h1>
          <p className="text-lg text-blue-50">
            Si tu relación laboral termina antes del 20 de diciembre, tienes derecho al aguinaldo proporcional por los meses trabajados en el año
          </p>
          <div className="flex items-center gap-4 mt-6 text-blue-200 text-sm">
            <span>📅 17 de mayo de 2026</span>
            <span>•</span>
            <span>⏱️ 6 min de lectura</span>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 border-b border-blue-100 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-sm">Calcula tu aguinaldo proporcional incluido en tu finiquito</p>
          <a href="/" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm whitespace-nowrap">
            → Ir a la Calculadora
          </a>
        </div>
      </div>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              El <strong>aguinaldo</strong> es una de las prestaciones más esperadas del año: equivale a un mínimo de <strong>15 días de salario</strong> y debe pagarse antes del 20 de diciembre (Art. 87 LFT). Pero, ¿qué pasa si te vas de la empresa antes de esa fecha? Te corresponde la parte proporcional: el <strong>aguinaldo proporcional</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Este concepto es uno de los componentes obligatorios de cualquier finiquito, sin importar si renunciaste o te despidieron.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_AGUINALDO" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es el Aguinaldo Proporcional?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Es la parte del aguinaldo anual que le corresponde al trabajador por los días que trabajó durante el año en curso, desde el <strong>1 de enero hasta la fecha de terminación</strong> (o desde su fecha de ingreso si entró ese mismo año).
            </p>
            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="pt-4">
                <p className="text-blue-900 font-semibold mb-2">Fundamento legal:</p>
                <p className="text-blue-800 text-sm">
                  <strong>Artículo 87 LFT:</strong> "Los trabajadores tendrán derecho a un aguinaldo anual que deberá pagarse antes del día veinte de diciembre, equivalente a quince días de salario, por lo menos. Los que no hayan cumplido el año de servicios, independientemente de que se encuentren laborando o no en la fecha de liquidación del aguinaldo, tendrán derecho a que se les pague la parte proporcional del mismo."
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fórmula del Aguinaldo Proporcional</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El cálculo es sobre los días trabajados <strong>en el año en curso</strong>, no sobre el total de años en la empresa. Este es el error más común en calculadoras de finiquito.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 mb-4">
              <p className="font-bold text-purple-900 mb-3">Paso a paso:</p>
              <div className="space-y-2 font-mono text-sm text-purple-900">
                <p>1. Salario Diario = Salario Mensual ÷ 30</p>
                <p>2. Días del año = desde el 1 de enero hasta la fecha de terminación</p>
                <p>   (o desde fecha de ingreso si entró en el año en curso)</p>
                <p>3. Aguinaldo = (15 ÷ 365) × Días del Año × Salario Diario</p>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 mb-3">Ejemplos según el mes de salida</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-2 text-left border">Mes de salida</th>
                    <th className="p-2 text-center border">Días del año</th>
                    <th className="p-2 text-center border">Aguinaldo (salario $15,000)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Enero (día 31)", "31", "$616.44"],
                    ["Marzo (día 90)", "90", "$1,849.32"],
                    ["Mayo (día 135)", "135", "$2,773.97"],
                    ["Julio (día 196)", "196", "$4,021.92"],
                    ["Septiembre (día 258)", "258", "$5,294.52"],
                    ["Noviembre (día 319)", "319", "$6,546.58"],
                  ].map(([mes, dias, monto], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-2 border">{mes}</td>
                      <td className="p-2 border text-center">{dias}</td>
                      <td className="p-2 border text-center font-semibold text-primary">{monto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">*Salario diario: $500. Días calculados aproximadamente.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Común: No Confundas el Periodo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-2 border-red-200">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-red-700 mb-2">❌ Incorrecto</h3>
                  <p className="text-gray-700 text-sm mb-2">Calcular el aguinaldo sobre <strong>todos los años trabajados</strong> en la empresa.</p>
                  <p className="text-gray-600 text-xs">Si trabajaste 5 años y te vas en mayo, NO se multiplica 5 × 15 × salario diario. Eso daría un resultado inflado e incorrecto.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-green-200">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-green-700 mb-2">✅ Correcto</h3>
                  <p className="text-gray-700 text-sm mb-2">Calcular solo sobre los días trabajados <strong>en el año en curso</strong> (enero a mayo = 135 días).</p>
                  <p className="text-gray-600 text-xs">Los aguinaldos de años anteriores ya debieron haberse pagado cada diciembre. En el finiquito solo se incluye el del año actual.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Y si la Empresa Da Más de 15 Días?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Los 15 días son el mínimo legal. Muchas empresas otorgan 20, 25 o 30 días de aguinaldo por política interna o por contrato colectivo. En ese caso, el aguinaldo proporcional se calcula con el número de días que la empresa ofrezca, siempre que sea mayor al mínimo legal.
            </p>
            <Card className="border-l-4 border-l-green-500 bg-green-50">
              <CardContent className="pt-4">
                <p className="text-green-800 text-sm">
                  <strong>Ejemplo:</strong> Si tu empresa da 30 días de aguinaldo y te vas en mayo con salario de $15,000:<br/>
                  (30 ÷ 365) × 135 × $500 = <strong>$5,547.95</strong> (vs. $2,773.97 con el mínimo de 15 días)
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes sobre el Aguinaldo</h2>
            <div className="space-y-4">
              {[
                {
                  q: "¿Si renuncio en diciembre me pagan el aguinaldo completo?",
                  a: "Si renuncias antes del 20 de diciembre, te pagan el aguinaldo proporcional por los días trabajados. Si renuncias después del 20, ya lo debiste haber recibido completo."
                },
                {
                  q: "¿Puedo reclamar aguinaldo de años anteriores?",
                  a: "En principio no, el aguinaldo de cada año ya debió haberse pagado en su momento. Si nunca te lo pagaron, tienes derecho a reclamarlo con asesoría legal, aunque aplican plazos de prescripción."
                },
                {
                  q: "¿El aguinaldo proporcional lleva ISR?",
                  a: "El aguinaldo tiene una exención fiscal: los primeros 30 días de salario mínimo están exentos. El excedente paga ISR según tu tasa. Para montos significativos, consulta con un contador."
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="pt-4">
                    <p className="font-bold text-gray-900 mb-2">❓ {item.q}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">⚠️ Aviso Legal</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Esta información está basada en el Artículo 87 de la Ley Federal del Trabajo vigente en 2026. Los cálculos son estimaciones. Para asesoría específica sobre tu caso, consulta con un abogado laboral o la PROFEDET.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_AGUINALDO_BOTTOM" format="horizontal" />

          <section className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Calcula tu Aguinaldo Proporcional</h2>
            <p className="text-blue-100 mb-6">Nuestra calculadora usa la fórmula correcta: solo los días del año en curso, no el total de años trabajados</p>
            <a href="/" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg">
              Calcular mi Finiquito →
            </a>
          </section>
        </div>
      </article>
    </div>
  );
}
