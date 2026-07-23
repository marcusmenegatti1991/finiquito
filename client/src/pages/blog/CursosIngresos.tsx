/**
 * Artículo: Cómo generar ingresos por tu cuenta tras un despido (oficios y cursos)
 * Slug: /blog/cursos-para-generar-ingresos
 * Hogar de los afiliados de categoría "ingresos" (cursos de oficio/negocio).
 */

import { useSEO } from "@/hooks/useSEO";
import AfiliadoCard from "@/components/AfiliadoCard";
import { afiliadosDe } from "@/config/afiliados";

export default function CursosIngresos() {
  useSEO({
    title: "Cómo Generar Ingresos por tu Cuenta tras un Despido: Oficios y Cursos 2026",
    description:
      "Perdiste tu empleo y quieres generar ingresos sin depender de otro trabajo. Oficios y cursos con demanda para empezar por tu cuenta o desde casa en México, paso a paso.",
    canonical: "/blog/cursos-para-generar-ingresos",
  });

  const cursos = afiliadosDe("ingresos");

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            🚀 Reinvención laboral
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cómo Generar Ingresos por tu Cuenta tras un Despido
          </h1>
          <p className="text-xl text-emerald-100">
            Quedarte sin empleo no es solo buscar otro. También puedes aprender un oficio y generar
            ingresos por tu cuenta — con tu finiquito como colchón para empezar.
          </p>
          <div className="flex items-center gap-4 mt-6 text-emerald-200 text-sm">
            <span>⏱️ 7 min de lectura</span>
            <span>•</span>
            <span>Actualizado julio 2026</span>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Después de un despido casi todos hacemos lo mismo: actualizar el CV y aplicar a vacantes.
          Está bien — pero hay un segundo camino que poca gente considera y que puede darte más
          libertad: <strong>aprender una habilidad u oficio con demanda y generar ingresos por tu
          cuenta</strong>, ya sea desde casa o con tu propio pequeño negocio.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Seamos honestos: <strong>no es dinero fácil ni inmediato.</strong> Requiere aprender, practicar
          y conseguir tus primeros clientes. Pero tiene tres ventajas reales cuando estás entre empleos:
          arranca con poca inversión, lo haces a tu ritmo, y tu <strong>finiquito te da el colchón</strong>
          para sostenerte mientras despega.
        </p>

        {/* Sección 1 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            1. Por qué un oficio con demanda es una buena apuesta
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            No necesitas una carrera nueva ni años de estudio. Muchos oficios prácticos se aprenden en
            semanas con un buen curso, tienen <strong>demanda constante</strong> y se pueden ofrecer por
            tu cuenta: sin jefe, sin horario fijo y cobrando directo a tu cliente.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4 list-disc pl-6">
            <li><strong>Belleza y cuidado personal:</strong> extensiones de pestañas, uñas, barbería, cejas.</li>
            <li><strong>Habilidades digitales:</strong> marketing en redes, diseño, redacción, edición de video.</li>
            <li><strong>Manuales y de casa:</strong> repostería, reparaciones, costura, jardinería.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            La clave es elegir algo con <strong>demanda cerca de ti</strong> y que te lata lo suficiente
            para practicarlo. Aquí abajo te dejamos cursos concretos para arrancar.
          </p>
        </section>

        {/* Sección 2 — cursos (afiliados de categoría ingresos) */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            2. Cursos para empezar tu oficio desde cero
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Estos cursos en línea te enseñan la técnica paso a paso y los puedes tomar a tu ritmo. Son de
            pago único (no suscripción), así que con unos cuantos clientes recuperas la inversión.
          </p>

          {cursos.length > 0 ? (
            cursos.map((c) => <AfiliadoCard key={c.id} id={c.id} />)
          ) : (
            <p className="text-gray-500 italic">Próximamente más cursos recomendados.</p>
          )}
        </section>

        {/* Sección 3 */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            3. Cómo empezar sin arriesgar tu finiquito
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tu finiquito es tu colchón, no tu capital de riesgo. Empieza en pequeño y deja que el negocio
            crezca con sus propias ganancias:
          </p>
          <ol className="space-y-3 mb-4">
            {[
              "Aprende la técnica con un buen curso antes de gastar en equipo caro.",
              "Practica con familia y amigos para agarrar mano y tomar fotos de tu trabajo.",
              "Consigue tus primeros clientes por WhatsApp y redes; ofrece precio de introducción.",
              "Reinvierte tus primeras ganancias en mejor material — no toques tu fondo de emergencia.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-emerald-600 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-gray-700">{item}</p>
              </li>
            ))}
          </ol>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
            <p className="text-amber-800 text-sm">
              <strong>💡 Recuerda:</strong> antes de invertir en un curso o equipo, asegura primero tu
              fondo de emergencia. Lee{" "}
              <a href="/blog/que-hacer-con-tu-finiquito" className="text-blue-600 hover:underline font-semibold">
                qué hacer con tu finiquito
              </a>{" "}
              para no gastar de más.
            </p>
          </div>
        </section>

        {/* CTA calculadora */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-white mb-3">
            ¿Ya sabes cuánto te toca de finiquito?
          </h2>
          <p className="text-emerald-100 mb-6">
            Calcula tu finiquito gratis y sabrás con cuánto colchón cuentas para empezar.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-emerald-700 font-bold py-3 px-8 rounded-lg hover:bg-emerald-50 transition text-lg"
          >
            Calcular mi Finiquito →
          </a>
        </div>
      </article>
    </div>
  );
}
