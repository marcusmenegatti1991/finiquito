/**
 * Artículo: Qué hacer con tu finiquito - 5 decisiones inteligentes
 * Slug: /blog/que-hacer-con-tu-finiquito
 */

import { useSEO } from "@/hooks/useSEO";
import AdSense from "@/components/AdSense";

export default function QueHacerConTuFiniquito() {
  useSEO({
    title: "Qué Hacer con tu Finiquito: 5 Decisiones Inteligentes (2026)",
    description:
      "Recibiste tu finiquito y no sabes qué hacer con ese dinero. Aquí te explicamos las 5 mejores decisiones financieras para proteger y hacer crecer tu finiquito en México.",
    canonical: "/blog/que-hacer-con-tu-finiquito",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            💡 Finanzas Personales
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Qué Hacer con tu Finiquito: 5 Decisiones Inteligentes
          </h1>
          <p className="text-xl text-blue-100">
            Recibiste ese dinero — ahora viene la parte más importante: no desperdiciarlo.
          </p>
          <div className="flex items-center gap-4 mt-6 text-blue-200 text-sm">
            <span>⏱️ 8 min de lectura</span>
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

        {/* Intro */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Acabas de recibir tu finiquito. Es dinero que te ganaste con semanas, meses o años de trabajo.
          La pregunta que la mayoría se hace (y que pocas veces responde bien) es: <strong>¿qué hago con este dinero?</strong>
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Errores comunes: gastarlo en una semana en "gastos que se fueron acumulando", dejarlo en la cuenta
          bancaria donde genera cero intereses, o prestárselo a alguien. En esta guía te mostramos las
          5 decisiones más inteligentes que puedes tomar.
        </p>

        {/* Decisión 1 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            1. Crea un Fondo de Emergencia Antes de Todo
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Antes de invertir o gastar un solo peso, separa entre 3 y 6 meses de tus gastos fijos en una
            cuenta de ahorro de alto rendimiento. Esto es lo primero, sin excepción.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si buscas empleo y tardes 2 meses en encontrarlo, ese fondo es lo que te permite negociar
            mejor (no acepar el primer trabajo que aparezca por desesperación).
          </p>

          {/* CTA Afiliado: Cuenta de Ahorro */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🏦</span>
              <div>
                <h3 className="font-bold text-blue-900 text-lg mb-2">
                  ¿Dónde guardar tu fondo de emergencia?
                </h3>
                <p className="text-blue-800 text-sm mb-4">
                  Lo ideal es una cuenta que genere intereses, sin comisiones y con liquidez inmediata.
                  Estas son las mejores opciones en México en 2026:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">NU</span>
                    <div>
                      <a
                        href="https://nu.com.mx/referidos/"
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="font-semibold text-purple-700 hover:underline"
                      >
                        {/* AFILIADO: Reemplaza con tu link de referido Nu */}
                        Nu — Cuenta con rendimiento diario sin comisiones →
                      </a>
                      <p className="text-xs text-gray-600">Tasa competitiva, sin monto mínimo, dinero disponible al instante</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">MP</span>
                    <div>
                      <a
                        href="https://www.mercadopago.com.mx/"
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="font-semibold text-yellow-700 hover:underline"
                      >
                        {/* AFILIADO: Reemplaza con tu link de afiliado Mercado Pago */}
                        Mercado Pago — Cuenta Mercado Fondo →
                      </a>
                      <p className="text-xs text-gray-600">Rendimiento diario, retiro inmediato, integrado con Mercado Libre</p>
                    </div>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 italic">
                  * Los enlaces de arriba son de afiliado. Si abres una cuenta, podemos recibir una comisión sin costo para ti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Decisión 2 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            2. Paga Deudas con Intereses Altos
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si tienes deudas en tarjetas de crédito con tasas del 40-60% anual, pagar esas deudas
            es la mejor "inversión" que puedes hacer. No hay rendimiento en la bolsa que supere el ahorro
            de intereses de una tarjeta con tasa alta.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Prioriza primero las deudas con mayor tasa de interés. Si tienes múltiples deudas, lista cada una
            con su tasa y saldo, y liquida primero la más cara.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <p className="text-amber-800 text-sm">
              <strong>💡 Consejo:</strong> Si tienes deudas en tarjetas, considera una tarjeta de consolidación
              con tasa más baja para pagar las deudas caras y seguir pagando la nueva a menor costo.
            </p>
          </div>
        </section>

        {/* AdSense Mid */}
        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_MID" format="rectangle" />
        </div>

        {/* Decisión 3 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            3. Invierte una Parte para que Crezca
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Después de asegurar tu fondo de emergencia y pagar deudas, el siguiente paso es hacer que
            tu dinero trabaje para ti. No tienes que ser experto en bolsa.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Opciones accesibles para principiantes: Cetesdirecto (inversión en deuda gubernamental desde
            $100 pesos), GBM+ (fondos de inversión desde $1 peso), o fondos indexados de bajo costo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lee nuestro artículo completo sobre{" "}
            <a href="/blog/donde-invertir-tu-finiquito" className="text-blue-600 hover:underline font-semibold">
              cómo invertir tu finiquito →
            </a>
          </p>
        </section>

        {/* Decisión 4 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            4. Invierte en Tu Empleabilidad
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uno de los mejores usos del dinero de tu finiquito es actualizar tus habilidades para
            conseguir un empleo mejor pagado que el anterior. Un curso de 2-3 meses puede traducirse
            en un salario 20-40% mayor.
          </p>

          {/* CTA Afiliado: Cursos */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🎓</span>
              <div>
                <h3 className="font-bold text-green-900 text-lg mb-2">
                  Plataformas de aprendizaje recomendadas
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">PLATZI</span>
                    <div>
                      <a
                        href="https://platzi.com/"
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="font-semibold text-green-700 hover:underline"
                      >
                        {/* AFILIADO: Reemplaza con tu link de afiliado Platzi */}
                        Platzi — Tecnología, negocios y diseño en español →
                      </a>
                      <p className="text-xs text-gray-600">Suscripción mensual, cientos de cursos, certificados reconocidos</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">CO</span>
                    <div>
                      <a
                        href="https://www.coursera.org/"
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="font-semibold text-blue-700 hover:underline"
                      >
                        {/* AFILIADO: Reemplaza con tu link de afiliado Coursera */}
                        Coursera — Cursos de universidades top del mundo →
                      </a>
                      <p className="text-xs text-gray-600">Certificados de Google, Meta, IBM y universidades internacionales</p>
                    </div>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 italic">
                  * Los enlaces de arriba son de afiliado. Si te inscribes, podemos recibir una comisión sin costo para ti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Decisión 5 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            5. Ten una Tarjeta de Crédito de Respaldo (Sin Anualidad)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tener una tarjeta de crédito activa —aunque no la uses— te ayuda a mantener historial
            crediticio durante el período sin empleo. Busca tarjetas sin anualidad y sin ingresos
            comprobables para personas en transición laboral.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lee nuestra guía sobre{" "}
            <a href="/blog/mejores-tarjetas-sin-empleo" className="text-blue-600 hover:underline font-semibold">
              mejores tarjetas de crédito si te quedaste sin empleo →
            </a>
          </p>
        </section>

        {/* Resumen */}
        <div className="bg-gray-50 rounded-xl p-8 my-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Resumen: Plan de Acción</h2>
          <ol className="space-y-3">
            {[
              "Crea tu fondo de emergencia (3-6 meses de gastos fijos) en una cuenta con rendimiento",
              "Paga deudas de alto interés (tarjetas con tasa mayor al 30%)",
              "Invierte una parte para que crezca (CETES, GBM+, fondos indexados)",
              "Usa una parte para mejorar tus habilidades y conseguir mejor trabajo",
              "Mantén una tarjeta de crédito activa sin anualidad para tu historial crediticio",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-blue-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-gray-700">{item}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* AdSense Bottom */}
        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_BOT" format="horizontal" />
        </div>

        {/* CTA calculadora */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-white mb-3">
            ¿Todavía no sabes cuánto te corresponde?
          </h2>
          <p className="text-blue-100 mb-6">
            Usa nuestra calculadora gratuita para calcular tu finiquito al instante.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg"
          >
            Calcular mi Finiquito →
          </a>
        </div>
      </article>
    </div>
  );
}
