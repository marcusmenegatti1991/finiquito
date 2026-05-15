/**
 * Página: Sobre Nosotros
 * Información sobre la calculadora y su propósito
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-blue-50">
            Conoce la historia y misión detrás de la Calculadora de Finiquito México
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {/* Misión */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La <strong>Calculadora de Finiquito México</strong> existe con un propósito claro: 
              democratizar el acceso a información precisa sobre finiquitos laborales en México.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Creemos que todo trabajador tiene derecho a entender exactamente cuánto le corresponde 
              recibir al terminar su relación laboral, sin necesidad de pagar por asesoría costosa. 
              Nuestra herramienta es gratuita, transparente y 100% conforme a la Ley Federal del Trabajo.
            </p>
          </div>

          {/* Visión */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser la herramienta de referencia en México para cálculos laborales precisos y accesibles. 
              Queremos que trabajadores y empleadores confíen en nuestras calculadoras para tomar 
              decisiones informadas sobre sus derechos y obligaciones laborales.
            </p>
          </div>

          {/* Valores */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  titulo: "Transparencia",
                  descripcion: "Cada cálculo es visible y explicado paso a paso"
                },
                {
                  titulo: "Precisión",
                  descripcion: "Basados en la Ley Federal del Trabajo vigente"
                },
                {
                  titulo: "Accesibilidad",
                  descripcion: "Gratuito y disponible para todos"
                },
                {
                  titulo: "Educación",
                  descripcion: "Explicamos conceptos complejos de forma simple"
                },
                {
                  titulo: "Confianza",
                  descripcion: "Información legal y actualizada"
                },
                {
                  titulo: "Innovación",
                  descripcion: "Mejoramos continuamente nuestras herramientas"
                }
              ].map((valor, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{valor.titulo}</h3>
                        <p className="text-gray-600">{valor.descripcion}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Por qué confiar en nosotros */}
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-primary">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por qué Confiar en Nosotros?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Basado en la Ley Federal del Trabajo</p>
                  <p className="text-gray-600">Todos nuestros cálculos cumplen con la legislación laboral mexicana vigente</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Completamente Gratuito</p>
                  <p className="text-gray-600">No hay costos ocultos ni suscripciones. Acceso total sin pagar</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Transparencia Total</p>
                  <p className="text-gray-600">Ves exactamente cómo se calcula cada componente de tu finiquito</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Actualizado Regularmente</p>
                  <p className="text-gray-600">Mantenemos nuestras fórmulas y información al día con cambios legales</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Interfaz Intuitiva</p>
                  <p className="text-gray-600">Diseñada para ser fácil de usar, incluso sin conocimientos técnicos</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Descargo de responsabilidad */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Descargo de Responsabilidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aunque nos esforzamos por proporcionar información precisa y actualizada, esta calculadora 
              proporciona <strong>estimaciones</strong> basadas en la Ley Federal del Trabajo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Para casos específicos, complejos o con circunstancias especiales, recomendamos consultar 
              con un asesor laboral certificado o abogado especializado. Los cálculos pueden variar según 
              convenios colectivos, contratos individuales u otras situaciones particulares.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Calcular tu Finiquito?</h2>
          <p className="text-xl text-blue-50 mb-8">
            Usa nuestra calculadora gratuita y obtén resultados precisos en segundos
          </p>
          <a
            href="/"
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition"
          >
            Ir a la Calculadora
          </a>
        </div>
      </section>
    </div>
  );
}
