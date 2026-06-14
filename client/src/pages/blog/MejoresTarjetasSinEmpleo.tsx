/**
 * Artículo: Mejores tarjetas de crédito si te quedaste sin empleo
 * Slug: /blog/mejores-tarjetas-sin-empleo
 */

import { useSEO } from "@/hooks/useSEO";
import AdSense from "@/components/AdSense";

export default function MejoresTarjetasSinEmpleo() {
  useSEO({
    title: "Mejores Tarjetas de Crédito sin Comprobante de Ingresos México 2026",
    description:
      "¿Te quedaste sin empleo? Estas tarjetas de crédito no requieren comprobante de ingresos. Mantén tu historial crediticio mientras buscas trabajo.",
    canonical: "/blog/mejores-tarjetas-sin-empleo",
  });

  const tarjetas = [
    {
      nombre: "Nu (Nubank)",
      emoji: "🟣",
      badge: "Sin anualidad",
      badgeColor: "bg-purple-600",
      desc: "La tarjeta digital más popular para personas sin historial o con historial limitado. Proceso 100% digital, aprobación rápida.",
      pros: ["Sin anualidad vitalicia", "Sin comisión por apertura", "Aplicación completamente digital", "Límite crece automáticamente"],
      contra: "Límite inicial puede ser bajo",
      href: "https://nu.com.mx",
      cta: "Ver Nu →",
    },
    {
      nombre: "Stori",
      emoji: "🔵",
      badge: "Fácil aprobación",
      badgeColor: "bg-blue-600",
      desc: "Diseñada para personas sin historial crediticio. No requiere comprobante de ingresos formal. Proceso en minutos.",
      pros: ["Sin comprobante de ingresos", "Sin historial requerido", "Aprobación en minutos", "Sin anualidad el primer año"],
      contra: "Tasa de interés alta si no pagas completo",
      href: "https://www.storicard.com",
      cta: "Ver Stori →",
    },
    {
      nombre: "Klar",
      emoji: "🟢",
      badge: "Sin buró",
      badgeColor: "bg-green-600",
      desc: "Tarjeta asegurada donde depositas un monto como garantía. Ideal para construir historial sin riesgo.",
      pros: ["No consulta buró", "Sin anualidad", "Construye historial desde cero", "Control total del gasto"],
      contra: "Requiere depósito de garantía",
      href: "https://www.klar.mx",
      cta: "Ver Klar →",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-slate-700 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            💳 Tarjetas de Crédito
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mejores Tarjetas de Crédito si Te Quedaste Sin Empleo
          </h1>
          <p className="text-xl text-blue-100">
            No dejes que tu historial crediticio sufra. Estas tarjetas no requieren comprobante de ingresos.
          </p>
          <div className="flex items-center gap-4 mt-6 text-blue-200 text-sm">
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
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-amber-900 text-lg mb-2">⚠️ ¿Por qué tener una tarjeta aunque no tengas empleo?</h2>
          <p className="text-amber-800 text-sm leading-relaxed">
            El historial crediticio tarda años en construirse. Tener una tarjeta sin anualidad —aunque
            solo la uses para una compra pequeña al mes y la pagues completa— mantiene tu historial
            activo y positivo mientras buscas trabajo.
          </p>
        </div>

        {tarjetas.map((t, i) => (
          <section key={i} className="mb-8">
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-50 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{t.emoji}</span>
                  <h2 className="text-2xl font-bold text-gray-900">{t.nombre}</h2>
                  <span className={`${t.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {t.badge}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{t.desc}</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3">✅ Ventajas</h3>
                    <ul className="space-y-2">
                      {t.pros.map((pro, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="text-green-500">✓</span>{pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3">⚠️ Considera</h3>
                    <p className="text-sm text-gray-600">{t.contra}</p>
                  </div>
                </div>
                <a href={t.href} target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
                  {t.cta}
                </a>
              </div>
            </div>
          </section>
        ))}

        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_MID" format="rectangle" />
        </div>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo Usar la Tarjeta de Forma Inteligente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "📊", titulo: "Usa máximo el 30% del límite", desc: "El score crediticio se afecta si usas más del 30% de tu límite disponible." },
              { icon: "✅", titulo: "Paga siempre el total", desc: "Pagar solo el mínimo genera intereses altísimos. Siempre paga el total del estado de cuenta." },
              { icon: "🔔", titulo: "Activa alertas de pago", desc: "Un pago atrasado puede dañar tu historial. Activa notificaciones con 5 días de anticipación." },
              { icon: "🛒", titulo: "Úsala para gastos fijos pequeños", desc: "Carga una suscripción pequeña y págala completa. Mantiene el historial activo sin deuda." },
            ].map((tip, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <div className="text-2xl mb-2">{tip.icon}</div>
                <h3 className="font-bold text-blue-900 mb-1">{tip.titulo}</h3>
                <p className="text-blue-700 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_BOT" format="horizontal" />
        </div>

        <div className="bg-gradient-to-r from-slate-700 to-blue-800 rounded-xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-white mb-3">¿Sabes cuánto te corresponde de finiquito?</h2>
          <p className="text-blue-100 mb-6">Calcula tu finiquito gratis y protege tus derechos laborales.</p>
          <a href="/" className="inline-block bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg">
            Calcular mi Finiquito →
          </a>
        </div>
      </article>
    </div>
  );
}
