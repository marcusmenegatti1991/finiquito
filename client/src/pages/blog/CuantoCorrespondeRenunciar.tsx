import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import AdSense from "@/components/AdSense";

export default function CuantoCorrespondeRenunciar() {
  useSEO({
    title: "¿Cuánto me Corresponde si Renuncio? Guía por Años de Servicio 2026",
    description:
      "Descubre exactamente cuánto dinero te corresponde al renunciar en México según tu antigüedad. Ejemplos reales con 1, 2, 3, 5 y 10 años de servicio.",
    canonical: "/blog/cuanto-corresponde-si-renuncio",
  });

  const ejemplos = [
    {
      anos: "1 año",
      salario: 15000,
      diasNoPagados: 5,
      aguinaldo: 1027,
      vacaciones: 590,
      primaVac: 148,
      saldo: 2500,
      total: 4265,
      diasVac: 12,
    },
    {
      anos: "3 años",
      salario: 15000,
      diasNoPagados: 5,
      aguinaldo: 2774,
      vacaciones: 985,
      primaVac: 246,
      saldo: 2500,
      total: 6505,
      diasVac: 16,
    },
    {
      anos: "5 años",
      salario: 15000,
      diasNoPagados: 5,
      aguinaldo: 2774,
      vacaciones: 1232,
      primaVac: 308,
      saldo: 2500,
      total: 6814,
      diasVac: 20,
    },
    {
      anos: "10 años",
      salario: 15000,
      diasNoPagados: 5,
      aguinaldo: 2774,
      vacaciones: 1726,
      primaVac: 432,
      saldo: 2500,
      total: 7432,
      diasVac: 28,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-200 text-sm mb-3 font-medium">💼 Guía Práctica</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            ¿Cuánto me Corresponde si Renuncio? Guía por Años de Servicio 2026
          </h1>
          <p className="text-lg text-blue-50">
            Ejemplos reales de finiquito por renuncia con 1, 3, 5 y 10 años de servicio, usando salario de $15,000 mensuales
          </p>
          <div className="flex items-center gap-4 mt-6 text-blue-200 text-sm">
            <span>📅 17 de mayo de 2026</span>
            <span>•</span>
            <span>⏱️ 7 min de lectura</span>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 border-b border-blue-100 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-sm">Calcula tu caso específico con nuestra herramienta gratuita</p>
          <a href="/" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm whitespace-nowrap">
            → Ir a la Calculadora
          </a>
        </div>
      </div>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Cuando decides renunciar, tienes derecho a un <strong>finiquito</strong> que incluye todas las prestaciones que acumulaste durante tu tiempo en la empresa. El monto varía según tu antigüedad, salario y los días que hayas trabajado en el año en curso.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En esta guía te mostramos ejemplos concretos con diferentes años de servicio para que tengas una idea clara de lo que puedes esperar recibir.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_RENUNCIO" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué Incluye el Finiquito por Renuncia?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                { icon: "💼", t: "Saldo de salario", d: "Días trabajados pendientes de pago" },
                { icon: "🎁", t: "Aguinaldo proporcional", d: "Por los meses trabajados en el año" },
                { icon: "🏖️", t: "Vacaciones proporcionales", d: "Desde tu último aniversario laboral" },
                { icon: "✨", t: "Prima vacacional", d: "25% adicional sobre las vacaciones" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-blue-50 p-3 rounded-lg">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.t}</p>
                    <p className="text-gray-600 text-xs">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Card className="border-l-4 border-l-yellow-500 bg-yellow-50">
              <CardContent className="pt-4">
                <p className="text-yellow-900 text-sm">
                  <strong>Nota:</strong> La prima de antigüedad (12 días/año) solo aplica en renuncia voluntaria si tienes <strong>15 o más años</strong> de servicio. Si te despidieron injustificadamente, aplica desde el primer año y además recibes indemnización.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ejemplos Reales por Años de Servicio</h2>
            <p className="text-gray-600 text-sm mb-6">Basado en: salario $15,000/mes, 5 días laborados no pagados, terminación en mayo (135 días del año transcurridos)</p>

            <div className="space-y-6">
              {ejemplos.map((ej, i) => (
                <Card key={i} className="border-2 border-gray-200 hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary text-white font-bold px-3 py-1 rounded-full text-sm">{ej.anos}</span>
                      <span className="text-gray-500 text-sm">Salario: $15,000/mes — {ej.diasVac} días de vacaciones</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {[
                        ["💼 Saldo salario", `$${ej.saldo.toLocaleString("es-MX")}`],
                        ["🎁 Aguinaldo", `$${ej.aguinaldo.toLocaleString("es-MX")}`],
                        ["🏖️ Vacaciones", `$${ej.vacaciones.toLocaleString("es-MX")}`],
                        ["✨ Prima vac.", `$${ej.primaVac.toLocaleString("es-MX")}`],
                      ].map(([label, monto], j) => (
                        <div key={j} className="bg-gray-50 p-3 rounded-lg text-center">
                          <p className="text-xs text-gray-500 mb-1">{label}</p>
                          <p className="font-bold text-gray-900">{monto}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 flex items-center justify-between">
                      <span className="font-bold text-gray-900">TOTAL ESTIMADO</span>
                      <span className="text-2xl font-bold text-primary">~${ej.total.toLocaleString("es-MX")}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">*Los montos son aproximados. Usa la calculadora para tu caso exacto.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cuándo y Cómo Cobrar tu Finiquito?</h2>
            <div className="space-y-4">
              {[
                { n: "1", t: "Solicita tu finiquito por escrito", d: "Pide al área de Recursos Humanos un documento con el desglose detallado de cada concepto antes de firmar." },
                { n: "2", t: "Verifica cada concepto", d: "Compara el desglose con esta calculadora. Si hay diferencias, pregunta con documentos en mano." },
                { n: "3", t: "No firmes bajo presión", d: "Tienes derecho a revisar el finiquito con calma. La firma es tu aceptación de los montos." },
                { n: "4", t: "Recibe el pago antes de firmar", d: "Lo ideal es recibir el pago (o cheque) al mismo tiempo que firmas. No firmes esperando que 'te lo depositarán después'." },
                { n: "5", t: "Plazo legal", d: "El patrón debe pagar el finiquito en un plazo razonable. Si se niegan, puedes acudir a la PROFEDET o a los tribunales laborales." },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 items-start">
                  <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">{item.n}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.t}</p>
                    <p className="text-gray-600 text-sm mt-1">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                {
                  q: "¿Me descuentan impuestos del finiquito?",
                  a: "Las indemnizaciones laborales tienen exenciones de ISR. El aguinaldo proporcional está exento hasta cierto monto. Para montos grandes o casos complejos, consulta con un contador."
                },
                {
                  q: "¿Puedo renunciar sin avisar con anticipación?",
                  a: "Legalmente no existe un aviso previo obligatorio para trabajadores en la LFT. Sin embargo, muchas empresas lo solicitan por contrato. Renunciar sin avisar no te quita el derecho al finiquito."
                },
                {
                  q: "¿Qué pasa si la empresa no me paga el finiquito?",
                  a: "Puedes acudir a la Procuraduría Federal de la Defensa del Trabajo (PROFEDET) que ofrece asesoría gratuita, o presentar una demanda ante el Tribunal Laboral."
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="pt-4">
                    <p className="font-bold text-gray-900 mb-2">❓ {item.q}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">⚠️ Aviso Legal</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Los ejemplos de esta guía son estimaciones basadas en la Ley Federal del Trabajo 2026. Los montos reales pueden variar según el salario integrado, convenios colectivos o circunstancias particulares. Consulta con un asesor laboral para tu caso específico.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_RENUNCIO_BOTTOM" format="horizontal" />

          <section className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Calcula tu Finiquito Exacto</h2>
            <p className="text-blue-100 mb-6">Ingresa tus datos reales y obtén el cálculo preciso según la LFT</p>
            <a href="/" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg">
              Calcular Ahora →
            </a>
          </section>
        </div>
      </article>
    </div>
  );
}
