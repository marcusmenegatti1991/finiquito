/**
 * Artículo: Cómo impugnar un finiquito incorrecto
 * Slug: /blog/como-impugnar-finiquito-incorrecto
 */

import { useSEO } from "@/hooks/useSEO";
import AdSense from "@/components/AdSense";

export default function ComoImpugnarFiniquitoIncorrecto() {
  useSEO({
    title: "Cómo Impugnar un Finiquito Incorrecto en México 2026",
    description:
      "Tu empresa te ofreció un finiquito y crees que los montos están mal. Aquí te explicamos cómo verificar si es correcto, qué hacer si no lo es y cómo reclamar.",
    canonical: "/blog/como-impugnar-finiquito-incorrecto",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-700 to-amber-600 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            ⚖️ Reclamos Laborales
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cómo Impugnar un Finiquito Incorrecto en México
          </h1>
          <p className="text-xl text-orange-100">
            Antes de firmar, verifica los números. Un error puede costarte miles de pesos que te corresponden por ley.
          </p>
          <div className="flex items-center gap-4 mt-6 text-orange-200 text-sm">
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
          Muchos trabajadores firman el finiquito sin revisarlo a detalle, ya sea por presión de la
          empresa, desconocimiento o urgencia. Pero antes de firmar, tienes todo el derecho de revisar
          cada número. Los errores más comunes en los finiquitos van desde el salario base incorrecto
          hasta omitir días de vacaciones o calcular mal el aguinaldo.
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Errores Más Comunes en los Finiquitos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "💰", titulo: "Salario base incorrecto", desc: "Algunas empresas calculan con el salario neto en lugar del salario diario integrado, que incluye partes proporcionales de prestaciones." },
              { icon: "📅", titulo: "Días trabajados mal contados", desc: "Verificar exactamente desde qué fecha hasta qué fecha se cuentan los días laborados. Los errores de un día pueden significar diferencias importantes." },
              { icon: "🏖️", titulo: "Vacaciones no pagadas", desc: "Si tienes vacaciones acumuladas no gozadas, la empresa debe pagarlas en el finiquito aunque hayas renunciado." },
              { icon: "🎁", titulo: "Aguinaldo mal calculado", desc: "La fórmula correcta es (15 ÷ 365) × días trabajados en el año × salario diario. Si usan 360 días o ignoran algún período, el cálculo está mal." },
              { icon: "🔢", titulo: "Prima vacacional omitida", desc: "El 25% adicional sobre las vacaciones proporcionales es obligatorio por ley. Muchas empresas lo omiten pensando que solo aplica en vacaciones gozadas." },
              { icon: "📊", titulo: "Prima de antigüedad incorrecta", desc: "Si tienes más de 15 años, la prima de antigüedad es obligatoria incluso al renunciar. Aplica sobre 12 días por año con tope de 2 veces la UMA." },
            ].map((error, i) => (
              <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-5">
                <div className="text-2xl mb-2">{error.icon}</div>
                <h3 className="font-bold text-red-900 mb-2">{error.titulo}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{error.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Paso 1: Verifica el Finiquito Antes de Firmar
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lo primero es calcular tú mismo cuánto te corresponde y compararlo con lo que te ofrece
            la empresa. Usa nuestra calculadora gratuita para obtener el monto correcto según la LFT:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">🧮 Datos que necesitas para verificar:</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Tu fecha de ingreso y fecha de salida exactas</li>
              <li>• Tu salario diario (salario mensual ÷ 30)</li>
              <li>• Tipo de separación (renuncia, despido justificado o injustificado)</li>
              <li>• Días de vacaciones tomados en el último año</li>
              <li>• Cualquier bono o comisión pendiente de pago</li>
            </ul>
            <a href="/" className="inline-block mt-4 bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition text-sm">
              Calcular mi Finiquito Correcto →
            </a>
          </div>
        </section>

        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_MID" format="rectangle" />
        </div>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Paso 2: Si Hay Diferencia, No Firmes Todavía
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si tu cálculo no coincide con el finiquito que te presentan, tienes opciones:
          </p>
          <div className="space-y-4">
            {[
              {
                titulo: "Negociación directa con la empresa",
                desc: "Presenta tu cálculo por escrito al área de Recursos Humanos o al empleador. Señala exactamente qué conceptos están mal y cuál debería ser el monto correcto. Muchos errores son involuntarios y se corrigen en esta etapa.",
                recomendado: true,
              },
              {
                titulo: "Firma bajo protesta",
                desc: "Si la empresa presiona para que firmes de inmediato, puedes hacerlo agregando de tu puño y letra 'Firmo bajo protesta por no estar de acuerdo con los montos' y tu nombre. Esto no invalida tu derecho a reclamar después.",
                recomendado: false,
              },
              {
                titulo: "No firmes y ve a conciliación",
                desc: "Si no llegamos a acuerdo, el siguiente paso es acudir al Centro Federal de Conciliación y Registro Laboral (CFCRL) para iniciar el proceso de conciliación, que es gratuito y obligatorio antes de un juicio.",
                recomendado: false,
              },
            ].map((op, i) => (
              <div key={i} className={`border rounded-xl p-5 ${op.recomendado ? "border-green-300 bg-green-50" : "border-gray-200 bg-gray-50"}`}>
                <div className="flex items-start gap-3">
                  {op.recomendado && <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0">RECOMENDADO PRIMERO</span>}
                </div>
                <h3 className="font-bold text-gray-900 mt-2 mb-2">{op.titulo}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{op.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Paso 3: Proceso de Conciliación y Demanda Laboral
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Si la negociación directa no funciona, el proceso formal tiene dos etapas:
          </p>
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-blue-900 text-lg mb-3">📋 Conciliación (obligatoria y gratuita)</h3>
              <p className="text-blue-800 text-sm mb-3">
                Presentas tu caso ante el CFCRL. Un conciliador trabaja con ambas partes para llegar
                a un acuerdo. El proceso dura máximo 45 días. Si llegan a un acuerdo, tiene validez
                legal definitiva. Si no, recibes un Constancia de No Conciliación para ir a juicio.
              </p>
              <p className="text-blue-800 text-sm">
                <strong>Cómo iniciar:</strong> Entra a{" "}
                <a href="https://www.cfcrl.gob.mx" target="_blank" rel="noopener noreferrer" className="underline">
                  cfcrl.gob.mx
                </a>{" "}
                o acude a su oficina más cercana.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-bold text-purple-900 text-lg mb-3">⚖️ Demanda ante el Tribunal Laboral</h3>
              <p className="text-purple-800 text-sm">
                Si la conciliación falla, puedes presentar una demanda. El juicio dura entre 6 y 18
                meses en promedio. Si ganas, la empresa debe pagar el finiquito correcto más intereses
                del 9% anual desde la fecha en que debió pagarse. Puedes contratar un abogado o ir
                por tu cuenta (es posible, pero se recomienda asesoría).
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Ya Firmé el Finiquito, Puedo Reclamar Todavía?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Depende de lo que firmaste. Si el documento dice "recibo a mi entera satisfacción" y no
            anotaste ninguna protesta, es más difícil pero no imposible. Hay casos en que se ha podido
            demostrar que el trabajador firmó bajo presión, con intimidación, o sin tiempo para revisar.
          </p>
          <p className="text-gray-700 leading-relaxed">
            El plazo para presentar una demanda laboral es de <strong>2 años</strong> a partir de la
            fecha en que terminó la relación laboral (artículo 516 LFT). Consulta con un abogado
            laboralista para evaluar tu caso específico.
          </p>
        </section>

        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_BOT" format="horizontal" />
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-white mb-3">Verifica cuánto te corresponde</h2>
          <p className="text-orange-100 mb-6">
            Calcula tu finiquito correcto antes de aceptar lo que te ofrece la empresa.
          </p>
          <a href="/" className="inline-block bg-white text-orange-700 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition text-lg">
            Calcular mi Finiquito →
          </a>
        </div>
      </article>
    </div>
  );
}
