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

      {/* ¿Y ahora qué hago con ese dinero? — Artículos destacados */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              💡 Guías para tu dinero
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              ¿Y ahora qué hago con ese dinero?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Calculaste tu finiquito. El siguiente paso es no perderlo. Lee nuestras guías para tomar decisiones inteligentes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Artículo 2 */}
            <a href="/blog/que-hacer-con-tu-finiquito" className="group block">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6">
                  <span className="text-5xl">💡</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    Finanzas Personales
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2 group-hover:text-blue-600 transition-colors">
                    5 Decisiones Inteligentes con tu Finiquito
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Fondo de emergencia, pago de deudas, inversión y más. El plan paso a paso para no desperdiciar tu finiquito.
                  </p>
                  <span className="text-blue-600 text-sm font-semibold group-hover:underline">
                    Leer guía →
                  </span>
                </div>
              </div>
            </a>
            {/* Artículo 3 */}
            <a href="/blog/donde-invertir-tu-finiquito" className="group block">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-green-600 to-teal-600 p-6">
                  <span className="text-5xl">📈</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                    Inversiones
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2 group-hover:text-green-600 transition-colors">
                    Dónde Invertir tu Finiquito para que No Pierda Valor
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    CETES, Nu, GBM+ y más. Comparativa de opciones con rendimiento real para distintos plazos y perfiles.
                  </p>
                  <span className="text-green-600 text-sm font-semibold group-hover:underline">
                    Leer guía →
                  </span>
                </div>
              </div>
            </a>
            {/* Artículo 4 */}
            <a href="/blog/mejores-tarjetas-sin-empleo" className="group block">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-slate-600 to-blue-800 p-6">
                  <span className="text-5xl">💳</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-slate-600 bg-slate-50 px-2 py-1 rounded">
                    Tarjetas de Crédito
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2 group-hover:text-slate-600 transition-colors">
                    Mejores Tarjetas si Te Quedaste Sin Empleo
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Nu, Stori, Klar. Las tarjetas sin comprobante de ingresos para mantener tu historial crediticio activo.
                  </p>
                  <span className="text-slate-600 text-sm font-semibold group-hover:underline">
                    Leer guía →
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="text-center mt-8">
            <a href="/blog" className="inline-block border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-600 hover:text-white transition">
              Ver todos los artículos →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 classNa