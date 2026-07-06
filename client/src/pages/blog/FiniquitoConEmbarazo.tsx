import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import AdSense from "@/components/AdSense";

export default function FiniquitoConEmbarazo() {
  useSEO({
    title: "Finiquito con Embarazo: Tus Derechos Laborales en México 2026",
    description:
      "¿Estás embarazada y te despidieron o quieres renunciar? Conoce tus derechos: protección LFT, subsidio IMSS, cuánto te corresponde y qué hacer paso a paso.",
    canonical: "/blog/finiquito-con-embarazo",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-200 text-sm mb-3 font-medium">🤱 Derechos Laborales</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Finiquito con Embarazo: Qué te Corresponde y Cómo Proteger tus Derechos en México 2026
          </h1>
          <p className="text-lg text-blue-50">
            El embarazo es una protección legal, no un motivo de despido. Si estás embarazada y terminas tu relación laboral, tienes derechos especiales que debes conocer.
          </p>
          <div className="flex items-center gap-4 mt-6 text-blue-200 text-sm">
            <span>📅 5 de julio de 2026</span>
            <span>•</span>
            <span>⏱️ 8 min de lectura</span>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 border-b border-blue-100 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-sm">Calcula lo que te deben incluido tu embarazo</p>
          <a href="/" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm whitespace-nowrap">
            → Calcular mi Finiquito
          </a>
        </div>
      </div>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              El <strong>embarazo es una causa de protección especial</strong> en la legislación laboral mexicana. Si te encuentras en esta situación y necesitas calcular tu finiquito — ya sea porque renunciaste o porque la empresa te despidió — hay factores adicionales muy importantes que debes considerar.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_EMBARAZO" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Protección Legal del Embarazo en México (Art. 170 LFT)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El Artículo 170 de la Ley Federal del Trabajo establece derechos específicos para trabajadoras embarazadas:
            </p>
            <div className="space-y-3">
              {[
                { icon: "🛡️", titulo: "No discriminación", desc: "La empresa no puede despedirte por estar embarazada ni reducir tu salario o funciones por ese motivo" },
                { icon: "⚕️", titulo: "Incapacidad por maternidad", desc: "6 semanas antes del parto y 6 semanas después, con goce de salario pagado por el IMSS (o 12 semanas después del parto si lo prefieres)" },
                { icon: "🕐", titulo: "Descansos adicionales", desc: "Dos descansos de 30 minutos al día para lactancia durante el primer año de vida del bebé" },
                { icon: "💼", titulo: "Reincorporación garantizada", desc: "Al término de la incapacidad, tienes derecho a regresar al mismo puesto con las mismas condiciones" },
              ].map((item, i) => (
                <Card key={i} className="border-l-4 border-l-pink-400 bg-pink-50">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.titulo}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Escenario 1: Te Despidieron Estando Embarazada</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Este es el caso más grave. El despido de una trabajadora embarazada se presume <strong>discriminatorio</strong> ante la ley mexicana. La carga de la prueba recae sobre el patrón, quien debe demostrar que el despido fue por causa justificada completamente ajena al embarazo.
            </p>
            <Card className="border-l-4 border-l-red-500 bg-red-50 mb-4">
              <CardContent className="pt-4 pb-4">
                <h3 className="font-bold text-red-800 mb-3">Si te despidieron por embarazo, te corresponde:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✅ <strong>Finiquito completo</strong> (saldo de salario + vacaciones + prima vacacional + aguinaldo proporcional)</li>
                  <li>✅ <strong>Indemnización constitucional:</strong> 3 meses de salario + 20 días por año trabajado (despido injustificado)</li>
                  <li>✅ <strong>Prima de antigüedad:</strong> 12 días de salario por año trabajado (con tope de 2× UMA)</li>
                  <li>✅ <strong>60 días de salario adicionales</strong> por concepto de discriminación (Art. 133 LFT)</li>
                  <li>✅ Acceso a <strong>subsidio de maternidad del IMSS</strong> si tienes semanas cotizadas suficientes (ver abajo)</li>
                </ul>
              </CardContent>
            </Card>
            <p className="text-gray-700 leading-relaxed">
              En estos casos es muy recomendable consultar con un abogado laboralista. Muchos ofrecen la primera consulta gratuita y cobran un porcentaje solo si ganas el caso.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_EMBARAZO_2" format="rectangle" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Escenario 2: Renunciaste Estando Embarazada</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si la renuncia fue voluntaria, tu finiquito será el estándar:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {[
                { label: "Saldo de salario", desc: "Días del último período" },
                { label: "Vacaciones proporcionales", desc: "Las que no hayas tomado" },
                { label: "Prima vacacional", desc: "25% de las vacaciones" },
                { label: "Aguinaldo proporcional", desc: "Por meses trabajados este año" },
              ].map((item, i) => (
                <Card key={i} className="border border-gray-200">
                  <CardContent className="pt-3 pb-3">
                    <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Importante:</strong> Si renunciaste, no tienes derecho a indemnización. Sin embargo, si la renuncia fue <em>forzada</em> (la empresa te presionó hasta que no tuviste más opción), legalmente se llama "despido indirecto" y sí genera indemnización. Documenta todo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">El Subsidio de Maternidad del IMSS: No lo Pierdas</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aunque ya no trabajes, puedes tener derecho al <strong>subsidio por maternidad del IMSS</strong> si cumples con los requisitos:
            </p>
            <Card className="border-l-4 border-l-blue-500 bg-blue-50 mb-4">
              <CardContent className="pt-4 pb-4">
                <ul className="space-y-2 text-gray-700">
                  <li>📋 Haber cotizado al IMSS al menos <strong>30 semanas en los 12 meses anteriores al parto</strong></li>
                  <li>💊 Estar registrada ante el IMSS en el momento del parto</li>
                  <li>🏥 El subsidio equivale al <strong>100% del último salario registrado</strong> ante el IMSS</li>
                  <li>📅 Se paga por <strong>84 días</strong> (12 semanas) — 42 antes del parto y 42 después</li>
                </ul>
              </CardContent>
            </Card>
            <p className="text-gray-700 leading-relaxed">
              Si estás próxima a dejar la empresa, verifica en <a href="https://www.imss.gob.mx" target="_blank" rel="noopener noreferrer" className="text-primary underline">imss.gob.mx</a> tu número de semanas cotizadas. Si ya alcanzaste las 30 semanas, tienes derecho al subsidio independientemente de si sigues o no trabajando al momento del parto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pasos a Seguir si Terminaste tu Trabajo Embarazada</h2>
            <div className="space-y-3">
              {[
                { num: "1", titulo: "Obtén tu carta de baja del IMSS", desc: "Solicita a la empresa que te den la carta de baja laboral y verifica que tu fecha de baja en el IMSS sea correcta." },
                { num: "2", titulo: "Verifica tus semanas cotizadas", desc: "Entra a imss.gob.mx con tu CURP y revisa si tienes las 30 semanas necesarias para el subsidio de maternidad." },
                { num: "3", titulo: "Calcula tu finiquito con nuestra calculadora", desc: "Ingresa tus datos y obtén el monto exacto al que tienes derecho antes de firmar nada." },
                { num: "4", titulo: "Acude a la CFCRL si hubo discriminación", desc: "Si sospechas que el despido fue por tu embarazo, presenta tu caso en el Centro Federal de Conciliación. Es gratuito." },
                { num: "5", titulo: "Conserva toda la documentación", desc: "Guarda contratos, nóminas, correos y cualquier prueba de tu embarazo durante al menos 2 años." },
              ].map((paso, i) => (
                <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-4">
                  <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">{paso.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{paso.titulo}</h3>
                    <p className="text-gray-600 text-sm">{paso.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AdSense slot="SLOT_BLOG_EMBARAZO_3" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                {
                  q: "¿Puedo cobrar el finiquito y también el subsidio del IMSS?",
                  a: "Sí, son conceptos independientes. El finiquito te lo paga la empresa por la terminación del contrato. El subsidio de maternidad te lo paga el IMSS por el período pre y postnatal, siempre que tengas las semanas cotizadas requeridas."
                },
                {
                  q: "¿Qué pasa si la empresa me da de baja en el IMSS al enterarse que estoy embarazada?",
                  a: "Eso es discriminación laboral. Puedes denunciarlo ante la CFCRL o directamente ante el IMSS. La empresa puede recibir multas y sanciones. Además, sigues teniendo derechos laborales aunque te hayan dado de baja ilegalmente."
                },
                {
                  q: "Renuncié antes de saber que estaba embarazada. ¿Puedo reclamar algo?",
                  a: "Una renuncia firmada antes de conocer el embarazo es válida. Sin embargo, si puedes demostrar que te presionaron para renunciar, podría calificar como despido indirecto. Si simplemente renunciaste, recibes el finiquito estándar más el subsidio del IMSS si cumples los requisitos de semanas cotizadas."
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
            <h2 className="text-2xl font-bold text-white mb-3">Conoce el monto exacto de tu finiquito</h2>
            <p className="text-blue-100 mb-6">
              Nuestra calculadora incluye todos los conceptos de la LFT. Calcúlalo gratis antes de firmar cualquier documento.
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
