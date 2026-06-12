/**
 * Página Principal: Calculadora de Finiquito México
 */

import { useState } from "react";
import CalculadoraFiniquito from "@/components/CalculadoraFiniquito";
import AdSense from "@/components/AdSense";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function Home() {
  useSEO({
    title: "Calculadora de Finiquito México 2026 — Cálculo Rápido y Preciso",
    description:
      "Calcula tu finiquito en México según la Ley Federal del Trabajo. Rápido, preciso y 100% gratuito. Incluye aguinaldo, vacaciones, prima vacacional e indemnización por despido.",
    canonical: "/",
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems = [
    {
      pregunta: "¿Qué es el finiquito?",
      respuesta:
        "El finiquito es la remuneración que el empleador debe entregar a un trabajador al concluir la relación laboral. Incluye adeudos pendientes y prestaciones proporcionales como aguinaldo, vacaciones y prima vacacional."
    },
    {
      pregunta: "¿Cuál es la diferencia entre finiquito y liquidación?",
      respuesta:
        "El finiquito aplica en todos los casos de terminación. La liquidación procede únicamente cuando la terminación es por causa imputable al empleador (despido injustificado) e incluye indemnización adicional."
    },
    {
      pregunta: "¿Cuánto es el aguinaldo proporcional?",
      respuesta:
        "El aguinaldo mínimo legal es de 15 días de salario. Si no completaste el año, se calcula proporcionalmente: (15 ÷ 365) × Días Laborados × Salario Diario."
    },
    {
      pregunta: "¿Cuántas vacaciones me corresponden?",
      respuesta:
        "Mínimo 12 días después de 1 año de trabajo. Se incrementan 2 días por cada año adicional. Si terminas antes del año, se calcula proporcionalmente."
    },
    {
      pregunta: "¿Qué es la prima de antigüedad?",
      respuesta:
        "Es una prestación equivalente a 12 días de salario por cada año de servicio. En finiquito aplica solo si tienes más de 15 años. En liquidación por despido injustificado aplica desde el primer año."
    },
    {
      pregunta: "¿Qué es la prima vacacional?",
      respuesta:
        "Es un adicional equivalente al 25% del salario correspondiente a los días de vacaciones. Se calcula sobre las vacaciones proporcionales."
    },
    {
      pregunta: "¿Cuánto es la indemnización por despido injustificado?",
      respuesta:
        "La indemnización es de 3 meses de salario más 20 días de salario por cada año de servicio. Se suma al finiquito y a la prima de antigüedad."
    },
    {
      pregunta: "¿Esta calculadora es legal?",
      respuesta:
        "Sí, se basa en la Ley Federal del Trabajo vigente en México. Sin embargo, esta es una estimación. Para casos específicos o complejos, consulta con un asesor laboral certificado."
    }
  ];

  const beneficios = [
    { icono: "⚡", titulo: "Cálculo Rápido", descripcion: "Obtén tu finiquito en segundos sin complicaciones" },
    { icono: "✅", titulo: "100% Conforme a la Ley", descripcion: "Basado en la Ley Federal del Trabajo vigente" },
    { icono: "🔒", titulo: "Transparencia Total", descripcion: "Ve exactamente cómo se calcula cada componente" },
    { icono: "📱", titulo: "Accesible en Cualquier Dispositivo", descripcion: "Funciona perfectamente en móvil, tablet y desktop" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section — CSS gradient sin imagen externa */}
      <section className="relative w-full bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
            ⚖️ Conforme a la Ley Federal del Trabajo 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Calcula tu Finiquito<br className="hidden md:block" /> en México
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Gratis, rápido y 100% preciso. Aguinaldo, vacaciones, prima vacacional e indemnización según la LFT.
          </p>
          <a
            href="#calculadora"
            className="inline-block bg-white text-blue-700 font-bold text-lg py-4 px-10 rounded-xl hover:bg-blue-50 transition shadow-lg"
          >
            Calcular mi Finiquito →
          </a>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/70" />
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            ¿Por qué usar nuestra calculadora?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{beneficio.icono}</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{beneficio.titulo}</h3>
                  <p className="text-sm text-gray-600">{beneficio.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Banner */}
      <div className="max-w-5xl mx-auto px-4 py-4">
        <AdSense slot="SLOT_BANNER_HOME" format="horizontal" />
      </div>

      {/* Calculadora Principal */}
      <section id="calculadora" className="py-16 bg-white">
        <CalculadoraFiniquito />
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <Card
                key={idx}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <HelpCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <CardTitle className="text-lg text-left">{item.pregunta}</CardTitle>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform flex-shrink-0 ${
                        expandedFaq === idx ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardHeader>
                {expandedFaq === idx && (
                  <CardContent className="pt-0">
                    <p className="text-gray-700 leading-relaxed">{item.respuesta}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Información Legal */}
      <section className="py-16 bg-blue-50 border-t-4 border-primary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Información Importante</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Fundamento Legal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700">
                <p><strong>Aguinaldo:</strong> Artículo 87 LFT</p>
                <p><strong>Vacaciones:</strong> Artículos 76, 79, 80 LFT (reforma "Vacaciones Dignas")</p>
                <p><strong>Prima Vacacional:</strong> Artículo 80 LFT (mínimo 25%)</p>
                <p><strong>Prima de Antigüedad:</strong> Artículo 162 LFT (12 días por año)</p>
                <p><strong>Despido Injustificado:</strong> Artículos 48 y 50 LFT</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Aviso Legal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700">
                <p>
                  Esta calculadora proporciona una estimación basada en la Ley Federal del Trabajo
                  vigente. No constituye asesoría legal profesional.
                </p>
                <p>
                  Para casos específicos, complejos o con circunstancias especiales, consulta con un
                  asesor laboral certificado o abogado especializado.
                </p>
                <p>
                  Los cálculos pueden variar según convenios colectivos, contratos individuales o
                  situaciones particulares.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">Calculadora de Finiquito</h3>
              <p className="text-sm">
                Herramienta gratuita para calcular tu finiquito según la Ley Federal del Trabajo de México.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Enlaces Útiles</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-white transition">Sobre nosotros</a></li>
                <li><a href="/blog" className="hover:text-white transition">Blog y guías</a></li>
                <li><a href="/privacy" className="hover:text-white transition">Política de privacidad</a></li>
                <li><a href="/terms" className="hover:text-white transition">Términos de servicio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contacto</h4>
              <p className="text-sm">¿Preguntas? Contáctanos en:</p>
              <p className="text-sm text-gray-400">info@calculadora-finiquito.mx</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>© 2026 Calculadora de Finiquito. Todos los derechos reservados. | Basado en la Ley Federal del Trabajo de México</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
