/**
 * Artículo: ¿Cuánto tiempo tiene la empresa para pagar el finiquito?
 * Slug: /blog/cuanto-tiempo-para-pagar-finiquito
 */

import { useSEO } from "@/hooks/useSEO";
import AdSense from "@/components/AdSense";

export default function CuantoTiempoPagarFiniquito() {
  useSEO({
    title: "¿Cuánto Tiempo Tiene la Empresa para Pagar el Finiquito? (2026)",
    description:
      "La ley establece plazos claros para el pago del finiquito en México. Conoce tus derechos, qué pasa si no te pagan a tiempo y cómo reclamar ante la STPS o Conciliación.",
    canonical: "/blog/cuanto-tiempo-para-pagar-finiquito",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-red-700 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            ⏰ Derechos Laborales
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Cuánto Tiempo Tiene la Empresa para Pagar el Finiquito?
          </h1>
          <p className="text-xl text-orange-100">
            La Ley Federal del Trabajo es clara. Si tu empresa no paga a tiempo, tienes derecho a reclamar intereses y sanciones.
          </p>
          <div className="flex items-center gap-4 mt-6 text-orange-200 text-sm">
            <span>⏱️ 6 min de lectura</span>
            <span>•</span>
            <span>Actualizado junio 2026</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-4">
        <AdSense slot="SLOT_ARTICULO_TOP" format="horizontal" />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-red-900 text-xl mb-2">📌 La respuesta directa</h2>
          <p className="text-red-800 leading-relaxed">
            La Ley Federal del Trabajo no establece un plazo específico en días para el pago del
            finiquito, pero sí obliga a que sea <strong>inmediato al momento de la separación</strong>.
            En la práctica, los tribunales laborales han interpretado que el plazo razonable es de
            <strong> 3 a 5 días hábiles</strong> después de la terminación de la relación laboral.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que Dice la Ley Federal del Trabajo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El artículo 53 de la LFT establece las causas de terminación de la relación de trabajo,
            y los artículos 76 al 89 regulan las prestaciones que deben pagarse. Aunque la LFT no
            fija un plazo exacto de días, sí establece que:
          </p>
          <ul className="space-y-3 ml-4">
            {[
              "El pago debe hacerse en moneda de curso legal (no en vales ni especie, salvo excepciones).",
              "El trabajador tiene derecho a recibir un recibo de pago detallado con todos los conceptos.",
              "El trabajador puede negarse a firmar el finiquito si no está de acuerdo con los montos.",
              "La empresa no puede condicionar la entrega de documentos (carta de recomendación, IMSS) al finiquito."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="text-red-500 font-bold mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué Pasa si la Empresa No Paga?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Si tu empresa se niega a pagar o demora injustificadamente el finiquito, tienes varias opciones:
          </p>
          <div className="space-y-4">
            {[
              {
                paso: "1",
                titulo: "Conciliación ante el CFCRL",
                desc: "El Centro Federal de Conciliación y Registro Laboral (CFCRL) ofrece un proceso de conciliación gratuito y obligatorio antes de ir a juicio. Es rápido (máximo 45 días) y la mayoría de casos se resuelven aquí.",
                color: "bg-blue-50 border-blue-200",
                titleColor: "text-blue-900",
              },
              {
                paso: "2",
                titulo: "Demanda ante el Tribunal Laboral",
                desc: "Si la conciliación falla, puedes presentar una demanda laboral. El juicio puede durar 6-18 meses, pero si ganas, la empresa debe pagar el finiquito más intereses del 9% anual (art. 48 LFT) por el tiempo que tardó en pagar.",
                color: "bg-purple-50 border-purple-200",
                titleColor: "text-purple-900",
              },
              {
                paso: "3",
                titulo: "Queja ante la STPS",
                desc: "También puedes interponer una queja ante la Secretaría del Trabajo y Previsión Social (STPS). Ellos pueden inspeccionar a la empresa y aplicar sanciones económicas.",
                color: "bg-green-50 border-green-200",
                titleColor: "text-green-900",
              },
            ].map((item, i) => (
              <div key={i} className={`border rounded-xl p-6 ${item.color}`}>
                <div className="flex items-start gap-4">
                  <span className="bg-gray-800 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    {item.paso}
                  </span>
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${item.titleColor}`}>{item.titulo}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_MID" format="rectangle" />
        </div>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Puedo Negarme a Firmar el Finiquito?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sí. Tienes todo el derecho de revisar el documento antes de firmarlo y negarte si los
            montos no son correctos. Lo importante:
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg space-y-3">
            <p className="text-amber-900 text-sm">
              <strong>✅ Puedes:</strong> Pedir tiempo para revisar el documento (mínimo 24 horas es
              razonable), consultar con un abogado antes de firmar, proponer montos diferentes si
              calculas que te deben más.
            </p>
            <p className="text-amber-900 text-sm">
              <strong>⚠️ Cuidado:</strong> Al firmar el finiquito con la leyenda "recibo a mi entera
              satisfacción", puede interpretarse como que aceptas los montos como correctos y finales.
              Si no estás de acuerdo, no firmes esa leyenda.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentos que Debes Conservar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Contrato de trabajo original",
              "Recibos de nómina de los últimos 3 meses",
              "Constancia de última semana cotizada en el IMSS",
              "Cualquier comunicación escrita sobre el despido o renuncia",
              "El finiquito firmado (conserva tu copia)",
              "Comprobante de pago del finiquito (transferencia o cheque)"
            ].map((doc, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <span className="text-blue-500">📄</span>
                <span className="text-sm text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="my-8">
          <AdSense slot="SLOT_ARTICULO_BOT" format="horizontal" />
        </div>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 text-center mt-10">
          <h2 className="text-2xl font-bold text-white mb-3">Calcula lo que te corresponde</h2>
          <p className="text-orange-100 mb-6">
            Usa nuestra calculadora para saber exactamente cuánto debe pagarte tu empresa.
          </p>
          <a href="/" className="inline-block bg-white text-red-700 font-bold py-3 px-8 rounded-lg hover:bg-red-50 transition text-lg">
            Calcular mi Finiquito →
          </a>
        </div>
      </article>
    </div>
  );
}
