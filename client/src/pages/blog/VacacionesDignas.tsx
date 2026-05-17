import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";

export default function VacacionesDignas() {
  useSEO({
    title: "Vacaciones Dignas 2023: Qué Cambió en la Ley Federal del Trabajo",
    description:
      "La reforma de Vacaciones Dignas 2023 duplicó los días mínimos de vacaciones en México. Descubre cuántos días te corresponden según tu antigüedad y cómo afecta tu finiquito.",
    canonical: "/blog/vacaciones-dignas-reforma-2023",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-200 text-sm mb-3 font-medium">🏖️ Reforma Laboral</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Vacaciones Dignas 2023: Todo lo que Cambió en la Ley Federal del Trabajo
          </h1>
          <p className="text-lg text-blue-50">
            La reforma más importante en materia de vacaciones en décadas. Descubre cuántos días te corresponden ahora y cómo impacta tu finiquito.
          </p>
          <div className="flex items-center gap-4 mt-6 text-blue-200 text-sm">
            <span>📅 15 de mayo de 2026</span>
            <span>•</span>
            <span>⏱️ 7 min de lectura</span>
          </div>
        </div>
      </section>

      {/* CTA rápido */}
      <div className="bg-blue-50 border-b border-blue-100 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-sm">¿Cuántas vacaciones tienes en tu finiquito? Calcula ahora gratis</p>
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
              El <strong>27 de diciembre de 2022</strong> se publicó en el Diario Oficial de la Federación una reforma al Artículo 76 de la Ley Federal del Trabajo, que entró en vigor el <strong>1 de enero de 2023</strong>. Esta reforma, conocida como <strong>"Vacaciones Dignas"</strong>, duplicó prácticamente los días mínimos de vacaciones a los que tienen derecho los trabajadores mexicanos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Si llevas tiempo trabajando para la misma empresa, es muy probable que ahora tengas derecho a más días de vacaciones de los que creías, y esto también impacta directamente en tu finiquito.
            </p>
          </section>

          {/* Qué cambió */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué Cambió Exactamente?</h2>
            <Card className="border-l-4 border-l-green-500 bg-green-50 mb-6">
              <CardContent className="pt-4">
                <p className="text-green-900 font-semibold text-lg mb-2">El cambio principal:</p>
                <p className="text-green-800">
                  Antes de la reforma, el mínimo de vacaciones era de <strong>6 días</strong> al cumplir el primer año. Ahora es de <strong>12 días</strong>. En algunos años de antigüedad, el aumento fue del 100%.
                </p>
              </CardContent>
            </Card>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="p-3 bg-gray-200 text-left border">Años de servicio</th>
                    <th className="p-3 bg-red-100 text-center border text-red-800">Antes de 2023</th>
                    <th className="p-3 bg-green-100 text-center border text-green-800">Desde 2023</th>
                    <th className="p-3 bg-blue-100 text-center border text-blue-800">Días extra</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1 año", "6 días", "12 días", "+6 días 🎉"],
                    ["2 años", "8 días", "14 días", "+6 días 🎉"],
                    ["3 años", "10 días", "16 días", "+6 días 🎉"],
                    ["4 años", "12 días", "18 días", "+6 días 🎉"],
                    ["5 años", "14 días", "20 días", "+6 días 🎉"],
                    ["6 años", "14 días", "22 días", "+8 días 🎉"],
                    ["7 años", "14 días", "24 días", "+10 días 🎉"],
                    ["8 años", "14 días", "26 días", "+12 días 🎉"],
                  ].map(([años, antes, despues, extra], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-3 border font-medium">{años}</td>
                      <td className="p-3 border text-center text-red-700">{antes}</td>
                      <td className="p-3 border text-center text-green-700 font-bold">{despues}</td>
                      <td className="p-3 border text-center text-blue-700 font-semibold">{extra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Cómo se calcula ahora */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo Se Calcula la Nueva Tabla de Vacaciones?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La nueva fórmula del Artículo 76 LFT establece que:
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 mb-4">
              <ul className="text-purple-900 space-y-2 text-sm">
                <li>• Al cumplir el <strong>primer año</strong>: mínimo <strong>12 días</strong> de vacaciones</li>
                <li>• Por cada año adicional: se agregan <strong>2 días más</strong></li>
                <li>• Esto continúa de forma progresiva sin tope máximo definido en la ley para los primeros años</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Antes de la reforma, la tabla aumentaba de 6 a 12 días durante los primeros 4 años, y luego aumentaba solo 2 días cada 5 años de servicio. Ahora los aumentos son anuales y más rápidos.
            </p>
          </section>

          {/* Impacto en finiquito */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo Afecta la Reforma a tu Finiquito?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Las vacaciones proporcionales en el finiquito se calculan sobre los días que te corresponden según tu antigüedad. Con la reforma, ese número de días base es mayor, lo que significa un finiquito más alto.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <Card className="border-2 border-red-200">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-red-700 mb-3">❌ Antes de 2023 (3 años de servicio)</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>Días de vacaciones: <strong>10 días</strong></p>
                    <p>Salario diario: $500</p>
                    <p>Días desde aniversario: 120</p>
                    <p className="border-t pt-2">Vacaciones proporcionales:</p>
                    <p className="font-bold text-red-700">(10÷365) × 120 × $500 = $1,643.84</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-green-200">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-green-700 mb-3">✅ Desde 2023 (3 años de servicio)</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>Días de vacaciones: <strong>16 días</strong></p>
                    <p>Salario diario: $500</p>
                    <p>Días desde aniversario: 120</p>
                    <p className="border-t pt-2">Vacaciones proporcionales:</p>
                    <p className="font-bold text-green-700">(16÷365) × 120 × $500 = <strong>$2,630.14</strong></p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-gray-600">
              En este ejemplo, la reforma representa <strong>$986 adicionales</strong> solo en vacaciones proporcionales, sin contar la prima vacacional (25% extra sobre ese monto).
            </p>
          </section>

          {/* Derechos adicionales */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Otros Derechos Relacionados con Vacaciones</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-4">
                  <h3 className="font-bold text-gray-900 mb-2">🏖️ Derecho a tomar las vacaciones</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Las vacaciones deben disfrutarse dentro de los 6 meses siguientes al cumpleaños del año de servicio. El patrón no puede sustituirlas por dinero mientras la relación laboral esté vigente. Solo se pagan en el finiquito si no fueron tomadas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <h3 className="font-bold text-gray-900 mb-2">✨ Prima Vacacional del 25%</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Además del pago de los días de vacaciones, el trabajador tiene derecho a una prima del 25% adicional (Art. 80 LFT). Esta prima también se incluye proporcionalmente en el finiquito.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <h3 className="font-bold text-gray-900 mb-2">📋 Verificar tu contrato</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Algunos contratos colectivos o individuales otorgan más días de vacaciones que el mínimo legal. En ese caso, siempre aplica el que sea más favorable para el trabajador. La LFT es un piso mínimo, no un techo máximo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Qué hacer si no te respetan */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué Hacer si tu Empresa No Respeta la Nueva Tabla?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si tu empresa sigue usando la tabla anterior (anterior a 2023) para calcular tus vacaciones o tu finiquito, está violando la ley. Tienes varias opciones:
            </p>
            <div className="space-y-3">
              {[
                { paso: "1", texto: "Presenta una reclamación interna al área de Recursos Humanos, citando el Art. 76 LFT reformado." },
                { paso: "2", texto: "Acude a la Procuraduría Federal de la Defensa del Trabajo (PROFEDET), que ofrece asesoría gratuita." },
                { paso: "3", texto: "Presenta una demanda ante el Tribunal Laboral correspondiente si no hay acuerdo." },
                { paso: "4", texto: "Consulta con un abogado laboral para evaluar si procede reclamación retroactiva." },
              ].map((item) => (
                <div key={item.paso} className="flex gap-3 items-start">
                  <span className="bg-primary text-white font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    {item.paso}
                  </span>
                  <p className="text-gray-700 text-sm pt-0.5">{item.texto}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Aviso */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">⚠️ Aviso Legal</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Esta información se basa en la reforma al Art. 76 LFT publicada el 27 de diciembre de 2022 y vigente desde el 1 de enero de 2023. La situación legal puede variar según convenios colectivos o contratos individuales. Para asesoría específica, consulta con un abogado laboral.
            </p>
          </section>

          {/* CTA final */}
          <section className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Calcula tus Vacaciones en el Finiquito</h2>
            <p className="text-blue-100 mb-6">
              Nuestra calculadora aplica la tabla actualizada de Vacaciones Dignas 2023. Ingresa tus datos y obtén el cálculo correcto.
            </p>
            <a
              href="/"
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg"
            >
              Calcular mi Finiquito →
            </a>
          </section>
        </div>
      </article>
    </div>
  );
}
