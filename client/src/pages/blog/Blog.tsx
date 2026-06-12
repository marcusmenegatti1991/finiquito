import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
