import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";

const articulos = [
  {
    slug: "/blog/como-calcular-finiquito",
    emoji: "📊",
    categoria: "Guía Completa",
    titulo: "Cómo Calcular tu Finiquito Paso a Paso en México 2026",
    descripcion:
      "Fórmulas exactas para calcular aguinaldo proporcional, vacaciones, prima vacacional y saldo de salario según la LFT vigente. Con ejemplos prácticos.",
    tiempo: "8 min",
    color: "border-l-blue-500",
  },
  {
    slug: "/blog/finiquito-vs-liquidacion",
    emoji: "⚖️",
    categoria: "Conceptos Clave",
    titulo: "Diferencia entre Finiquito y Liquidación en México 2026",
    descripcion:
      "¿Te despidieron o renunciaste? La diferencia puede ser de cientos de miles de pesos. Aprende cuándo te corresponde cada uno y qué incluye.",
    tiempo: "6 min",
    color: "border-l-purple-500",
  },
  {
    slug: "/blog/vacaciones-dignas-reforma-2023",
    emoji: "🏖️",
    categoria: "Reforma Laboral",
    titulo: "Vacaciones Dignas 2023: Qué Cambió en la Ley Federal del Trabajo",
    descripcion:
      "La reforma que duplicó los días de vacaciones en México. Descubre cuántos días te corresponden según tu antigüedad y cómo impacta en tu finiquito.",
    tiempo: "7 min",
    color: "border-l-green-500",
  },
  {
    slug: "/blog/prima-de-antiguedad",
    emoji: "🏅",
    categoria: "Prestaciones Laborales",
    titulo: "Prima de Antigüedad en México 2026: Cuándo te Corresponde y Cómo Calcularla",
    descripcion:
      "Todo sobre la prima de antigüedad: cuándo aplica, el tope de 2×UMA, cuándo se paga al renunciar o al ser despedido, y su tratamiento fiscal.",
    tiempo: "6 min",
    color: "border-l-yellow-500",
  },
  {
    slug: "/blog/cuanto-corresponde-si-renuncio",
    emoji: "💼",
    categoria: "Guía Práctica",
    titulo: "¿Cuánto me Corresponde si Renuncio? Guía por Años de Servicio 2026",
    descripcion:
      "Ejemplos reales de finiquito por renuncia con 1, 3, 5 y 10 años de servicio. Descubre cuánto puedes esperar recibir y cómo cobrar correctamente.",
    tiempo: "7 min",
    color: "border-l-orange-500",
  },
  {
    slug: "/blog/aguinaldo-proporcional-finiquito",
    emoji: "🎁",
    categoria: "Prestaciones Laborales",
    titulo: "Aguinaldo Proporcional 2026: Cómo Calcularlo en tu Finiquito",
    descripcion:
      "El error más común en el cálculo del aguinaldo proporcional y cómo evitarlo. Fórmula correcta, ejemplos por mes de salida y preguntas frecuentes.",
    tiempo: "6 min",
    color: "border-l-red-500",
  },
  {
    slug: "/blog/que-hacer-con-tu-finiquito",
    emoji: "💡",
    categoria: "Finanzas Personales",
    titulo: "Qué Hacer con tu Finiquito: 5 Decisiones Inteligentes (2026)",
    descripcion:
      "Recibiste ese dinero — el plan paso a paso para no desperdiciarlo. Fondo de emergencia, pago de deudas, inversión, capacitación y más.",
    tiempo: "8 min",
    color: "border-l-blue-600",
  },
  {
    slug: "/blog/donde-invertir-tu-finiquito",
    emoji: "📈",
    categoria: "Inversiones",
    titulo: "Dónde Invertir tu Finiquito para que No Pierda Valor (2026)",
    descripcion:
      "CETES, Nu, GBM+ y fondos indexados. Comparativa completa de opciones de inversión para distintos plazos, montos y perfiles de riesgo.",
    tiempo: "9 min",
    color: "border-l-green-600",
  },
  {
    slug: "/blog/mejores-tarjetas-sin-empleo",
    emoji: "💳",
    categoria: "Tarjetas de Crédito",
    titulo: "Mejores Tarjetas de Crédito sin Comprobante de Ingresos México 2026",
    descripcion:
      "Nu, Stori y Klar: las tarjetas que no piden trabajo formal. Mantén tu historial crediticio activo mientras buscas empleo.",
    tiempo: "7 min",
    color: "border-l-slate-600",
  },
  {
    slug: "/blog/cuanto-tiempo-para-pagar-finiquito",
    emoji: "⏰",
    categoria: "Derechos Laborales",
    titulo: "¿Cuánto Tiempo Tiene la Empresa para Pagar el Finiquito en México 2026?",
    descripcion:
      "La ley mexicana establece plazos claros para el pago del finiquito. Conoce tus derechos, qué pasa si la empresa no paga a tiempo y cómo reclamar ante la CFCRL.",
    tiempo: "7 min",
    color: "border-l-cyan-500",
  },
  {
    slug: "/blog/finiquito-con-embarazo",
    emoji: "🤱",
    categoria: "Derechos Laborales",
    titulo: "Finiquito con Embarazo: Qué te Corresponde y Cómo Proteger tus Derechos en México 2026",
    descripcion:
      "¿Estás embarazada y terminaste tu relación laboral? Conoce tus derechos especiales, el subsidio del IMSS y cómo calcular correctamente tu finiquito.",
    tiempo: "8 min",
    color: "border-l-pink-500",
  },
  {
    slug: "/blog/como-impugnar-finiquito-incorrecto",
    emoji: "🔍",
    categoria: "Derechos Laborales",
    titulo: "Cómo Impugnar un Finiquito Incorrecto en México 2026",
    descripcion:
      "¿Tu finiquito tiene errores o te pagaron menos? Aprende a identificar los errores más comunes, negociar, acudir a la CFCRL y demandar si es necesario.",
    tiempo: "8 min",
    color: "border-l-indigo-500",
  },
  {
    slug: "/blog/carta-de-renuncia-mexico",
    emoji: "📝",
    categoria: "Guía Práctica",
    titulo: "Carta de Renuncia en México 2026: Cómo Redactarla Correctamente",
    descripcion:
      "Modelo de carta de renuncia conforme a la LFT. Qué debe incluir, cuántos días de aviso dar, si es obligatoria y cómo proteger tu finiquito al renunciar.",
    tiempo: "6 min",
    color: "border-l-teal-500",
  },
  {
    slug: "/blog/finiquito-y-seguro-social-imss",
    emoji: "🏥",
    categoria: "Seguridad Social",
    titulo: "Finiquito y Seguro Social IMSS: Qué Pasa con tu Seguridad Social al Dejar el Trabajo 2026",
    descripcion:
      "Cuánto dura tu IMSS, qué pasa con tu AFORE y tu crédito INFONAVIT al cobrar el finiquito. Guía completa para proteger tus derechos de seguridad social.",
    tiempo: "7 min",
    color: "border-l-emerald-500",
  },
  {
    slug: "/blog/despido-durante-incapacidad",
    emoji: "🏥",
    categoria: "Derechos Laborales",
    titulo: "¿Me Pueden Despedir Estando de Incapacidad? Derechos del Trabajador en México 2026",
    descripcion:
      "La ley protege al trabajador durante una incapacidad por enfermedad o accidente. Conoce si pueden despedirte, cuánto te corresponde y cómo defenderte.",
    tiempo: "8 min",
    color: "border-l-rose-500",
  },
  {
    slug: "/blog/acta-administrativa-finiquito",
    emoji: "📋",
    categoria: "Derechos Laborales",
    titulo: "Acta Administrativa: Qué Es y Cómo Afecta tu Finiquito en México 2026",
    descripcion:
      "¿Te levantaron un acta administrativa? Aprende cuándo es válida, cuándo no, cómo responder correctamente y si realmente afecta el monto de tu finiquito.",
    tiempo: "7 min",
    color: "border-l-amber-500",
  },
];

export default function Blog() {
  useSEO({
    title: "Blog — Guías sobre Finiquito y Derechos Laborales en México",
    description:
      "Artículos y guías sobre cómo calcular finiquito, diferencia entre finiquito y liquidación, vacaciones dignas y derechos laborales en México 2026.",
    canonical: "/blog",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-blue-50">
            Guías y artículos sobre finiquito, liquidación y derechos laborales en México
          </p>
        </div>
      </section>

      {/* Artículos */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {articulos.map((art, i) => (
              <a key={i} href={art.slug} className="block group">
                <Card className={`border-l-4 ${art.color} hover:shadow-lg transition-shadow cursor-pointer`}>
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl flex-shrink-0">{art.emoji}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-semibold text-primary bg-blue-50 px-2 py-1 rounded">
                            {art.categoria}
                          </span>
                          <span className="text-xs text-gray-400">⏱️ {art.tiempo} de lectura</span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                          {art.titulo}
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">{art.descripcion}</p>
                        <p className="text-primary text-sm font-semibold mt-3 group-hover:underline">
                          Leer artículo →
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* CTA calculadora */}
          <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">¿Listo para calcular tu finiquito?</h2>
            <p className="text-blue-100 mb-6">
              Usa nuestra calculadora gratuita, rápida y 100% conforme a la Ley Federal del Trabajo
            </p>
            <a
              href="/"
              className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg"
            >
              Ir a la Calculadora →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
