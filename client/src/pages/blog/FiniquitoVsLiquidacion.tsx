import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";

export default function FiniquitoVsLiquidacion() {
  useSEO({
    title: "Diferencia entre Finiquito y Liquidación en México 2026",
    description:
      "¿Cuál es la diferencia entre finiquito y liquidación en México? Aprende cuándo aplica cada uno, qué incluye y cómo calcularlo según la Ley Federal del Trabajo.",
    canonical: "/blog/finiquito-vs-liquidacion",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-200 text-sm mb-3 font-medium">⚖️ Conceptos Clave</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Diferencia entre Finiquito y Liquidación en México 2026
          </h1>
          <p className="text-lg text-blue-50">
            Dos conceptos que muchos confunden y que pueden representar una gran diferencia en el monto que recibes
          </p>
          <div className="flex items-center gap-4 mt-6 text-blue-200 text-sm">
            <span>📅 15 de mayo de 2026</span>
            <span>•</span>
            <span>⏱️ 6 min de lectura</span>
          </div>
        </div>
      </section>

      {/* CTA rápido */}
      <div className="bg-blue-50 border-b border-blue-100 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-sm">Calcula tu finiquito o liquidación con nuestra herramienta gratuita</p>
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
              Es muy común que los trabajadores usen los términos <strong>finiquito</strong> y <strong>liquidación</strong> como sinónimos, pero en México tienen significados legales muy distintos. La diferencia puede representar cientos de miles de pesos adicionales a tu favor.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Entender cuál te corresponde es fundamental para no aceptar menos de lo que marca la ley.
            </p>
          </section>

          {/* Comparación visual */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Diferencia en una Tabla</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="p-3 bg-gray-100 text-left border"></th>
                    <th className="p-3 bg-blue-600 text-white text-center border">Finiquito</th>
                    <th className="p-3 bg-purple-600 text-white text-center border">Liquidación</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["¿Cuándo aplica?", "Siempre al terminar la relación laboral", "Solo en despido injustificado"],
                    ["¿Quién lo recibe?", "Todo trabajador que sale de una empresa", "Solo trabajadores despedidos sin causa justificada"],
                    ["Saldo de salario", "✅ Incluido", "✅ Incluido"],
                    ["Aguinaldo proporcional", "✅ Incluido", "✅ Incluido"],
                    ["Vacaciones proporcionales", "✅ Incluido", "✅ Incluido"],
                    ["Prima vacacional", "✅ Incluido", "✅ Incluido"],
                    ["3 meses de salario", "❌ No incluido", "✅ Incluido"],
                    ["20 días por año trabajado", "❌ No incluido", "✅ Incluido"],
                    ["Prima de antigüedad", "Solo si tienes +15 años", "✅ Desde el primer año"],
                  ].map(([concepto, fin, liq], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-3 border font-medium text-gray-700">{concepto}</td>
                      <td className="p-3 border text-center text-gray-700">{fin}</td>
                      <td className="p-3 border text-center text-gray-700">{liq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Finiquito */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es el Finiquito?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El finiquito es el pago base que corresponde a <strong>todo trabajador</strong> al terminar su relación laboral, sin importar la causa de la terminación: renuncia voluntaria, despido justificado, mutuo acuerdo o conclusión de contrato por tiempo determinado.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Está compuesto por las prestaciones que el trabajador fue acumulando y que aún no ha cobrado:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: "💼", concepto: "Saldo de salario", desc: "Días trabajados pendientes de pago" },
                { icon: "🎁", concepto: "Aguinaldo proporcional", desc: "Parte del aguinaldo del año en curso" },
                { icon: "🏖️", concepto: "Vacaciones proporcionales", desc: "Días de vacaciones no disfrutados" },
                { icon: "✨", concepto: "Prima vacacional", desc: "25% adicional sobre vacaciones" },
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="pt-4 flex gap-3 items-start">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{item.concepto}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Liquidación */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es la Liquidación?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La liquidación es un pago <strong>adicional al finiquito</strong> que solo aplica cuando el empleador termina la relación laboral <em>sin causa justificada</em>, es decir, un despido injustificado. Está regulada en los Artículos 48 y 50 de la LFT.
            </p>
            <Card className="border-l-4 border-l-purple-500 bg-purple-50">
              <CardContent className="pt-4">
                <p className="font-bold text-purple-900 mb-3">La liquidación incluye, además del finiquito:</p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="bg-purple-200 text-purple-800 font-bold px-2 py-1 rounded text-sm whitespace-nowrap">3 meses</span>
                    <p className="text-purple-900 text-sm">3 meses de salario completo (salario constitucional)</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-purple-200 text-purple-800 font-bold px-2 py-1 rounded text-sm whitespace-nowrap">20 días/año</span>
                    <p className="text-purple-900 text-sm">20 días de salario por cada año de servicio</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-purple-200 text-purple-800 font-bold px-2 py-1 rounded text-sm whitespace-nowrap">12 días/año</span>
                    <p className="text-purple-900 text-sm">Prima de antigüedad (12 días por año desde el 1er año)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Ejemplo numérico */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ejemplo Práctico: La Diferencia en Números</h2>
            <p className="text-gray-700 mb-4">
              Supongamos: salario mensual $20,000, 5 años de servicio, terminación en mayo (135 días del año).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-blue-300">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-blue-700 text-lg mb-3">Finiquito (Renuncia)</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>Aguinaldo proporcional</span><span className="font-semibold">$3,699</span></div>
                    <div className="flex justify-between"><span>Vacaciones proporcionales</span><span className="font-semibold">$2,959</span></div>
                    <div className="flex justify-between"><span>Prima vacacional</span><span className="font-semibold">$740</span></div>
                    <div className="flex justify-between border-t pt-2 font-bold text-blue-700 text-base"><span>TOTAL</span><span>~$7,400</span></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-300">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-purple-700 text-lg mb-3">Liquidación (Despido Injustificado)</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>Finiquito base</span><span className="font-semibold">~$7,400</span></div>
                    <div className="flex justify-between"><span>3 meses de salario</span><span className="font-semibold">$60,000</span></div>
                    <div className="flex justify-between"><span>20 días × 5 años</span><span className="font-semibold">$22,222</span></div>
                    <div className="flex justify-between"><span>Prima de antigüedad</span><span className="font-semibold">$13,333</span></div>
                    <div className="flex justify-between border-t pt-2 font-bold text-purple-700 text-base"><span>TOTAL</span><span>~$102,955</span></div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-gray-500 mt-3">*Ejemplo aproximado. Usa nuestra calculadora para tu caso específico.</p>
          </section>

          {/* Cuándo es despido injustificado */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cuándo es un Despido Injustificado?</h2>
            <p className="text-gray-700 mb-4">
              El Art. 47 LFT lista las causas que justifican un despido. Si el empleador te despide por razones <strong>no incluidas</strong> en esa lista, o sin pruebas, el despido es injustificado y tienes derecho a liquidación completa. Algunos ejemplos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-red-400">
                <CardContent className="pt-4">
                  <p className="font-bold text-red-700 mb-2">❌ Despido Injustificado (tienes derecho a liquidación)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Recorte de personal / reducción de plantilla</li>
                    <li>• Cierre o quiebra de la empresa</li>
                    <li>• "Ya no te necesitamos"</li>
                    <li>• Cambio de administración</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-green-400">
                <CardContent className="pt-4">
                  <p className="font-bold text-green-700 mb-2">✅ Despido Justificado (solo finiquito)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Robo o fraude comprobado</li>
                    <li>• Actos de violencia en el trabajo</li>
                    <li>• Inasistencias injustificadas repetidas</li>
                    <li>• Revelación de secretos de la empresa</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Aviso */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">⚠️ Aviso Legal</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Esta información es orientativa y se basa en la Ley Federal del Trabajo vigente. Cada caso laboral tiene particularidades. Si tienes dudas sobre si tu despido fue justificado o injustificado, consulta con un abogado laboral antes de firmar cualquier documento.
            </p>
          </section>

          {/* CTA final */}
          <section className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Calcula tu Finiquito o Liquidación</h2>
            <p className="text-blue-100 mb-6">
              Nuestra calculadora incluye ambos escenarios. Solo selecciona el tipo de terminación y obtén el resultado exacto.
            </p>
            <a
              href="/"
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg"
            >
              Ir a la Calculadora →
            </a>
          </section>
        </div>
      </article>
    </div>
  );
}
