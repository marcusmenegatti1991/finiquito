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
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            📈 Inversiones
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dónde Invertir tu Finiquito para que No Pierda Valor
          </h1>
          <p className="text-xl text-green-100">
            La inflación en México puede comerse tu finiquito si lo dejas en el banco. Aquí te explicamos las mejores opciones.
          </p>
          <div className="flex items-center gap-4 mt-6 text-green-200 text-sm">
            <span>⏱️ 9 min de lectura</span>
            <span>•</span>
            <span>Actualizado junio 2026</span>
          </div>
        </div>
      </section>

      {/* AdSense Banner Top */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <AdSense slot="SLOT_ARTICULO_TOP" format="horizontal" />
      </div>

      {/* Contenido */}
      <article className="max-w-4xl mx-auto px-4 py-12">

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          La inflación en México ha rondado el 4-5% anual. Si guardas tu finiquito en una cuenta bancaria
          tradicional con rendimiento del 0.5-1%, estás perdiendo poder adquisitivo cada día.
          La buena noticia es que existen opciones accesibles para cualquier monto.
        </p>

        {/* Opción 1: CETES */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            1. CETES Directos — La Opción Más Segura
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Los CETES (Certificados de la Tesorería) son instrumentos de deuda del gobierno mexicano.
            Son prácticamente sin riesgo porque los respalda el gobierno federal. En 2026 ofrecen tasas
            competitivas en plazos de 28, 91, 182 y 364 días.
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
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Cómo empezar:</strong> Entra a{" "}
            <a href="https://www.cetesdirecto.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              cetesdirecto.com
            </a>{" "}
            (plataforma oficial del gobierno). Puedes invertir desde $100 pesos con tu CURP, RFC y cuenta bancaria.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <p className="text-green-800 text-sm">
              <strong>✅ Ideal si:</strong> Quieres seguridad total, no toleras el riesgo, o planeas usar
              ese dinero en 1-12 meses.
            </p>
          </div>
        </section>

        {/* Opción 2: Nu / GBM */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            2. Cuentas con Rendimiento Diario — Nu y Similares
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si quieres rendimiento similar a CETES pero con liquidez diaria (sin esperar que venza un plazo),
            las cuentas de ahorro con rendimiento diario son una excelente opción.
          </p>

          {/* CTA Afiliado */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💜</span>
              <div>
                <h3 className="font-bold text-purple-900 text-lg mb-2">
                  Opciones recomendadas en México
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://nu.com.mx/referidos/"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="font-semibold text-purple-700 hover:underline text-lg"
                    >
                      {/* AFILIADO: Reemplaza con tu link de referido Nu */}
                      🟣 Nu — Cuenta con rendimiento diario →
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Tasa anual competitiva, sin comisiones, retiro inmediato, 100% digital.
                      Sin monto mínimo para abrir la cuenta.
                    </p>
                  </li>
                  <li>
                    <a
                      href="https://gbm.com/plus/"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="font-semibold text-blue-700 hover:underline text-lg"
                    >
                      {/* AFILIADO: Reemplaza con tu link de afiliado GBM+ */}
                      📊 GBM+ — Inversión automática en CETES desde $1 →
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Invierte automáticamente en CETES e instrumentos de deuda. Acceso desde $1 peso.
                      Interfaz amigable para principiantes.
                    </p>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 italic">
                  * Los enlaces de arriba son de afiliado. Si abres una cuenta, podemos recibir una comisión sin costo para ti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AdSense Mid */}
        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_MID" format="rectangle" />
        </div>

        {/* Opción 3: Fondos Indexados */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            3. Fondos Indexados — Para el Largo Plazo
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si no necesitas el dinero en los próximos 3-5 años, los fondos indexados al S&P 500 o al
            mercado global han generado rendimientos promedio del 8-10% anual históricamente (en dólares).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Advertencia:</strong> Los fondos indexados implican riesgo de mercado. El valor puede
            bajar en el corto plazo. Son ideales para dinero que no necesitas en los próximos años.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <p className="text-amber-800 text-sm">
              <strong>⚠️ No inviertas en fondos indexados</strong> si necesitas el dinero en menos de 3 años.
              Para ese horizonte, CETES o cuentas de rendimiento diario son mejores opciones.
            </p>
          </div>
        </section>

        {/* Opción 4: Aprende */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            4. Invierte en Ti Mismo — El Mayor Rendimiento
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si un curso de $5,000 pesos te permite conseguir un trabajo con $3,000 pesos más de salario
            mensual, eso es un retorno del 720% en el primer año. Ninguna inversión financiera se acerca
            a eso.
          </p>

          {/* CTA Afiliado: Cursos */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎓</span>
              <div>
                <h3 className="font-bold text-green-900 text-lg mb-2">
                  Plataformas para mejorar tus habilidades
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://platzi.com/"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="font-semibold text-green-700 hover:underline"
                    >
                      {/* AFILIADO: Reemplaza con tu link de afiliado Platzi */}
                      Platzi — Cursos de tecnología, negocios y diseño en español →
                    </a>
                    <p className="text-xs text-gray-600">Desde $299/mes, cientos de cursos, comunidad activa</p>
                  </li>
                  <li>
                    <a
                      href="https://www.coursera.org/"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="font-semibold text-blue-700 hover:underline"
                    >
                      {/* AFILIADO: Reemplaza con tu link de afiliado Coursera */}
                      Coursera — Certificados de Google, Meta, IBM →
                    </a>
                    <p className="text-xs text-gray-600">Cursos de universidades internacionales, certificados reconocidos por empresas</p>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 italic">
                  * Los enlaces de arriba son de afiliado. Si te inscribes, podemos recibir una comisión sin costo para ti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabla comparativa */}
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
                  ["CETES Directos", "Muy bajo", "28-364 días", "Seguridad total, 1-12 meses"],
                  ["Nu / GBM+", "Muy bajo", "Diaria", "Fondo de emergencia con rendimiento"],
                  ["Fondos indexados", "Medio-alto", "Días hábiles", "Largo plazo +3 años"],
                  ["Cursos / Habilidades", "Bajo", "N/A", "Aumentar salario futuro"],
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

        {/* AdSense Bottom */}
        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_BOT" format="horizontal" />
        </div>

        {/* CTA calculadora */}
        <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-white mb-3">
            ¿Todavía no calculaste tu finiquito?
          </h2>
          <p className="text-green-100 mb-6">
            Primero calcula cuánto recibirás, luego decide cómo invertirlo.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-green-50 transition text-lg"
          >
            Calcular mi Finiquito →
          </a>
        </div>
      </article>
    </div>
  );
}
