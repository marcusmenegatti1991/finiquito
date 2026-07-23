/**
 * Artículo: Qué hacer con tu finiquito - 5 decisiones inteligentes
 * Slug: /blog/que-hacer-con-tu-finiquito
 */

import { useSEO } from "@/hooks/useSEO";
import AdSense from "@/components/AdSense";
import AfiliadoCard from "@/components/AfiliadoCard";

export default function QueHacerConTuFiniquito() {
  useSEO({
    title: "Qué Hacer con tu Finiquito: 5 Decisiones Inteligentes (2026)",
    description:
      "Recibiste tu finiquito y no sabes qué hacer con ese dinero. Aquí te explicamos las 5 mejores decisiones financieras para proteger y hacer crecer tu finiquito en México.",
    canonical: "/blog/que-hacer-con-tu-finiquito",
  });

  return (
    <div className="w-full min-h-screen bg-white">
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

      <div className="max-w-4xl mx-auto px-4 py-4">
        <AdSense slot="SLOT_ARTICULO_TOP" format="horizontal" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Acabas de recibir tu finiquito. Es dinero que te ganaste con semanas, meses o años de trabajo.
          La pregunta que la mayoría se hace es: <strong>¿qué hago con este dinero?</strong> Errores
          comunes: gastarlo en una semana, dejarlo en la cuenta bancaria donde genera cero intereses,
          o prestárselo a alguien. Aquí te mostramos las 5 decisiones más inteligentes.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            1. Crea un Fondo de Emergencia Antes de Todo
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Antes de invertir o gastar un solo peso, separa entre 3 y 6 meses de tus gastos fijos en
            una cuenta de ahorro de alto rendimiento. Si tardas 2 meses en encontrar trabajo, ese fondo
            es lo que te permite negociar mejor y no aceptar el primer empleo que aparezca por desesperación.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
            <h3 className="font-bold text-blue-900 text-lg mb-3">🏦 ¿Dónde guardar tu fondo de emergencia?</h3>
            <p className="text-blue-800 text-sm mb-4">
              Lo ideal es una cuenta que genere intereses, sin comisiones y con liquidez inmediata.
              Opciones en México:
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li><strong>Nu</strong> — Cuenta digital con rendimiento diario, sin comisiones. <a href="https://nu.com.mx" target="_blank" rel="noopener noreferrer" className="underline">nu.com.mx</a></li>
              <li><strong>Mercado Pago</strong> — Rendimiento diario integrado con Mercado Libre. <a href="https://www.mercadopago.com.mx" target="_blank" rel="noopener noreferrer" className="underline">mercadopago.com.mx</a></li>
              <li><strong>Hey Banco</strong> — Cuenta de ahorro digital sin comisiones. <a href="https://www.heybanco.com" target="_blank" rel="noopener noreferrer" className="underline">heybanco.com</a></li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            ¿Sientes que nunca te alcanza para ahorrar? Este curso te enseña a ordenar tus gastos y
            empezar a ahorrar aunque el presupuesto esté apretado — justo cuando más lo necesitas:
          </p>
          <AfiliadoCard id="hotmart-ahorrar" />
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            2. Paga Deudas con Intereses Altos
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si tienes deudas en tarjetas de crédito con tasas del 40-60% anual, pagar esas deudas es
            la mejor inversión que puedes hacer. No hay rendimiento en la bolsa que supere el ahorro
            de intereses de una tarjeta con tasa alta. Prioriza siempre la deuda más cara primero.
          </p>
        </section>

        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_MID" format="rectangle" />
        </div>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            3. Invierte una Parte para que Crezca
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Después de asegurar tu fondo de emergencia y pagar deudas, haz que tu dinero trabaje para
            ti. No tienes que ser experto en bolsa. Opciones accesibles: Cetesdirecto (desde $100
            pesos, respaldado por el gobierno), GBM+ (fondos de inversión desde $1 peso), o fondos
            indexados de bajo costo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lee nuestra guía completa sobre{" "}
            <a href="/blog/donde-invertir-tu-finiquito" className="text-blue-600 hover:underline font-semibold">
              cómo invertir tu finiquito →
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            4. Invierte en Tu Empleabilidad
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uno de los mejores usos del finiquito es actualizar tus habilidades para conseguir un empleo
            mejor pagado. Un curso de 2-3 meses puede traducirse en un salario 20-40% mayor. Plataformas
            como Platzi, Coursera o Udemy ofrecen cursos desde unos cientos de pesos que pueden cambiar
            tu trayectoria profesional.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            5. Ten una Tarjeta de Crédito de Respaldo Sin Anualidad
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mantener una tarjeta de crédito activa —aunque no la uses— ayuda a conservar tu historial
            crediticio durante el período sin empleo. Busca tarjetas sin anualidad. Lee nuestra guía
            sobre{" "}
            <a href="/blog/mejores-tarjetas-sin-empleo" className="text-blue-600 hover:underline font-semibold">
              mejores tarjetas sin empleo →
            </a>
          </p>
        </section>

        <div className="bg-gray-50 rounded-xl p-8 my-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Plan de Acción</h2>
          <ol className="space-y-3">
            {[
              "Crea tu fondo de emergencia (3-6 meses de gastos) en cuenta con rendimiento",
              "Paga deudas de alto interés primero",
              "Invierte una parte (CETES, GBM+, fondos indexados)",
              "Toma un curso para conseguir mejor trabajo",
              "Mantén una tarjeta sin anualidad activa para tu historial",
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

        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_BOT" format="horizontal" />
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-white mb-3">
            ¿Todavía no sabes cuánto te corresponde?
          </h2>
          <p className="text-blue-100 mb-6">
            Usa nuestra calculadora gratuita para calcular tu finiquito al instante.
          </p>
          <a href="/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg">
            Calcular mi Finiquito →
          </a>
        </div>
      </article>
    </div>
  );
}
