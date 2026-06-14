/**
 * Artículo: Finiquito con Embarazo — Qué dice la ley
 * Slug: /blog/finiquito-con-embarazo
 */

import { useSEO } from "@/hooks/useSEO";
import AdSense from "@/components/AdSense";

export default function FiniquitoConEmbarazo() {
  useSEO({
    title: "Finiquito con Embarazo: Qué Dice la Ley en México 2026",
    description:
      "¿Te despidieron estando embarazada? La LFT te protege con derechos especiales. Conoce qué incluye tu finiquito, la indemnización adicional y cómo reclamar.",
    canonical: "/blog/finiquito-con-embarazo",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-pink-700 to-rose-600 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            🤱 Derechos de la Mujer Trabajadora
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Finiquito con Embarazo: Qué Dice la Ley en México
          </h1>
          <p className="text-xl text-pink-100">
            Despedir a una trabajadora embarazada es ilegal en México. Si pasó, tienes derechos adicionales importantes.
          </p>
          <div className="flex items-center gap-4 mt-6 text-pink-200 text-sm">
            <span>⏱️ 7 min de lectura</span>
            <span>•</span>
            <span>Actualizado junio 2026</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-4">
        <AdSense slot="SLOT_ARTICULO_TOP" format="horizontal" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">

        <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-pink-900 text-xl mb-2">⚖️ Lo más importante primero</h2>
          <p className="text-pink-800 leading-relaxed">
            El artículo 170 de la Ley Federal del Trabajo establece que las trabajadoras embarazadas
            gozan de protección especial. Despedirlas por motivo de embarazo es considerado un acto
            discriminatorio y la empresa puede ser sancionada. Además de tu finiquito normal, puedes
            tener derecho a una indemnización adicional.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Qué Incluye el Finiquito si Estás Embarazada?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tu finiquito base es el mismo que cualquier trabajadora: días trabajados pendientes,
            aguinaldo proporcional, vacaciones proporcionales y prima vacacional. Sin embargo, si
            el despido fue por causa de embarazo, se agregan derechos adicionales:
          </p>
          <div className="space-y-4">
            {[
              {
                titulo: "Finiquito base",
                items: ["Salarios pendientes", "Aguinaldo proporcional", "Vacaciones proporcionales", "Prima vacacional"],
                color: "bg-blue-50 border-blue-200",
                icon: "💼"
              },
              {
                titulo: "Si el despido fue por embarazo (despido injustificado)",
                items: [
                  "3 meses de salario de indemnización constitucional",
                  "20 días de salario por año de servicio",
                  "Prima de antigüedad (12 días por año)",
                  "Salarios caídos desde el despido hasta la resolución del juicio"
                ],
                color: "bg-pink-50 border-pink-200",
                icon: "⚖️"
              },
              {
                titulo: "Prestaciones de maternidad del IMSS",
                items: [
                  "Subsidio por maternidad: 100% del salario por 84 días (42 antes y 42 después del parto)",
                  "Debes reclamar esto directamente ante el IMSS, no ante la empresa",
                  "Aplica si cotizaste al menos 30 semanas en los últimos 12 meses"
                ],
                color: "bg-green-50 border-green-200",
                icon: "🏥"
              }
            ].map((section, i) => (
              <div key={i} className={`border rounded-xl p-6 ${section.color}`}>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{section.icon} {section.titulo}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_MID" format="rectangle" />
        </div>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Cómo Demostrar que el Despido fue por Embarazo?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La LFT establece que cuando una trabajadora embarazada es despedida, se presume que fue
            por causa de embarazo salvo que la empresa demuestre lo contrario. Esto es una ventaja
            legal importante: la carga de la prueba está del lado del empleador.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg">
            <p className="text-amber-900 text-sm font-bold mb-2">Documentos que te ayudan a tu caso:</p>
            <ul className="space-y-1 text-sm text-amber-800">
              <li>• Constancia médica del embarazo con fecha anterior al despido</li>
              <li>• Comunicación escrita del despido (correo, carta, mensaje)</li>
              <li>• Testimonio de compañeros de trabajo</li>
              <li>• Registro de que la empresa conocía el embarazo</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Qué Hacer si te Despidieron Embarazada?
          </h2>
          <div className="space-y-4">
            {[
              { num: "1", titulo: "No firmes nada de inmediato", desc: "Pide tiempo para revisar el finiquito. Tienes derecho a consultar con un abogado antes de firmar." },
              { num: "2", titulo: "Guarda toda la documentación", desc: "Correos, mensajes, constancias médicas, recibos de nómina. Todo puede servir como prueba." },
              { num: "3", titulo: "Ve al CFCRL (Conciliación Laboral)", desc: "Antes de un juicio, es obligatorio el proceso de conciliación. Es gratuito y puede resolverse en 45 días." },
              { num: "4", titulo: "Reclama tu subsidio de maternidad al IMSS", desc: "Aunque ya no trabajes en la empresa, si cotizaste suficientes semanas, tienes derecho al subsidio de maternidad." },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                <span className="bg-pink-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.titulo}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "¿Puedo renunciar estando embarazada y cobrar finiquito?",
                a: "Sí. Si renuncias voluntariamente, tienes derecho a tu finiquito normal (días pendientes, aguinaldo, vacaciones y prima vacacional). No tienes derecho a la indemnización de 3 meses porque es una renuncia voluntaria."
              },
              {
                q: "¿Qué pasa con mi seguro médico del IMSS cuando me dan de baja?",
                a: "Tienes un período de conservación de derechos de 8 semanas después de la baja. Si el parto ocurre dentro de ese período, el IMSS cubre el servicio médico. Después de esas 8 semanas, puedes continuar como beneficiaria si tienes familiar que te incluya."
              },
              {
                q: "¿Puedo reclamar aunque yo haya renunciado presionada por la empresa?",
                a: "Sí. Si la empresa te presionó para renunciar por tu embarazo (constructive dismissal), esto se considera un despido encubierto. Puedes reclamarlo ante el CFCRL con evidencia de la presión ejercida."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">❓ {faq.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_BOT" format="horizontal" />
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-white mb-3">Calcula tu finiquito ahora</h2>
          <p className="text-pink-100 mb-6">
            Conoce exactamente cuánto te corresponde según tu tiempo de servicio y salario.
          </p>
          <a href="/" className="inline-block bg-white text-pink-700 font-bold py-3 px-8 rounded-lg hover:bg-pink-50 transition text-lg">
            Calcular mi Finiquito →
          </a>
        </div>
      </article>
    </div>
  );
}
