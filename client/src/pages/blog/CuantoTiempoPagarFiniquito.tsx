import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import AdSense from "@/components/AdSense";

export default function CuantoTiempoPagarFiniquito() {
  useSEO({
    title: "¿Cuánto Tiempo Tiene la Empresa para Pagar el Finiquito? México 2026",
    description:
      "La ley mexicana establece plazos claros para el pago del finiquito. Conoce tus derechos, qué pasa si la empresa no paga a tiempo y cómo reclamar ante la CFCRL.",
    canonical: "/blog/cuanto-tiempo-para-pagar-finiquito",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-200 text-sm mb-3 font-medium">⏰ Derechos Laborales</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            ¿Cuánto Tiempo Tiene la Empresa para Pagar el Finiquito en México 2026?
          </h1>
          <p className="text-lg text-blue-50">
            La Ley Federal del Trabajo es clara: el finiquito debe pagarse de inmediato. Te explicamos qué dice la ley, qué plazo real aplica y qué hacer si tu empresa se niega a pagar.
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
          <p className="text-gray-700 text-sm">Calcula cuánto te deben pagar antes de firmarlo</p>
          <a href="/" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm whitespace-nowrap">
            → Calcular mi Finiquito
          </a>
        </div>
      </div>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Una de las preguntas más frecuentes al terminar una relación laboral es: <strong>¿cuántos días tiene la empresa para pagarme el finiquito?</strong> La respuesta puede sorprenderte — la ley no da semanas ni meses. El pago debe ser prácticamente inmediato.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_TIEMPO" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué Dice la Ley Federal del Trabajo?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El <strong>Artículo 53 al 55 de la LFT</strong> establece que, al concluir la relación laboral, el patrón debe liquidar al trabajador todas las prestaciones que le corresponden. Aunque la ley no fija un número exacto de días calendario, la práctica jurídica y los criterios de la <strong>CFCRL (Centro Federal de Conciliación y Registro Laboral)</strong> indican:
            </p>
            <Card className="border-l-4 border-l-blue-500 bg-blue-50 mb-4">
              <CardContent className="pt-4 pb-4">
                <ul className="space-y-2 text-gray-700">
                  <li>✅ <strong>Renuncia voluntaria:</strong> el finiquito se debe pagar el mismo día o máximo dentro de los siguientes <strong>5 días hábiles</strong></li>
                  <li>✅ <strong>Despido justificado:</strong> máximo <strong>5 días hábiles</strong> a partir de la fecha de baja</li>
                  <li>✅ <strong>Despido injustificado:</strong> máximo <strong>20 días hábiles</strong> (en este caso incluye partes de la liquidación)</li>
                </ul>
              </CardContent>
            </Card>
            <p className="text-gray-700 leading-relaxed">
              Los tribunales laborales han fallado reiteradamente que cualquier demora injustificada hace que la empresa incurra en mora, lo que genera <strong>intereses adicionales</strong> sobre las cantidades adeudadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué Incluye el Finiquito que Deben Pagarte?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Independientemente del motivo de la separación, tu finiquito debe incluir obligatoriamente:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "💰", titulo: "Saldo de salario", desc: "Los días trabajados del último período que no hayas cobrado aún" },
                { icon: "🏖️", titulo: "Vacaciones no disfrutadas", desc: "Los días de vacaciones que no tomaste, calculados con la reforma de vacaciones dignas 2023" },
                { icon: "💸", titulo: "Prima vacacional", desc: "El 25% adicional sobre tus vacaciones pendientes (Art. 80 LFT)" },
                { icon: "🎁", titulo: "Aguinaldo proporcional", desc: "Los días de aguinaldo correspondientes al tiempo trabajado en el año en curso" },
              ].map((item, i) => (
                <Card key={i} className="border border-gray-200">
                  <CardContent className="pt-4 pb-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.titulo}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <AdSense slot="SLOT_BLOG_TIEMPO_2" format="rectangle" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Situaciones Comunes y Qué Hacer en Cada Una</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">🕐 La empresa dice "espera unos días"</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Es la táctica más común. La empresa pide que regreses la próxima semana, que el contador está ocupado, que están en cierre de mes... Ninguna de esas razones es válida ante la ley.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Qué hacer:</strong> Exige por escrito (correo electrónico o WhatsApp) la fecha exacta de pago. Si pasan más de 5 días hábiles sin pago, ya puedes iniciar trámite ante la CFCRL sin costo alguno.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">📄 La empresa quiere que firmes primero</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Nunca firmes un finiquito <strong>antes de recibir el dinero</strong>. La firma es tu constancia de que recibiste el pago; hacerlo antes te deja sin recursos legales si después no pagan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Lo correcto es: revisar el cálculo, verificar que el monto sea correcto (usa nuestra calculadora), recibir el pago y <em>entonces</em> firmar.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">❌ La empresa simplemente no paga</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Si la empresa se niega o ignora tus solicitudes, tienes dos vías:
                </p>
                <Card className="border-l-4 border-l-red-500 bg-red-50">
                  <CardContent className="pt-4 pb-4">
                    <ol className="space-y-3 text-gray-700">
                      <li><strong>1. CFCRL (antes STPS):</strong> Presenta una queja en el Centro Federal de Conciliación y Registro Laboral. El proceso de conciliación es <strong>gratuito</strong> y obligatorio antes de demandar. Puedes hacerlo en línea en <a href="https://www.cfcrl.gob.mx" target="_blank" rel="noopener noreferrer" className="text-primary underline">cfcrl.gob.mx</a></li>
                      <li><strong>2. Tribunal Laboral:</strong> Si la conciliación falla, puedes presentar demanda. Un abogado laboralista cobra entre el 20-30% del monto recuperado, aunque muchos ofrecen consulta gratuita inicial.</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Consejos Prácticos Antes de Salir de la Empresa</h2>
            <div className="space-y-3">
              {[
                "Guarda toda tu documentación: contrato, recibos de nómina, comprobantes de vacaciones tomadas",
                "Anota la fecha exacta de tu último día trabajado — es la base de todos los cálculos",
                "Calcula tú mismo el monto antes de la reunión para no aceptar menos de lo que te corresponde",
                "No firmes ningún documento bajo presión; tienes derecho a leerlo con calma",
                "Si el finiquito te lo pagan en efectivo, exige un recibo con el desglose de conceptos",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 bg-green-50 rounded-lg p-4 border border-green-200">
                  <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                  <p className="text-gray-700 text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          <AdSense slot="SLOT_BLOG_TIEMPO_3" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                {
                  q: "¿La empresa puede pagar el finiquito en partes?",
                  a: "No, a menos que tú lo acuerdes explícitamente por escrito. El finiquito se debe pagar en una sola exhibición. Si aceptas pagos parciales, hazlo constar en un convenio firmado ante testigos o notario."
                },
                {
                  q: "¿Qué pasa si renuncié y la empresa ya no quiere pagarme el aguinaldo del año?",
                  a: "Tienes derecho al aguinaldo proporcional por los meses trabajados en ese año, aunque no hayas llegado al 20 de diciembre. Es una prestación irrenunciable según el Art. 87 LFT."
                },
                {
                  q: "¿Puedo reclamar el finiquito si no tenía contrato escrito?",
                  a: "Sí. La falta de contrato escrito no te hace perder tus derechos. La relación laboral se puede demostrar con recibos de nómina, mensajes, fotos, testigos o cualquier evidencia de que prestabas servicios."
                },
                {
                  q: "¿Hay plazo para reclamar un finiquito no pagado?",
                  a: "Sí: tienes 2 años a partir de que terminó la relación laboral para iniciar una reclamación (Art. 516 LFT). No esperes demasiado."
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
            <h2 className="text-2xl font-bold text-white mb-3">¿Sabes cuánto te deben exactamente?</h2>
            <p className="text-blue-100 mb-6">
              Calcula tu finiquito antes de la reunión con tu empresa. Así llegas preparado y no aceptas menos de lo que te corresponde.
            </p>
            <a href="/" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg">
              Calcular mi Finiquito Ahora →
            </a>
          </div>

        </div>
      </article>
    </div>
  );
}
