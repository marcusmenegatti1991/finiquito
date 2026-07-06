import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import AdSense from "@/components/AdSense";

export default function ComoImpugnarFiniquitoIncorrecto() {
  useSEO({
    title: "Cómo Impugnar un Finiquito Incorrecto en México 2026",
    description:
      "¿Tu finiquito tiene errores o te pagaron menos de lo que corresponde? Aprende a identificar errores, negociar, acudir a la CFCRL y demandar si es necesario.",
    canonical: "/blog/como-impugnar-finiquito-incorrecto",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-200 text-sm mb-3 font-medium">🔍 Derechos Laborales</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Cómo Impugnar un Finiquito Incorrecto en México 2026
          </h1>
          <p className="text-lg text-blue-50">
            Firmaste un finiquito con errores o te pagaron menos de lo que te corresponde. No todo está perdido — te explicamos qué puedes hacer y hasta cuándo.
          </p>
          <div className="flex items-center gap-4 mt-6 text-blue-200 text-sm">
            <span>📅 5 de julio de 2026</span>
            <span>•</span>
            <span>⏱️ 8 min de lectura</span>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 border-b border-blue-100 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-sm">Primero verifica el monto correcto de tu finiquito</p>
          <a href="/" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm whitespace-nowrap">
            → Calcular mi Finiquito
          </a>
        </div>
      </div>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Muchos trabajadores firman su finiquito sin revisarlo a fondo y solo después se dan cuenta de que les pagaron menos de lo que les correspondía. La buena noticia es que <strong>firmar un finiquito incorrecto no siempre cierra la puerta</strong> para reclamar la diferencia.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_IMPUGNAR" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Errores Más Comunes en los Finiquitos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Antes de impugnar, identifica exactamente qué está mal. Los errores más frecuentes son:
            </p>
            <div className="space-y-3">
              {[
                { icon: "🏖️", error: "Vacaciones calculadas con la tabla vieja", desc: "Desde 2023 aplica la reforma de Vacaciones Dignas. Si trabajaste más de un año, te corresponden el doble de días que antes. Muchas empresas siguen usando la tabla anterior." },
                { icon: "💰", error: "Salario diario calculado incorrectamente", desc: "El salario diario integrado debe incluir partes proporcionales de aguinaldo, vacaciones y prima vacacional — no solo el salario base mensual." },
                { icon: "🎁", error: "Aguinaldo proporcional omitido", desc: "Algunas empresas solo calculan lo del período anterior y olvidan los meses transcurridos del año actual." },
                { icon: "💸", error: "Prima vacacional no incluida", desc: "El 25% adicional sobre las vacaciones es obligatorio por ley. No es opcional ni discrecional." },
                { icon: "📅", error: "Fecha de ingreso incorrecta", desc: "Usar una fecha posterior a la real reduce la antigüedad y por tanto las vacaciones, prima de antigüedad y aguinaldo." },
              ].map((item, i) => (
                <Card key={i} className="border-l-4 border-l-orange-400 bg-orange-50">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.error}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Se Puede Impugnar un Finiquito ya Firmado?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depende de las circunstancias:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-green-500 bg-green-50">
                <CardContent className="pt-4 pb-4">
                  <h3 className="font-bold text-green-800 mb-2">✅ Sí se puede impugnar si:</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Te obligaron a firmar bajo presión o amenazas</li>
                    <li>• El documento contiene errores matemáticos evidentes</li>
                    <li>• Firmaste sin entender lo que decía (vicio en el consentimiento)</li>
                    <li>• No estaba firmado ante testigos o ratificado ante autoridad</li>
                    <li>• Omitieron prestaciones que son irrenunciables por ley</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500 bg-red-50">
                <CardContent className="pt-4 pb-4">
                  <h3 className="font-bold text-red-800 mb-2">❌ Más difícil de impugnar si:</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Fue ratificado ante la CFCRL o un notario</li>
                    <li>• Firmaste con pleno conocimiento del monto</li>
                    <li>• Hay cláusula expresa de "pago total y finiquito"</li>
                    <li>• Pasaron más de 2 años desde que lo firmaste</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <AdSense slot="SLOT_BLOG_IMPUGNAR_2" format="rectangle" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Paso a Paso: Cómo Reclamar tu Finiquito</h2>
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  titulo: "Calcula el monto correcto",
                  desc: "Antes de cualquier acción, calcula exactamente cuánto te corresponde usando nuestra calculadora. Imprime o guarda el resultado — será tu referencia en cualquier negociación o proceso.",
                  color: "bg-blue-500"
                },
                {
                  num: "2",
                  titulo: "Intenta la negociación directa",
                  desc: "Contacta a tu empresa por escrito (correo electrónico para que quede registro) señalando los errores específicos con sus cálculos. Muchas veces el departamento de RRHH acepta corregirlo sin necesidad de trámites formales.",
                  color: "bg-green-500"
                },
                {
                  num: "3",
                  titulo: "Acude a la CFCRL (gratuito)",
                  desc: "Si la empresa no responde o rechaza la corrección, presenta tu caso en el Centro Federal de Conciliación y Registro Laboral. El trámite de conciliación es gratuito y obligatorio antes de demandar. Ve a cfcrl.gob.mx para iniciar en línea.",
                  color: "bg-yellow-500"
                },
                {
                  num: "4",
                  titulo: "Conciliación con la empresa",
                  desc: "La CFCRL convoca a ambas partes. En esta etapa se busca un acuerdo amistoso. Si llegas con tus cálculos bien documentados, tienes buenas posibilidades de conseguir al menos una parte de la diferencia.",
                  color: "bg-orange-500"
                },
                {
                  num: "5",
                  titulo: "Demanda ante Tribunal Laboral (si falla la conciliación)",
                  desc: "Si no hay acuerdo, puedes demandar. Un abogado laboralista puede evaluar si vale la pena según el monto en disputa. Muchos trabajan a porcentaje del monto recuperado (20-30%), sin costo inicial.",
                  color: "bg-red-500"
                },
              ].map((paso, i) => (
                <div key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-4">
                  <span className={`${paso.color} text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0`}>{paso.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{paso.titulo}</h3>
                    <p className="text-gray-600 text-sm">{paso.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Documentos que Necesitas Reunir</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Copia de tu contrato de trabajo original",
                "Todos tus recibos de nómina (especialmente los últimos 3 meses)",
                "El documento de finiquito que firmaste",
                "Comprobante del pago recibido (transferencia, depósito, voucher)",
                "Registro de vacaciones tomadas (si lo tienes)",
                "Correos o mensajes donde la empresa reconoció la relación laboral",
                "Cualquier otro documento que pruebe tu antigüedad y salario",
              ].map((doc, i) => (
                <div key={i} className="flex items-start gap-2 bg-gray-50 rounded p-3 border border-gray-200">
                  <span className="text-primary font-bold">📄</span>
                  <p className="text-gray-700 text-sm">{doc}</p>
                </div>
              ))}
            </div>
          </section>

          <AdSense slot="SLOT_BLOG_IMPUGNAR_3" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prescripción: ¿Hasta Cuándo Puedo Reclamar?</h2>
            <Card className="border-l-4 border-l-purple-500 bg-purple-50">
              <CardContent className="pt-4 pb-4">
                <p className="text-gray-700 mb-3">
                  Según el <strong>Artículo 516 de la LFT</strong>, las acciones laborales prescriben (se extinguen) en:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>⏰ <strong>2 años</strong> para reclamar partes del finiquito no pagadas</li>
                  <li>⏰ <strong>2 años</strong> para reclamar diferencias en el monto pagado</li>
                  <li>⏰ <strong>1 año</strong> para reclamar prestaciones que vencen periódicamente (como vacaciones de años anteriores)</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm">
                  El plazo empieza a contar desde el día en que terminó la relación laboral o desde que debió pagarse la prestación.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                {
                  q: "¿Necesito contratar un abogado para impugnar el finiquito?",
                  a: "Para la etapa de conciliación ante la CFCRL, no es obligatorio. Puedes ir solo. Para la demanda ante Tribunal sí es muy recomendable tener asesoría legal, aunque muchos abogados laboralistas trabajan sin cobrar por adelantado."
                },
                {
                  q: "¿Qué pasa si la empresa ya no existe o está en quiebra?",
                  a: "Puedes presentar tu reclamación como acreedor laboral en el proceso de quiebra. Los trabajadores tienen preferencia sobre otros acreedores para el cobro de sus prestaciones laborales (Art. 113 LFT)."
                },
                {
                  q: "Firmé un finiquito que decía 'pago total y definitivo'. ¿Puedo reclamar aún?",
                  a: "Es más difícil, pero no imposible. Si el documento omitió prestaciones irrenunciables por ley (como vacaciones o aguinaldo), esa cláusula no tiene validez. Consulta con un abogado para evaluar tu caso específico."
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
            <h2 className="text-2xl font-bold text-white mb-3">Verifica el monto correcto antes de reclamar</h2>
            <p className="text-blue-100 mb-6">
              Usa nuestra calculadora para saber exactamente cuánto te corresponde según la LFT. Con ese número puedes negociar con fundamento.
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
