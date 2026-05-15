/**
 * Página: Términos de Servicio
 * Términos y condiciones de uso del sitio
 */

export default function TermsOfService() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Términos de Servicio</h1>
          <p className="text-xl text-blue-50">
            Última actualización: 15 de Mayo de 2026
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {/* Introducción */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de Términos</h2>
            <p className="text-gray-700 leading-relaxed">
              Al acceder y usar la <strong>Calculadora de Finiquito México</strong>, aceptas estar vinculado por 
              estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no uses nuestro servicio.
            </p>
          </div>

          {/* Descripción del Servicio */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción del Servicio</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La Calculadora de Finiquito México es una herramienta en línea gratuita que proporciona 
              <strong> estimaciones</strong> de finiquito y liquidación laboral basadas en la Ley Federal del Trabajo de México.
            </p>
            <p className="text-gray-700">
              El servicio incluye: cálculos automáticos, explicaciones educativas, preguntas frecuentes y 
              información sobre legislación laboral mexicana.
            </p>
          </div>

          {/* Descargo de Responsabilidad */}
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Descargo de Responsabilidad Importante</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>ESTA CALCULADORA PROPORCIONA ESTIMACIONES ÚNICAMENTE.</strong> No constituye asesoría legal, 
                contable o laboral profesional.
              </p>
              <p>
                Los cálculos pueden variar según:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Convenios colectivos</li>
                <li>Contratos individuales específicos</li>
                <li>Circunstancias particulares del empleado</li>
                <li>Cambios en la legislación</li>
                <li>Interpretaciones judiciales</li>
              </ul>
              <p className="font-semibold">
                Para casos específicos o complejos, consulta con un asesor laboral certificado o abogado especializado.
              </p>
            </div>
          </div>

          {/* Uso Permitido */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Uso Permitido</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aceptas usar esta calculadora solo para propósitos legales y legítimos. Específicamente, aceptas:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Usar la calculadora para obtener estimaciones personales de finiquito</li>
              <li>Usar la información para propósitos educativos</li>
              <li>No reproducir o distribuir el contenido sin permiso</li>
              <li>No intentar acceder a sistemas o datos no autorizados</li>
              <li>No usar la calculadora para propósitos fraudulentos</li>
            </ul>
          </div>

          {/* Uso No Permitido */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Uso No Permitido</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Específicamente, no puedes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Usar la calculadora para propósitos ilegales</li>
              <li>Violar leyes o regulaciones aplicables</li>
              <li>Infringir derechos de terceros</li>
              <li>Intentar hackear o comprometer la seguridad</li>
              <li>Enviar spam o contenido malicioso</li>
              <li>Usar bots o scrapers para acceder al sitio</li>
              <li>Reproducir o vender la calculadora sin permiso</li>
            </ul>
          </div>

          {/* Limitación de Responsabilidad */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En la máxima medida permitida por la ley, la Calculadora de Finiquito México no será responsable por:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Daños directos, indirectos, incidentales o consecuentes</li>
              <li>Pérdida de datos o ganancias</li>
              <li>Errores en los cálculos (aunque nos esforzamos por precisión)</li>
              <li>Interrupciones del servicio</li>
              <li>Cambios en la legislación después de usar la calculadora</li>
            </ul>
          </div>

          {/* Precisión de la Información */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Precisión de la Información</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos esforzamos por mantener la información precisa y actualizada. Sin embargo:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>No garantizamos la exactitud de todos los cálculos</li>
              <li>La legislación puede cambiar sin previo aviso</li>
              <li>Los usuarios son responsables de verificar información crítica</li>
              <li>Recomendamos consultar fuentes oficiales para decisiones importantes</li>
            </ul>
          </div>

          {/* Propiedad Intelectual */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Propiedad Intelectual</h2>
            <p className="text-gray-700 leading-relaxed">
              Todo el contenido de la Calculadora de Finiquito México, incluyendo texto, gráficos, logos, 
              imágenes y software, es propiedad de la Calculadora de Finiquito México o sus proveedores de contenido 
              y está protegido por leyes de derechos de autor internacionales.
            </p>
          </div>

          {/* Modificaciones del Servicio */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modificaciones del Servicio</h2>
            <p className="text-gray-700 leading-relaxed">
              Nos reservamos el derecho de modificar o descontinuar el servicio en cualquier momento, 
              con o sin previo aviso. No seremos responsables por ninguna modificación o descontinuación del servicio.
            </p>
          </div>

          {/* Terminación */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Terminación</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos terminar o suspender tu acceso al servicio en cualquier momento, sin previo aviso, 
              si violas estos Términos de Servicio.
            </p>
          </div>

          {/* Ley Aplicable */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Ley Aplicable</h2>
            <p className="text-gray-700 leading-relaxed">
              Estos Términos de Servicio se rigen por las leyes de México. Cualquier disputa se resolverá 
              en los tribunales competentes de México.
            </p>
          </div>

          {/* Contacto */}
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si tienes preguntas sobre estos Términos de Servicio, contáctanos en:
            </p>
            <p className="text-gray-900 font-semibold">
              Email: <a href="mailto:legal@calculadora-finiquito.mx" className="text-primary hover:underline">
                legal@calculadora-finiquito.mx
              </a>
            </p>
          </div>

          {/* Cambios a los Términos */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Cambios a estos Términos</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar estos Términos de Servicio en cualquier momento. Los cambios entran en vigor 
              cuando se publican en nuestro sitio. Tu uso continuado del servicio constituye aceptación de los términos modificados.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
