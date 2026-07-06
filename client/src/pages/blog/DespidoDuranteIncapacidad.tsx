import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import AdSense from "@/components/AdSense";

export default function DespidoDuranteIncapacidad() {
  useSEO({
    title: "¿Me Pueden Despedir Estando de Incapacidad? Tus Derechos México 2026",
    description:
      "La ley protege al trabajador durante una incapacidad por enfermedad o accidente. Conoce si pueden despedirte, cuánto te corresponde y cómo defenderte en México.",
    canonical: "/blog/despido-durante-incapacidad",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-200 text-sm mb-3 font-medium">⚖️ Derechos Laborales</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            ¿Me Pueden Despedir Estando de Incapacidad? Derechos del Trabajador en México 2026
          </h1>
          <p className="text-lg text-blue-50">
            Estar de incapacidad no significa estar desprotegido. Conoce qué dice la Ley Federal del Trabajo sobre el despido durante una incapacidad y cuánto te corresponde si ocurre.
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
          <p className="text-gray-700 text-sm">Calcula cuánto te deben si te despidieron</p>
          <a href="/" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm whitespace-nowrap">
            → Calcular mi Finiquito
          </a>
        </div>
      </div>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Una pregunta muy frecuente: <strong>¿puede la empresa despedirme mientras estoy de incapacidad por el IMSS?</strong> La respuesta corta es: técnicamente sí puede, pero con consecuencias muy significativas. El despido durante una incapacidad generalmente se considera injustificado y te da derecho a una indemnización mayor.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_INCAPACIDAD" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué Dice la Ley Federal del Trabajo?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El <strong>Artículo 42 de la LFT</strong> establece que la incapacidad temporal por enfermedad o accidente es una causa de <strong>suspensión de la relación laboral</strong>, no de terminación. Esto significa:
            </p>
            <div className="space-y-3">
              {[
                {
                  titulo: "La relación laboral se suspende, no se termina",
                  desc: "Durante la incapacidad, los efectos del contrato quedan en pausa. La empresa no puede alegar que dejaste de trabajar como justificación para el despido.",
                  icon: "⏸️",
                  color: "border-l-blue-500 bg-blue-50"
                },
                {
                  titulo: "El patrón no puede usar la incapacidad como causal de despido",
                  desc: "Si la empresa te despide por estar incapacitado, es automáticamente un despido injustificado — sin importar cómo lo redacten en el papel.",
                  icon: "🚫",
                  color: "border-l-red-500 bg-red-50"
                },
                {
                  titulo: "Tienes derecho a reincorporarte",
                  desc: "Una vez terminada la incapacidad, puedes exigir regresar a tu puesto en las mismas condiciones. Si la empresa no te permite volver, es un despido encubierto.",
                  icon: "✅",
                  color: "border-l-green-500 bg-green-50"
                },
              ].map((item, i) => (
                <Card key={i} className={`border-l-4 ${item.color}`}>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cuánto Tiempo Puede Durar la Suspensión?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La ley establece límites:
            </p>
            <Card className="border-l-4 border-l-yellow-400 bg-yellow-50 mb-4">
              <CardContent className="pt-4 pb-4">
                <ul className="space-y-3 text-gray-700">
                  <li>📋 <strong>Enfermedad general:</strong> el IMSS puede otorgar incapacidad hasta por <strong>52 semanas</strong> (1 año) con posibilidad de extensión hasta 26 semanas más si hay probabilidad de recuperación</li>
                  <li>🏗️ <strong>Accidente de trabajo:</strong> la incapacidad puede durar lo que sea necesario para la recuperación, según dictamen del IMSS</li>
                  <li>⚠️ <strong>Después de 52 semanas:</strong> si el IMSS determina que la recuperación es imposible, puede declarar invalidez permanente — en este caso la empresa puede dar por terminada la relación laboral, pero con indemnización</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <AdSense slot="SLOT_BLOG_INCAPACIDAD_2" format="rectangle" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Si te Despidieron Durante la Incapacidad: ¿Cuánto te Corresponde?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si la empresa te despide mientras estás de incapacidad (o poco después de terminarla, alegando que ya no te necesitan), el despido es injustificado y te corresponde:
            </p>
            <div className="space-y-3">
              {[
                { concepto: "Finiquito completo", formula: "Saldo de salario + vacaciones + prima vacacional + aguinaldo proporcional", color: "bg-blue-100 text-blue-800" },
                { concepto: "3 meses de salario", formula: "Artículo 50 LFT — parte de la indemnización constitucional", color: "bg-purple-100 text-purple-800" },
                { concepto: "20 días por año trabajado", formula: "Calculados sobre el salario diario integrado", color: "bg-green-100 text-green-800" },
                { concepto: "Prima de antigüedad", formula: "12 días de salario por año, con tope de 2× UMA", color: "bg-yellow-100 text-yellow-800" },
                { concepto: "Salarios caídos", formula: "Los salarios que dejaste de percibir durante el período de irregularidad, hasta que se resuelva el caso", color: "bg-red-100 text-red-800" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg p-3 border border-gray-200">
                  <span className={`font-bold text-sm px-3 py-1 rounded-full ${item.color} whitespace-nowrap flex-shrink-0`}>{item.concepto}</span>
                  <p className="text-gray-600 text-sm">{item.formula}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pasos a Seguir si te Despidieron Durante la Incapacidad</h2>
            <div className="space-y-3">
              {[
                { num: "1", titulo: "Conserva tu incapacidad original", desc: "El documento de incapacidad del IMSS es tu principal prueba. Guarda el original y saca copias." },
                { num: "2", titulo: "No firmes ningún papel sin leerlo", desc: "Si la empresa te llama a firmar mientras estás de incapacidad, tienes derecho a hacerlo acompañado de alguien de confianza o a pedir tiempo para revisarlo." },
                { num: "3", titulo: "Documenta todo por escrito", desc: "Si te notifican el despido verbalmente, pide confirmación por escrito. Si te mandan mensaje o correo, guárdalo." },
                { num: "4", titulo: "Acude a la CFCRL", desc: "Presenta tu caso en el Centro Federal de Conciliación y Registro Laboral. El proceso es gratuito. Si la empresa no tiene causa justificada, generalmente prefieren llegar a un acuerdo en conciliación." },
                { num: "5", titulo: "Consulta con un abogado laboralista", desc: "Para el caso de despido durante incapacidad, la asesoría especializada vale la pena. Muchos ofrecen primera consulta gratuita y trabajan a porcentaje del monto recuperado." },
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

          <AdSense slot="SLOT_BLOG_INCAPACIDAD_3" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                {
                  q: "¿Pueden liquidarme aunque no me hayan despedido — simplemente ya no me dan trabajo?",
                  a: "Sí. Si al terminar tu incapacidad la empresa no te da trabajo, te niega acceso o simplemente no responde, eso es un despido tácito o encubierto. Tienes los mismos derechos que con un despido injustificado."
                },
                {
                  q: "La empresa dice que la incapacidad fue 'falsa' y por eso me despidió. ¿Pueden hacer eso?",
                  a: "La empresa puede impugnar una incapacidad ante el IMSS si tiene pruebas concretas de fraude. Pero si la incapacidad fue expedida correctamente por un médico del IMSS, es difícil que prospere esa argumentación. No pueden simplemente decidir que es falsa por su cuenta."
                },
                {
                  q: "¿Qué pasa si estoy de incapacidad y decido renunciar?",
                  a: "Puedes renunciar en cualquier momento, incluso estando de incapacidad. En ese caso recibes el finiquito estándar (sin indemnización por despido injustificado) más cualquier subsidio de incapacidad pendiente que el IMSS te deba."
                },
                {
                  q: "¿El subsidio del IMSS se cuenta como parte del finiquito?",
                  a: "No. El subsidio de incapacidad lo paga el IMSS directamente y es independiente del finiquito que debe pagar la empresa. Son dos pagos distintos de dos entidades distintas."
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
            <h2 className="text-2xl font-bold text-white mb-3">Calcula lo que te deben antes de negociar</h2>
            <p className="text-blue-100 mb-6">
              Conoce el monto exacto de tu finiquito e indemnización para llegar preparado a cualquier acuerdo.
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
