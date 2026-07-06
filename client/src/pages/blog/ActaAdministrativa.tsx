import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import AdSense from "@/components/AdSense";

export default function ActaAdministrativa() {
  useSEO({
    title: "Acta Administrativa: Qué Es y Cómo Afecta tu Finiquito en México 2026",
    description:
      "¿Te levantaron un acta administrativa? Aprende qué es, cuándo es válida, cuándo no, cómo responder y si afecta el monto de tu finiquito en México.",
    canonical: "/blog/acta-administrativa-finiquito",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-200 text-sm mb-3 font-medium">📋 Derechos Laborales</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Acta Administrativa: Qué Es y Cómo Afecta tu Finiquito en México 2026
          </h1>
          <p className="text-lg text-blue-50">
            Muchas empresas usan el acta administrativa para intentar despedirte sin pagar indemnización. Conoce cuándo es válida, cuándo no lo es y qué hacer cuando te la presentan.
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
          <p className="text-gray-700 text-sm">Calcula cuánto te corresponde independientemente del acta</p>
          <a href="/" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm whitespace-nowrap">
            → Calcular mi Finiquito
          </a>
        </div>
      </div>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              El acta administrativa es uno de los documentos más temidos y más mal entendidos en las relaciones laborales mexicanas. Muchos trabajadores la firman sin saber exactamente qué implica. Este artículo te explica todo lo que necesitas saber.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_ACTA" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es un Acta Administrativa?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Un acta administrativa es un <strong>documento interno de la empresa</strong> que hace constar que un trabajador incurrió en alguna falta o incumplimiento. No está definida explícitamente en la LFT, pero su uso está muy extendido como mecanismo de control y como preparación para un posible despido justificado.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para que un despido sea <strong>justificado</strong> (y la empresa no tenga que pagar indemnización), la LFT exige que la causa esté establecida en el Artículo 47. Las actas administrativas son la forma en que las empresas documentan esas causas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Causas de Despido Justificado según el Art. 47 LFT</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              No cualquier incumplimiento justifica un despido sin indemnización. Las causas son específicas:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Engañar a la empresa al contratarse (falsedad de documentos o referencias)",
                "Faltas de honradez, actos de violencia, injurias contra el patrón o compañeros",
                "Cometer actos inmorales en el trabajo",
                "Revelar secretos industriales o comerciales de la empresa",
                "Más de 3 faltas sin justificación en 30 días",
                "Desobedecer sin causa justificada las instrucciones del patrón",
                "Negarse a tomar medidas de seguridad o higiene",
                "Presentarse en estado de embriaguez o bajo efectos de drogas",
              ].map((causa, i) => (
                <div key={i} className="flex items-start gap-2 bg-gray-50 rounded p-3 border border-gray-200">
                  <span className="text-red-500 font-bold flex-shrink-0">⚠️</span>
                  <p className="text-gray-700 text-sm">{causa}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-sm mt-4 italic">
              Si la causa del acta no está dentro de estas categorías, el despido sigue siendo injustificado aunque existan actas administrativas.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_ACTA_2" format="rectangle" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cuándo el Acta Administrativa NO Justifica el Despido?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Muchas empresas usan las actas de forma incorrecta o abusiva. Un acta administrativa no justifica el despido cuando:
            </p>
            <div className="space-y-3">
              {[
                { situacion: "El trabajador no estaba presente al levantarla", desc: "Si no pudiste dar tu versión de los hechos ni firmar el acta, su validez como prueba es muy cuestionable." },
                { situacion: "La falta no está tipificada en el Art. 47 LFT", desc: "Por ejemplo, si el acta es por 'actitud negativa' o 'bajo rendimiento' sin especificación, no es causa de rescisión." },
                { situacion: "El patrón tardó más de 30 días en actuar", desc: "La empresa debe ejercer la rescisión dentro de los 30 días siguientes a conocer la causa. Si esperó más, prescribió su derecho." },
                { situacion: "Es la primera falta leve y no hay antecedentes", desc: "Para las faltas menores, los tribunales suelen exigir que haya un patrón de conducta, no un incidente aislado." },
                { situacion: "El acta no tiene firma del trabajador ni de testigos válidos", desc: "Un acta sin firma del trabajador y sin testigos independientes tiene muy poco peso legal." },
              ].map((item, i) => (
                <Card key={i} className="border-l-4 border-l-orange-400 bg-orange-50">
                  <CardContent className="pt-4 pb-4">
                    <h3 className="font-bold text-gray-900 mb-1">{item.situacion}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qué Hacer Cuando te Presentan un Acta Administrativa</h2>
            <div className="space-y-3">
              {[
                {
                  num: "1",
                  titulo: "Lee el acta completa antes de firmar",
                  desc: "Tienes derecho a tomarte el tiempo necesario para leer el documento. No firmes bajo presión ni apresuradamente.",
                  color: "bg-blue-500"
                },
                {
                  num: "2",
                  titulo: "Escribe tu versión de los hechos en el mismo documento",
                  desc: "Si firmas, agrega después de tu firma: 'Firmo de recibido sin admitir los hechos descritos. Mi versión: [descripción breve]'. Esto protege tus derechos sin que la firma se use en tu contra.",
                  color: "bg-green-500"
                },
                {
                  num: "3",
                  titulo: "Solicita una copia",
                  desc: "Tienes derecho a quedarte con una copia del acta que firmas. Si la empresa se niega a dártela, es una señal de alerta.",
                  color: "bg-yellow-500"
                },
                {
                  num: "4",
                  titulo: "Documenta tu versión por escrito",
                  desc: "Envía un correo electrónico a tu jefe o a RR.HH. describiendo tu versión de los hechos. Así queda constancia de que no estás de acuerdo.",
                  color: "bg-orange-500"
                },
                {
                  num: "5",
                  titulo: "Consulta antes de aceptar una renuncia o firma de finiquito",
                  desc: "Si después del acta la empresa te ofrece renunciar o firmar un finiquito, no lo hagas sin calcular primero si el monto es correcto. A veces ofrecen menos de lo que les corresponde pagar.",
                  color: "bg-red-500"
                },
              ].map((paso, i) => (
                <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-4">
                  <span className={`${paso.color} text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0`}>{paso.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{paso.titulo}</h3>
                    <p className="text-gray-600 text-sm">{paso.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AdSense slot="SLOT_BLOG_ACTA_3" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo Afecta el Acta tu Finiquito?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-red-500 bg-red-50">
                <CardContent className="pt-4 pb-4">
                  <h3 className="font-bold text-red-800 mb-3">Si el despido es JUSTIFICADO (acta válida)</h3>
                  <p className="text-sm text-gray-700 mb-3">Solo recibes el finiquito básico:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✅ Saldo de salario</li>
                    <li>✅ Vacaciones proporcionales</li>
                    <li>✅ Prima vacacional</li>
                    <li>✅ Aguinaldo proporcional</li>
                    <li>❌ Sin indemnización (3 meses de salario)</li>
                    <li>❌ Sin 20 días por año</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-green-500 bg-green-50">
                <CardContent className="pt-4 pb-4">
                  <h3 className="font-bold text-green-800 mb-3">Si el despido es INJUSTIFICADO (acta inválida o insuficiente)</h3>
                  <p className="text-sm text-gray-700 mb-3">Recibes finiquito completo más:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✅ Saldo de salario</li>
                    <li>✅ Vacaciones proporcionales</li>
                    <li>✅ Prima vacacional</li>
                    <li>✅ Aguinaldo proporcional</li>
                    <li>✅ 3 meses de salario (Art. 50 LFT)</li>
                    <li>✅ 20 días de salario por año trabajado</li>
                    <li>✅ Prima de antigüedad (12 días/año)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Si no firmo el acta, ¿eso me protege?",
                  a: "No necesariamente. La empresa puede levantar el acta con testigos aunque tú no firmes, y puede despedirte de todas formas. Lo importante no es si firmas o no, sino cómo firmas y qué dice el acta."
                },
                {
                  q: "¿Cuántas actas necesita la empresa para despedirme con justa causa?",
                  a: "No existe un número mínimo establecido en la ley. Una sola acta por una falta grave (como robo o violencia) puede ser suficiente. Para faltas menores, generalmente los tribunales esperan ver un patrón de conducta repetida."
                },
                {
                  q: "Me dijeron que si no firmo el acta, me van a dar de baja de todas formas. ¿Pueden?",
                  a: "Sí, la empresa puede iniciar la rescisión aunque no firmes. Pero si el acta no tiene tu firma y la causa no está debidamente documentada, tienes mejores argumentos legales para impugnar el despido."
                },
                {
                  q: "¿Puedo impugnar un acta que ya firmé?",
                  a: "Sí, especialmente si puedes demostrar que firmaste bajo presión, que los hechos descritos no son verídicos, o que la causa no justifica el despido según el Art. 47 LFT. Consulta con un abogado laboralista."
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
            <h2 className="text-2xl font-bold text-white mb-3">Verifica cuánto te deben, independientemente del acta</h2>
            <p className="text-blue-100 mb-6">
              Calcula tu finiquito y conoce el monto correcto antes de negociar o firmar cualquier documento.
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
