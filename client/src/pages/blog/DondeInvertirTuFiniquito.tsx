/**
 * Artículo: Dónde invertir tu finiquito para que no pierda valor
 * Slug: /blog/donde-invertir-tu-finiquito
 */

import { useSEO } from "@/hooks/useSEO";
import AdSense from "@/components/AdSense";

export default function DondeInvertirTuFiniquito() {
  useSEO({
    title: "Dónde Invertir tu Finiquito para que No Pierda Valor (2026)",
    description:
      "Guía práctica para invertir tu finiquito en México en 2026. CETES, GBM+, Nu, fondos indexados y más opciones con rendimientos reales y sin riesgo exagerado.",
    canonical: "/blog/donde-invertir-tu-finiquito",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-700 to-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            📈 Inversiones
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dónde Invertir tu Finiquito para que No Pierda Valor
          </h1>
          <p className="text-xl text-green-100">
            La inflación puede comerse tu finiquito si lo dejas en el banco. Aquí te explicamos las mejores opciones.
          </p>
          <div className="flex items-center gap-4 mt-6 text-green-200 text-sm">
            <span>⏱️ 9 min de lectura</span>
            <span>•</span>
            <span>Actualizado junio 2026</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-4">
        <AdSense slot="SLOT_ARTICULO_TOP" format="horizontal" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          La inflación en México ha rondado el 4-5% anual. Si guardas tu finiquito en una cuenta
          bancaria tradicional con rendimiento del 0.5-1%, estás perdiendo poder adquisitivo cada día.
          La buena noticia es que existen opciones accesibles para cualquier monto.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">1. CETES Directos — La Opción Más Segura</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Los CETES son instrumentos de deuda del gobierno mexicano. Son prácticamente sin riesgo
            porque los respalda el gobierno federal. Ofrecen tasas competitivas en plazos de 28, 91,
            182 y 364 días.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            {[
              { plazo: "28 días", desc: "Liquidez mensual" },
              { plazo: "91 días", desc: "Plazo trimestral" },
              { plazo: "364 días", desc: "Mayor rendimiento" },
            ].map((item, i) => (
              <div key={i} className="bg-green-50 rounded-lg p-4 text-center border border-green-100">
                <p className="font-bold text-green-800 text-xl">{item.plazo}</p>
                <p className="text-green-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Puedes invertir desde $100 pesos en{" "}
            <a href="https://www.cetesdirecto.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
              cetesdirecto.com
            </a>{" "}
            — plataforma oficial del gobierno, con tu CURP, RFC y cuenta bancaria.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Cuentas con Rendimiento Diario</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si quieres rendimiento similar a CETES pero con liquidez diaria, las cuentas digitales
            son una excelente opción:
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-6">
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://nu.com.mx" target="_blank" rel="noopener noreferrer" className="font-bold text-purple-700 hover:underline text-base">
                  Nu — Cuenta con rendimiento diario →
                </a>
                <p className="text-gray-600 mt-1">Sin comisiones, retiro inmediato, 100% digital. Sin monto mínimo.</p>
              </li>
              <li>
                <a href="https://gbm.com/plus/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 hover:underline text-base">
                  GBM+ — Inversión automática en CETES desde $1 →
                </a>
                <p className="text-gray-600 mt-1">Interfaz amigable para principiantes, diversificación automática.</p>
              </li>
              <li>
                <a href="https://www.heybanco.com" target="_blank" rel="noopener noreferrer" className="font-bold text-green-700 hover:underline text-base">
                  Hey Banco — Cuenta digital con rendimiento →
                </a>
                <p className="text-gray-600 mt-1">Sin anualidad, rendimiento competitivo, app sencilla.</p>
              </li>
            </ul>
          </div>
        </section>

        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_MID" format="rectangle" />
        </div>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Fondos Indexados — Para el Largo Plazo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si no necesitas el dinero en los próximos 3-5 años, los fondos indexados al S&P 500 han
            generado rendimientos promedio del 8-10% anual históricamente. Implican riesgo de mercado,
            así que solo son ideales para dinero que no necesitas pronto.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <p className="text-amber-800 text-sm">
              <strong>⚠️ No inviertas en fondos indexados</strong> si necesitas el dinero en menos
              de 3 años. Para ese horizonte, CETES o cuentas de rendimiento diario son mejores.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Invierte en Ti Mismo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si un curso de $5,000 pesos te permite conseguir un trabajo con $3,000 pesos más de salario
            mensual, eso es un retorno del 720% en el primer año. Plataformas recomendadas:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 ml-4">
            <li>• <a href="https://platzi.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Platzi</a> — Tecnología, negocios y diseño en español</li>
            <li>• <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Coursera</a> — Certificados de Google, Meta, IBM</li>
            <li>• <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Udemy</a> — Miles de cursos con descuentos frecuentes</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comparativa Rápida</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left font-bold border border-gray-200">Opción</th>
                  <th className="p-3 text-left font-bold border border-gray-200">Riesgo</th>
                  <th className="p-3 text-left font-bold border border-gray-200">Liquidez</th>
                  <th className="p-3 text-left font-bold border border-gray-200">Ideal para</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["CETES Directos", "Muy bajo", "28-364 días", "Seguridad total"],
                  ["Nu / GBM+", "Muy bajo", "Diaria", "Fondo de emergencia"],
                  ["Fondos indexados", "Medio-alto", "Días hábiles", "Largo plazo +3 años"],
                  ["Cursos", "Muy bajo", "N/A", "Aumentar salario"],
                ].map(([opcion, riesgo, liquidez, ideal], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-semibold">{opcion}</td>
                    <td className="p-3 border border-gray-200">{riesgo}</td>
                    <td className="p-3 border border-gray-200">{liquidez}</td>
                    <td className="p-3 border border-gray-200">{ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_BOT" format="horizontal" />
        </div>

        <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-white mb-3">¿Todavía no calculaste tu finiquito?</h2>
          <p className="text-green-100 mb-6">Primero calcula cuánto recibirás, luego decide cómo invertirlo.</p>
          <a href="/" className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-green-50 transition text-lg">
            Calcular mi Finiquito →
          </a>
        </div>
      </article>
    </div>
  );
}
