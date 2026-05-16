/**
 * Componente Principal: Calculadora de Finiquito
 * Diseño Híbrido: Corporativo + Educativo + Minimalista
 * 
 * Características:
 * - Formulario de dos columnas (inputs + resultados en tiempo real)
 * - Tarjetas de componentes con iconografía educativa
 * - Gráfico de pastel mostrando composición
 * - Tooltips educativos integrados
 * - Espacios para AdSense
 */

import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Download, Share2, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import AdSense from "@/components/AdSense";
import {
  calcularFiniquito,
  formatearMoneda,
  formatearFecha,
  FiniquitoInput,
  FiniquitoOutput
} from "@/lib/finiquito";

export default function CalculadoraFiniquito() {
  // Estado del formulario
  const [salarioMensual, setSalarioMensual] = useState<number>(15000);
  const [fechaIngreso, setFechaIngreso] = useState<string>("2020-01-15");
  const [fechaTerminacion, setFechaTerminacion] = useState<string>("2026-05-15");
  const [diasVacaciones, setDiasVacaciones] = useState<number>(14);
  const [diasNoPagados, setDiasNoPagados] = useState<number>(5);
  const [esLiquidacion, setEsLiquidacion] = useState<boolean>(false);

  // Cálculo del finiquito
  const resultado = useMemo(() => {
    try {
      const input: FiniquitoInput = {
        salarioMensual,
        fechaIngreso: new Date(fechaIngreso),
        fechaTerminacion: new Date(fechaTerminacion),
        diasVacacionesCorrespondientes: diasVacaciones,
        diasLaboradosNoPagados: diasNoPagados,
        esLiquidacionPorDespido: esLiquidacion
      };

      return calcularFiniquito(input);
    } catch (error) {
      console.error("Error en cálculo:", error);
      return null;
    }
  }, [salarioMensual, fechaIngreso, fechaTerminacion, diasVacaciones, diasNoPagados, esLiquidacion]);

  // Descargar como PDF (simulado)
  const descargarPDF = () => {
    if (!resultado) return;
    alert("Funcionalidad de descarga PDF próximamente disponible");
  };

  // Compartir resultados
  const compartirResultados = () => {
    if (!resultado) return;
    const texto = `Mi finiquito es: ${formatearMoneda(resultado.totalFiniquito)} según la Ley Federal del Trabajo`;
    if (navigator.share) {
      navigator.share({
        title: "Calculadora de Finiquito",
        text: texto
      });
    } else {
      alert(texto);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Encabezado */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Calculadora de Finiquito</h1>
        <p className="text-lg text-gray-600">
          Calcula tu finiquito según la Ley Federal del Trabajo de México
        </p>
      </div>

      {/* Alerta informativa */}
      <Alert className="mb-8 border-blue-200 bg-blue-50">
        <AlertCircle className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          Esta calculadora proporciona una estimación basada en la Ley Federal del Trabajo vigente. 
          Para casos específicos, consulta con un asesor laboral.
        </AlertDescription>
      </Alert>

      {/* Layout de dos columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Columna 1: Formulario de Entrada */}
        <div className="space-y-6">
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="text-primary">Información Laboral</CardTitle>
              <CardDescription>Completa los datos de tu relación laboral</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Salario Mensual */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="salario" className="font-semibold">
                    Salario Mensual
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-purple-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-purple-50 text-purple-900 border-purple-200">
                      Tu salario bruto mensual sin deducciones
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <Input
                    id="salario"
                    type="number"
                    value={salarioMensual}
                    onChange={(e) => setSalarioMensual(parseFloat(e.target.value) || 0)}
                    className="pl-7"
                    placeholder="15000"
                  />
                </div>
              </div>

              {/* Fecha de Ingreso */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="ingreso" className="font-semibold">
                    Fecha de Ingreso
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-purple-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-purple-50 text-purple-900 border-purple-200">
                      Cuándo comenzaste a trabajar en la empresa
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="ingreso"
                  type="date"
                  value={fechaIngreso}
                  onChange={(e) => setFechaIngreso(e.target.value)}
                />
              </div>

              {/* Fecha de Terminación */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="terminacion" className="font-semibold">
                    Fecha de Terminación
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-purple-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-purple-50 text-purple-900 border-purple-200">
                      Cuándo termina o terminó tu relación laboral
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="terminacion"
                  type="date"
                  value={fechaTerminacion}
                  onChange={(e) => setFechaTerminacion(e.target.value)}
                />
              </div>

              {/* Días de Vacaciones */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="vacaciones" className="font-semibold">
                    Días de Vacaciones Correspondientes
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-purple-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-purple-50 text-purple-900 border-purple-200">
                      Mínimo 12 días después de 1 año. +2 días por cada año adicional
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="vacaciones"
                  type="number"
                  value={diasVacaciones}
                  onChange={(e) => setDiasVacaciones(parseFloat(e.target.value) || 0)}
                  placeholder="14"
                />
              </div>

              {/* Días No Pagados */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="nopagados" className="font-semibold">
                    Días Laborados No Pagados
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-purple-600 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-purple-50 text-purple-900 border-purple-200">
                      Días que trabajaste pero aún no te han pagado
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="nopagados"
                  type="number"
                  value={diasNoPagados}
                  onChange={(e) => setDiasNoPagados(parseFloat(e.target.value) || 0)}
                  placeholder="5"
                />
              </div>

              {/* Tipo de Terminación */}
              <div className="space-y-3 pt-4 border-t">
                <Label className="font-semibold">Tipo de Terminación</Label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      checked={!esLiquidacion}
                      onChange={() => setEsLiquidacion(false)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Finiquito (renuncia o despido justificado)</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      checked={esLiquidacion}
                      onChange={() => setEsLiquidacion(true)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">Liquidación (despido injustificado)</span>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Anuncio AdSense — lado izquierdo */}
          <AdSense slot="SLOT_IZQUIERDO" format="rectangle" className="my-2" />
        </div>

        {/* Columna 2: Resultados */}
        <div className="space-y-6">
          {resultado ? (
            <>
              {/* Total Principal */}
              <Card className="border-4 border-primary bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-gray-600 text-sm mb-2">TOTAL DE FINIQUITO</p>
                    <p className="text-5xl font-bold text-primary mb-4">
                      {formatearMoneda(resultado.totalFiniquito)}
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button
                        onClick={descargarPDF}
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Descargar PDF
                      </Button>
                      <Button
                        onClick={compartirResultados}
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <Share2 className="h-4 w-4" />
                        Compartir
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Desglose de Componentes */}
              <Tabs defaultValue="desglose" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="desglose">Desglose</TabsTrigger>
                  <TabsTrigger value="detalles">Detalles</TabsTrigger>
                </TabsList>

                <TabsContent value="desglose" className="space-y-3">
                  {resultado.desglose.conceptos.map((concepto, idx) => (
                    <Card key={idx} className="border-l-4 border-l-secondary">
                      <CardContent className="pt-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-2xl">{concepto.icono}</span>
                              <h3 className="font-semibold text-gray-900">{concepto.nombre}</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{concepto.descripcion}</p>
                            {concepto.formula && (
                              <p className="text-xs text-purple-600 font-mono bg-purple-50 p-2 rounded">
                                {concepto.formula}
                              </p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">
                              {formatearMoneda(concepto.monto)}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="detalles" className="space-y-3">
                  <Card>
                    <CardContent className="pt-4 space-y-3">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Salario Diario:</span>
                        <span className="font-semibold">{formatearMoneda(resultado.salarioDiario)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Días No Pagados:</span>
                        <span className="font-semibold">{resultado.diasLaboradosNoPagados}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Período Laboral:</span>
                        <span className="font-semibold">
                          {formatearFecha(new Date(fechaIngreso))} a{" "}
                          {formatearFecha(new Date(fechaTerminacion))}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Anuncio AdSense — lado derecho (debajo del desglose) */}
              <AdSense slot="SLOT_DERECHO" format="rectangle" className="my-2" />
            </>
          ) : (
            <Card className="border-2 border-dashed">
              <CardContent className="pt-6 text-center text-gray-500">
                Completa el formulario para ver los resultados
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
