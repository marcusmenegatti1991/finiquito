import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import AdSense from "@/components/AdSense";

export default function FiniquitoYSeguroSocial() {
  useSEO({
    title: "Finiquito y Seguro Social IMSS: Qué Pasa al Dejar tu Trabajo México 2026",
    description:
      "¿Qué pasa con tu IMSS cuando cobras tu finiquito? Vigencia del seguro, AFORE, crédito INFONAVIT y pasos para proteger tus derechos de seguridad social en México.",
    canonical: "/blog/finiquito-y-seguro-social-imss",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-200 text-sm mb-3 font-medium">🏥 Seguridad Social</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Finiquito y Seguro Social IMSS: Qué Pasa con tu Seguridad Social al Dejar el Trabajo en México 2026
          </h1>
          <p className="text-lg text-blue-50">
            Al cobrar tu finiquito, tu relación con el IMSS cambia. Conoce cuánto dura tu seguro, qué pasa con tu AFORE, tu INFONAVIT y qué acciones tomar de inmediato.
          </p>
          <div className="flex items-center gap-4 mt-6 text-blue-200 text-sm">
            <span>📅 5 de julio de 2026</span>
            <span>•</span>
            <span>⏱️ 7 min de lectura</span>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 border-b border-blue-100 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-sm">Calcula tu finiquito completo antes de firmar</p>
          <a href="/" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm whitespace-nowrap">
            → Calcular mi Finiquito
          </a>
        </div>
      </div>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              El finiquito no es lo único que cambia al terminar tu trabajo. Tu seguridad social — IMSS, AFORE e INFONAVIT — también se ve afectada. Muchos trabajadores no saben exactamente qué pasa con cada uno de estos servicios y pierden derechos por falta de información.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_IMSS" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cuánto Tiempo Dura tu Seguro del IMSS Después del Finiquito?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al darte de baja del IMSS no pierdes el seguro inmediatamente. La Ley del Seguro Social establece períodos de <strong>conservación de derechos</strong>:
            </p>
            <div className="space-y-3">
              {[
                {
                  servicio: "Enfermedades y Maternidad",
                  plazo: "8 semanas",
                  desc: "Puedes atenderte en el IMSS durante 8 semanas después de tu baja, siempre que hayas cotizado al menos 8 semanas en los 12 meses anteriores",
                  color: "border-l-blue-500 bg-blue-50"
                },
                {
                  servicio: "Incapacidad temporal (subsidio)",
                  plazo: "Hasta 52 semanas",
                  desc: "Si una enfermedad o accidente inició mientras aún estabas dado de alta y requieres incapacidad, el IMSS puede pagar hasta 52 semanas de subsidio",
                  color: "border-l-green-500 bg-green-50"
                },
                {
                  servicio: "Pensión por invalidez o muerte",
                  plazo: "Derechos acumulados",
                  desc: "Los derechos a pensión se calculan con base en las semanas cotizadas acumuladas durante toda tu vida laboral — no se pierden al dejar el trabajo",
                  color: "border-l-purple-500 bg-purple-50"
                },
              ].map((item, i) => (
                <Card key={i} className={`border-l-4 ${item.color}`}>
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.servicio}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                      <span className="bg-white border border-gray-300 text-gray-800 font-bold px-3 py-1 rounded-full text-sm whitespace-nowrap flex-shrink-0">{item.plazo}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tu AFORE: Qué Pasa con tu Ahorro para el Retiro</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tu <strong>AFORE (Administradora de Fondos para el Retiro)</strong> es tuya, no de la empresa. Al dejar de trabajar:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Card className="border border-gray-200">
                <CardContent className="pt-4 pb-4">
                  <h3 className="font-bold text-gray-900 mb-2">✅ Lo que NO pierdes</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• El dinero acumulado en tu AFORE permanece intacto</li>
                    <li>• Tu cuenta sigue a tu nombre aunque no coticen</li>
                    <li>• Los rendimientos siguen generándose</li>
                    <li>• Puedes seguir aportando voluntariamente</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border border-gray-200">
                <CardContent className="pt-4 pb-4">
                  <h3 className="font-bold text-gray-900 mb-2">⚠️ Lo que debes hacer</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Verifica que tu saldo esté correcto en <a href="https://www.e-sar.com.mx" target="_blank" rel="noopener noreferrer" className="text-primary underline">e-sar.com.mx</a></li>
                    <li>• Cuando consigas nuevo trabajo, actualiza tu NSS con el nuevo patrón</li>
                    <li>• Puedes retirar tu saldo de desempleo (si llevas 46 días sin empleo y cumples requisitos)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Card className="border-l-4 border-l-yellow-400 bg-yellow-50">
              <CardContent className="pt-4 pb-4">
                <p className="text-gray-700 text-sm">
                  <strong>Retiro por desempleo:</strong> Si tienes al menos 46 días sin empleo y cotizaste al menos 24 meses antes de tu baja, puedes retirar hasta <strong>90 días de tu salario promedio</strong> de la Subcuenta de Retiro (Art. 191 LSS). Solo puedes hacerlo dos veces durante toda tu vida laboral, así que evalúalo bien antes.
                </p>
              </CardContent>
            </Card>
          </section>

          <AdSense slot="SLOT_BLOG_IMSS_2" format="rectangle" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tu Crédito INFONAVIT al Dejar el Trabajo</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si tienes un crédito INFONAVIT activo, la situación es importante:
            </p>
            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-bold text-red-800 mb-2">⚠️ Si ya tienes crédito activo</h3>
                <p className="text-gray-700 text-sm">
                  Cuando dejas de trabajar, las aportaciones patronales al INFONAVIT se detienen. Si tienes crédito, debes continuar pagando las mensualidades directamente al INFONAVIT para no caer en mora. Entra a <a href="https://www.infonavit.org.mx" target="_blank" rel="noopener noreferrer" className="text-primary underline">infonavit.org.mx</a> para conocer las opciones de pago en período de desempleo.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-2">✅ Si aún no tienes crédito</h3>
                <p className="text-gray-700 text-sm">
                  Los puntos acumulados para crédito no se pierden. Cuando vuelvas a trabajar, seguirás acumulando puntos. También puedes revisar tu saldo de la subcuenta de vivienda en el INFONAVIT, que es parte de tus aportaciones acumuladas.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Lista de Acciones al Cobrar tu Finiquito</h2>
            <div className="space-y-3">
              {[
                { icon: "🏥", accion: "Anota tu fecha de baja del IMSS", desc: "A partir de esa fecha corren las 8 semanas de conservación de derechos. Aprovéchalas si necesitas atención médica." },
                { icon: "💊", accion: "Tramita tu Continuación Voluntaria si la necesitas", desc: "Si tienes alguna enfermedad crónica o en tratamiento, puedes mantener el IMSS pagando una cuota mensual voluntaria." },
                { icon: "💰", accion: "Revisa tu AFORE en e-sar.com.mx", desc: "Verifica que tus aportaciones estén al día hasta tu fecha de baja y que no haya discrepancias." },
                { icon: "🏠", accion: "Comunica al INFONAVIT si tienes crédito", desc: "Informa tu nueva situación para explorar opciones de prórroga o pago directo durante el desempleo." },
                { icon: "📋", accion: "Guarda tu Constancia de Semanas Cotizadas", desc: "Es el documento que comprueba tu historial ante el IMSS. Descárgala en imss.gob.mx antes de que sea más difícil obtenerla." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.accion}</h3>
                    <p className="text-gray-600 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AdSense slot="SLOT_BLOG_IMSS_3" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                {
                  q: "¿La empresa puede negarse a darme de baja en el IMSS?",
                  a: "No. Al terminar la relación laboral, el patrón tiene la obligación de tramitar la baja ante el IMSS dentro de los 5 días hábiles siguientes. Si no lo hace, puedes reportarlo directamente al IMSS y la empresa recibirá una multa."
                },
                {
                  q: "¿Qué pasa si mi empresa nunca me inscribió al IMSS?",
                  a: "Tienes derecho a que te inscriban retroactivamente y a recibir tu finiquito completo. Puedes denunciarlo ante el IMSS y ante la CFCRL. Esta situación también genera responsabilidades penales para el patrón."
                },
                {
                  q: "¿Puedo seguir usando el IMSS si ya me dieron el finiquito?",
                  a: "Sí, durante las 8 semanas de conservación de derechos puedes seguir atenderte en el IMSS. Después de esas 8 semanas, solo podrás acceder a urgencias o mediante la Continuación Voluntaria (pago mensual voluntario)."
                },
              ].map((faq, i) => (
                <Card key={i} className="border border-gray-200">
                  <CardContent className="pt-4 pb-4">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">¿Sabes cuánto te deben de finiquito?</h2>
            <p className="text-blue-100 mb-6">
              Calcula tu finiquito en segundos con nuestra herramienta gratuita conforme a la LFT vigente.
            </p>
            <a href="/" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg">
              Calcular mi Finiquito →
            </a>
          </div>

        </div>
      </article>
    </div>
  );
}
