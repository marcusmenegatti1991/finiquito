/**
 * Página: Política de Privacidad
 * Información sobre cómo protegemos los datos del usuario
 */

import { useSEO } from "@/hooks/useSEO";

export default function PrivacyPolicy() {
  useSEO({
    title: "Política de Privacidad",
    description:
      "Conoce cómo protegemos tu información en finiquito.xyz. No almacenamos datos personales. Tu privacidad es nuestra prioridad.",
    canonical: "/privacy",
  });

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Política de Privacidad</h1>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              En <strong>Calculadora de Finiquito México</strong> ("nosotros", "nuestro" o "la Calculadora"), 
              nos comprometemos a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, 
              usamos, divulgamos y salvaguardamos tu información cuando visitas nuestro sitio web.
            </p>
          </div>

          {/* Información que Recopilamos */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Información que Recopilamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Información que Proporcionas Voluntariamente</h3>
                <p className="text-gray-700">
                  Cuando usas nuestra calculadora, proporcionas información como salario mensual, fechas de trabajo, 
                  etc. <strong>Esta información NO se guarda en nuestros servidores</strong>. Se procesa localmente en 
                  tu navegador y se elimina cuando cierras la página.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Información Automáticamente Recopilada</h3>
                <p className="text-gray-700 mb-2">
                  Recopilamos automáticamente cierta información sobre tu dispositivo y navegación:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Dirección IP</li>
                  <li>Tipo y versión del navegador</li>
                  <li>Sistema operativo</li>
                  <li>Páginas visitadas y tiempo en el sitio</li>
                  <li>Datos de referencia</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Cookies</h3>
                <p className="text-gray-700">
                  Usamos cookies analíticas (como Umami Analytics) para entender cómo usas nuestro sitio. 
                  Estas cookies NO contienen información personal identificable.
                </p>
              </div>
            </div>
          </div>

          {/* Cómo Usamos tu Información */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cómo Usamos tu Información</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Analizar cómo se usa nuestro sitio (análisis anónimo)</li>
              <li>Detectar y prevenir fraude o abuso</li>
              <li>Cumplir con obligaciones legales</li>
              <li>Personalizar tu experiencia</li>
            </ul>
          </div>

          {/* Seguridad de Datos */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Seguridad de Datos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Conexión HTTPS encriptada</li>
              <li>Procesamiento local de datos sensibles (sin enviar a servidores)</li>
              <li>Cumplimiento de estándares de seguridad web</li>
              <li>Auditorías de seguridad regulares</li>
            </ul>
          </div>

          {/* Anuncios */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Anuncios y Publicidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nuestro sitio puede mostrar anuncios de Google AdSense. Google puede usar cookies para mostrar 
              anuncios basados en tus visitas anteriores a nuestro sitio u otros sitios.
            </p>
            <p className="text-gray-700">
              Puedes optar por no participar en publicidad personalizada visitando 
              <a href="https://www.google.com/settings/ads" className="text-primary hover:underline"> 
                {" "}Google Ads Settings
              </a>.
            </p>
          </div>

          {/* Derechos del Usuario */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Tus Derechos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tienes derecho a:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Acceder a la información que tenemos sobre ti</li>
              <li>Corregir información inexacta</li>
              <li>Solicitar la eliminación de tu información</li>
              <li>Optar por no recibir comunicaciones de marketing</li>
              <li>Portabilidad de datos</li>
            </ul>
          </div>

          {/* Enlaces a Terceros */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Enlaces a Terceros</h2>
            <p className="text-gray-700 leading-relaxed">
              Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables de las 
              prácticas de privacidad de estos sitios. Te recomendamos revisar sus políticas de privacidad.
            </p>
          </div>

          {/* Cambios a esta Política */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cambios a esta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cambios 
              significativos publicando la nueva política en nuestro sitio y actualizando la fecha de "Última actualización".
            </p>
          </div>

          {/* Contacto */}
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contacto</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si tienes preguntas sobre esta Política de Privacidad o nuestras prácticas de privacidad, 
              contáctanos en:
            </p>
            <p className="text-gray-900 font-semibold">
              Email: <a href="mailto:privacy@calculadora-finiquito.mx" className="text-primary hover:underline">
                privacy@calculadora-finiquito.mx
              </a>
            </p>
          </div>

          {/* GDPR y Leyes Aplicables */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Leyes Aplicables</h2>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Privacidad se rige por las leyes de México. Si eres residente de la Unión Europea, 
              también tienes derechos bajo el Reglamento General de Protección de Datos (GDPR).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
