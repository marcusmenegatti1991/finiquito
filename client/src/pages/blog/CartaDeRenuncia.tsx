import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import AdSense from "@/components/AdSense";

export default function CartaDeRenuncia() {
  useSEO({
    title: "Carta de Renuncia en México 2026: Cómo Redactarla y Qué Incluir",
    description:
      "Modelo de carta de renuncia en México 2026 conforme a la LFT. Qué debe incluir, cuántos días de aviso dar, si es obligatoria y cómo proteger tu finiquito.",
    canonical: "/blog/carta-de-renuncia-mexico",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-200 text-sm mb-3 font-medium">📝 Guía Práctica</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Carta de Renuncia en México 2026: Cómo Redactarla Correctamente
          </h1>
          <p className="text-lg text-blue-50">
            Redactar bien tu carta de renuncia protege tu finiquito y cierra la relación laboral de forma correcta. Te damos un modelo, los puntos obligatorios y lo que debes evitar.
          </p>
          <div className="flex items-center gap-4 mt-6 text-blue-200 text-sm">
            <span>📅 5 de julio de 2026</span>
            <span>•</span>
            <span>⏱️ 6 min de lectura</span>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 border-b border-blue-100 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-sm">Calcula tu finiquito antes de renunciar</p>
          <a href="/" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm whitespace-nowrap">
            → Calcular mi Finiquito
          </a>
        </div>
      </div>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La carta de renuncia no es solo un trámite burocrático: es el documento que establece oficialmente la fecha de terminación de tu relación laboral, que es la base para calcular tu finiquito. Redactarla mal puede costarte dinero o problemas futuros.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_RENUNCIA" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Es Obligatorio Entregar una Carta de Renuncia?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La Ley Federal del Trabajo <strong>no obliga expresamente</strong> al trabajador a entregar una carta de renuncia escrita. Sin embargo, sí establece que la renuncia debe ser voluntaria y libre. En la práctica:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-green-500 bg-green-50">
                <CardContent className="pt-4 pb-4">
                  <h3 className="font-bold text-green-800 mb-2">Por qué SÍ conviene darla por escrito</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Establece claramente la fecha de tu último día</li>
                    <li>• Protege tu finiquito (la empresa no puede alegar otra fecha)</li>
                    <li>• Evita que la empresa te acuse de abandono de trabajo</li>
                    <li>• Sirve como constancia para trámites futuros (IMSS, INFONAVIT)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-orange-400 bg-orange-50">
                <CardContent className="pt-4 pb-4">
                  <h3 className="font-bold text-orange-800 mb-2">Lo que NO debes incluir</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Frases como "renuncio a cualquier prestación"</li>
                    <li>• Declarar que recibes el finiquito "en su totalidad" si aún no lo has recibido</li>
                    <li>• Fechas incorrectas o que no correspondan al día real</li>
                    <li>• Agradecimientos excesivos que puedan interpretarse como renuncia de derechos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cuántos Días de Aviso Debes Dar?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La LFT <strong>no establece un período mínimo de aviso</strong> obligatorio para el trabajador. Eso significa que legalmente puedes renunciar con efecto inmediato. Sin embargo:
            </p>
            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="pt-4 pb-4">
                <ul className="space-y-2 text-gray-700">
                  <li>📋 Muchos contratos individuales o colectivos sí establecen períodos de aviso (generalmente <strong>15 o 30 días</strong>). Revisa tu contrato.</li>
                  <li>🤝 Dar aviso previo es una buena práctica profesional y puede facilitar la obtención de cartas de recomendación.</li>
                  <li>⚠️ Si tu contrato exige aviso y no lo das, la empresa podría descontarte esos días de tu finiquito — aunque esto es debatible legalmente y debes asesorarte.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <AdSense slot="SLOT_BLOG_RENUNCIA_2" format="rectangle" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modelo de Carta de Renuncia</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aquí tienes un modelo sencillo, limpio y que protege tus derechos:
            </p>
            <Card className="border border-gray-300 bg-gray-50">
              <CardContent className="pt-6 pb-6">
                <div className="font-mono text-sm text-gray-800 space-y-4 leading-relaxed">
                  <p className="text-right text-gray-500">[Ciudad], [Fecha]</p>
                  <p>
                    <strong>[Nombre del representante o empresa]</strong><br />
                    [Cargo]<br />
                    [Nombre de la empresa]<br />
                    Presente
                  </p>
                  <p>Por medio de la presente, yo <strong>[Tu nombre completo]</strong>, con número de empleado <strong>[número si aplica]</strong>, me dirijo a usted para comunicarle mi decisión de renunciar voluntariamente al puesto de <strong>[tu puesto]</strong> que he desempeñado en esta empresa.</p>
                  <p>La presente renuncia surtirá efecto el día <strong>[fecha de tu último día de trabajo]</strong>.</p>
                  <p>Solicito que se me liquiden todas las prestaciones que me corresponden conforme a la Ley Federal del Trabajo, incluyendo saldo de salario, vacaciones proporcionales, prima vacacional y aguinaldo proporcional.</p>
                  <p>Agradezco la oportunidad de haber colaborado con la empresa.</p>
                  <p className="mt-6">Atentamente,</p>
                  <p>
                    <strong>[Tu nombre completo]</strong><br />
                    [Tu firma]<br />
                    [Tu teléfono o correo]
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pasos para Entregar tu Renuncia Correctamente</h2>
            <div className="space-y-3">
              {[
                { num: "1", titulo: "Imprime 2 copias", desc: "Una para la empresa y una para ti. En tu copia, pide que RR.HH. o tu jefe directo firme y selle el acuse de recibo." },
                { num: "2", titulo: "Envíala también por correo electrónico", desc: "Así tienes prueba digital con fecha y hora de envío. Guarda el correo enviado." },
                { num: "3", titulo: "Calcula tu finiquito antes de entregarlo", desc: "Usa nuestra calculadora para saber cuánto te deben. Así puedes verificar que el monto del finiquito sea correcto antes de firmarlo." },
                { num: "4", titulo: "No firmes el finiquito sin revisarlo", desc: "El finiquito es un documento separado. Puedes entregar tu renuncia hoy y firmar el finiquito después, una vez que verifiques que el monto sea correcto." },
              ].map((paso, i) => (
                <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-4">
                  <span className="bg-primary text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">{paso.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{paso.titulo}</h3>
                    <p className="text-gray-600 text-sm">{paso.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AdSense slot="SLOT_BLOG_RENUNCIA_3" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                {
                  q: "¿Puedo renunciar por WhatsApp o correo electrónico?",
                  a: "Sí, es válido. Cualquier medio que deje constancia escrita sirve como evidencia de la renuncia. Un correo electrónico o mensaje de WhatsApp con fecha y hora puede usarse como prueba."
                },
                {
                  q: "Si renuncio, ¿pierdo el seguro del IMSS de inmediato?",
                  a: "No inmediatamente. Tienes 8 semanas de vigencia en el seguro de enfermedades y maternidad después de darte de baja del IMSS (Art. 109 LSS). Después de ese período, el seguro se suspende a menos que estés en otro trabajo."
                },
                {
                  q: "¿Qué pasa si no entrego carta de renuncia y simplemente dejo de ir?",
                  a: "Si faltas más de 3 días consecutivos sin justificación, la empresa puede darte de baja por abandono de trabajo. Esto es diferente a una renuncia y puede afectar tu historial laboral y el proceso para recuperar tus prestaciones."
                },
                {
                  q: "¿Puedo retirar mi renuncia una vez entregada?",
                  a: "Depende de la empresa. Legalmente puedes intentarlo, pero la empresa no está obligada a aceptar el retiro de la renuncia. Lo mejor es comunicarlo lo antes posible de forma directa y por escrito."
                },
              ].map((faq, i) => (
                <Card key={i} className="border border-gray-200">
                  <CardContent className="pt-4 pb-4">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Antes de renunciar, calcula cuánto te deben</h2>
            <p className="text-blue-100 mb-6">
              Conocer el monto exacto de tu finiquito te da poder de negociación y evita que aceptes menos de lo que marca la ley.
            </p>
            <a href="/" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg">
              Calcular mi Finiquito →
            </a>
          </div>

        </div>
      </article>
    </div>
  );
}
