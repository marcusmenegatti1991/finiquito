import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import AdSense from "@/components/AdSense";

export default function PrimaAntiguedad() {
  useSEO({
    title: "Prima de Antigüedad en México 2026: Cuándo te Corresponde y Cómo Calcularla",
    description:
      "Todo sobre la prima de antigüedad en México: cuándo aplica, cómo calcularla con el tope de 2 UMA, y en qué casos se paga al renunciar o al ser despedido.",
    canonical: "/blog/prima-de-antiguedad",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-blue-200 text-sm mb-3 font-medium">🏅 Prestaciones Laborales</div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Prima de Antigüedad en México 2026: Cuándo te Corresponde y Cómo Calcularla
          </h1>
          <p className="text-lg text-blue-50">
            Una prestación que muchos trabajadores desconocen y que puede representar una cantidad importante en tu finiquito
          </p>
          <div className="flex items-center gap-4 mt-6 text-blue-200 text-sm">
            <span>📅 17 de mayo de 2026</span>
            <span>•</span>
            <span>⏱️ 6 min de lectura</span>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 border-b border-blue-100 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-sm">Calcula tu prima de antigüedad incluida en tu finiquito gratis</p>
          <a href="/" className="bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm whitespace-nowrap">
            → Ir a la Calculadora
          </a>
        </div>
      </div>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          <section>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La <strong>prima de antigüedad</strong> es una prestación laboral establecida en el <strong>Artículo 162 de la Ley Federal del Trabajo</strong> que consiste en el pago de 12 días de salario por cada año de servicio. A diferencia de otras prestaciones, no todos los trabajadores la reciben al terminar su relación laboral — depende de cómo y por qué se termina el contrato.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Conocer cuándo te corresponde puede hacer una gran diferencia en el monto que recibes al salir de una empresa.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_PRIMA" format="horizontal" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cuándo se Paga la Prima de Antigüedad?</h2>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-green-700 mb-2">✅ Siempre se paga (desde el primer año)</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Despido injustificado</strong> — el patrón te despide sin causa legal</li>
                    <li>• <strong>Renuncia por causa imputable al patrón</strong> (Art. 51 LFT) — el patrón incumplió sus obligaciones</li>
                    <li>• <strong>Fallecimiento del trabajador</strong> — se paga a los beneficiarios</li>
                    <li>• <strong>Incapacidad permanente</strong> — si quedas imposibilitado para trabajar</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-yellow-700 mb-2">⚠️ Solo se paga con más de 15 años</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Renuncia voluntaria</strong> — solo si tienes 15 o más años de servicio</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="pt-4">
                  <h3 className="font-bold text-red-700 mb-2">❌ No se paga</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Despido justificado</strong> — si el patrón acredita causa legal para el despido</li>
                    <li>• <strong>Renuncia voluntaria con menos de 15 años</strong></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cómo Calcular la Prima de Antigüedad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La fórmula es sencilla, pero tiene un detalle importante: el salario diario <strong>no puede exceder el doble de la UMA diaria</strong>. En 2026, la UMA diaria es de $117.31, por lo que el tope es de <strong>$234.62 por día</strong>.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 mb-4">
              <p className="font-bold text-purple-900 mb-3">Fórmula (Art. 162 LFT):</p>
              <p className="font-mono text-purple-900 mb-2">Salario efectivo = mínimo(Salario Diario, $234.62)</p>
              <p className="font-mono text-purple-900">Prima de Antigüedad = 12 × Años Completos × Salario efectivo</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gray-50">
                <CardContent className="pt-4">
                  <p className="font-bold text-gray-700 mb-3">Ejemplo 1: Salario bajo el tope</p>
                  <div className="text-sm space-y-1 text-gray-600">
                    <p>Salario mensual: $12,000</p>
                    <p>Salario diario: $400 (bajo el tope)</p>
                    <p>Años de servicio: 8</p>
                    <p className="border-t pt-2 font-semibold text-primary">12 × 8 × $400 = <strong>$38,400</strong></p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50">
                <CardContent className="pt-4">
                  <p className="font-bold text-gray-700 mb-3">Ejemplo 2: Salario sobre el tope</p>
                  <div className="text-sm space-y-1 text-gray-600">
                    <p>Salario mensual: $40,000</p>
                    <p>Salario diario: $1,333 → tope: $234.62</p>
                    <p>Años de servicio: 8</p>
                    <p className="border-t pt-2 font-semibold text-primary">12 × 8 × $234.62 = <strong>$22,523.52</strong></p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué son los Años Completos?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La prima de antigüedad se calcula solo sobre <strong>años completos de servicio</strong>. Los meses o días adicionales no se pagan proporcionalmente en la prima de antigüedad (a diferencia del aguinaldo o las vacaciones). Sin embargo, sí corresponde el pago proporcional de vacaciones y aguinaldo por el periodo parcial.
            </p>
            <Card className="border-l-4 border-l-blue-500 bg-blue-50">
              <CardContent className="pt-4">
                <p className="text-blue-800 text-sm">
                  <strong>Ejemplo:</strong> Si trabajaste 6 años y 9 meses, la prima de antigüedad se calcula sobre <strong>6 años</strong>, no sobre 6.75.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Está Exenta de ISR?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sí, parcialmente. El SAT establece que la prima de antigüedad está exenta de ISR hasta un monto equivalente a <strong>90 días de UMA</strong> por año de servicio. En 2026:
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-900 font-semibold">Monto exento = 90 × $117.31 = <strong>$10,557.90 por año de servicio</strong></p>
              <p className="text-green-800 text-sm mt-2">Lo que exceda ese monto sí paga ISR. Para la mayoría de los trabajadores con salarios por debajo del tope de 2 UMAs, toda la prima quedará exenta.</p>
            </div>
          </section>

          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">⚠️ Aviso Legal</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Esta información es orientativa y se basa en el Art. 162 LFT y normativa fiscal del SAT vigente en 2026. Para casos específicos, consulta con un contador o abogado laboral.
            </p>
          </section>

          <AdSense slot="SLOT_BLOG_PRIMA_BOTTOM" format="horizontal" />

          <section className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Calcula tu Prima de Antigüedad</h2>
            <p className="text-blue-100 mb-6">Nuestra calculadora incluye la prima de antigüedad con el tope de 2×UMA ya aplicado automáticamente</p>
            <a href="/" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition text-lg">
              Calcular mi Finiquito →
            </a>
          </section>
        </div>
      </article>
    </div>
  );
}
