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

import { useState, useMemo, useEffect } from "react";
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
  const [salarioInput, setSalarioInput] = useState<string>("15,000");
  const [fechaIngreso, setFechaIngreso] = useState<string>("2020-01-15");
  const [fechaTerminacion, setFechaTerminacion] = useState<string>("2026-05-15");
  const [diasVacaciones, setDiasVacaciones] = useState<number>(14);
  const [diasNoPagados, setDiasNoPagados] = useState<number>(5);
  const [esLiquidacion, setEsLiquidacion] = useState<boolean>(false);
  const [mensajeCompartir, setMensajeCompartir] = useState<string>("");

  // Leer parámetros de URL para compartir
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("s")) {
      const num = parseFloat(params.get("s")!);
      setSalarioMensual(num);
      setSalarioInput(new Intl.NumberFormat("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num));
    }
    if (params.get("i")) setFechaIngreso(params.get("i")!);
    if (params.get("t")) setFechaTerminacion(params.get("t")!);
    if (params.get("v")) setDiasVacaciones(parseInt(params.get("v")!));
    if (params.get("n")) setDiasNoPagados(parseInt(params.get("n")!));
    if (params.get("l")) setEsLiquidacion(params.get("l") === "1");
  }, []);

  // Manejar cambio en el campo de salario
  const handleSalarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/[^0-9.]/g, "");
    // Evitar ceros al inicio (excepto "0.")
    raw = raw.replace(/^0+(?=\d)/, "");
    // Máximo un punto decimal
    const partes = raw.split(".");
    if (partes.length > 2) raw = partes[0] + "." + partes.slice(1).join("");

    const num = parseFloat(raw) || 0;
    setSalarioMensual(num);

    // Formatear miles mientras se escribe
    if (raw === "" || raw === ".") {
      setSalarioInput(raw);
    } else if (raw.endsWith(".") || /\.\d*$/.test(raw)) {
      // Si está escribiendo decimales, no reformatear
      const intPart = parseInt(partes[0] || "0").toLocaleString("es-MX");
      setSalarioInput(partes.length > 1 ? `${intPart}.${partes[1]}` : raw);
    } else {
      setSalarioInput(parseInt(raw).toLocaleString("es-MX"));
    }
  };

  const handleSalarioBlur = () => {
    setSalarioInput(
      new Intl.NumberFormat("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(salarioMensual)
    );
  };

  const handleSalarioFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

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

  // Descargar como PDF
  const descargarPDF = () => {
    if (!resultado) return;
    const win = window.open("", "_blank");
    if (!win) return;

    const tipo = esLiquidacion ? "Liquidación por despido injustificado" : "Finiquito (renuncia / despido justificado)";
    const conceptosHTML = resultado.desglose.conceptos.map(c => `
      <tr>
        <td style="padding:10px 8px; border-bottom:1px solid #e5e7eb;">
          <strong>${c.nombre}</strong><br>
          <span style="font-size:12px; color:#6b7280;">${c.descripcion}</span><br>
          ${c.formula ? `<span style="font-size:11px; color:#7c3aed; font-family:monospace;">${c.formula}</span>` : ""}
        </td>
        <td style="padding:10px 8px; border-bottom:1px solid #e5e7eb; text-align:right; font-weight:bold; color:#1d4ed8; white-space:nowrap;">
          ${formatearMoneda(c.monto)}
        </td>
      </tr>
    `).join("");

    win.document.write(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Finiquito - ${formatearMoneda(resultado.totalFiniquito)}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, Helvetica, sans-serif; color: #111827; padding: 40px; max-width: 700px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #1d4ed8, #7c3aed); color: white; padding: 32px; border-radius: 12px; margin-bottom: 32px; }
    .header h1 { font-size: 22px; margin-bottom: 4px; }
    .header p { font-size: 13px; opacity: 0.85; }
    .total-box { background: #eff6ff; border: 2px solid #1d4ed8; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 32px; }
    .total-box .label { font-size: 12px; text-transform: uppercase; color: #6b7280; letter-spacing: 1px; }
    .total-box .amount { font-size: 42px; font-weight: 900; color: #1d4ed8; margin: 8px 0; }
    .section-title { font-size: 15px; font-weight: bold; color: #374151; margin-bottom: 12px; border-bottom: 2px solid #e5e7eb; padding-bottom: 6px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 32px; }
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 32px; font-size: 13px; }
    .info-item { background: #f9fafb; padding: 10px 12px; border-radius: 6px; }
    .info-item .key { color: #6b7280; margin-bottom: 2px; }
    .info-item .val { font-weight: bold; color: #111827; }
    .footer { font-size: 11px; color: #9ca3af; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 16px; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <div class="header">
    <h1>💼 Calculadora de Finiquito México</h1>
    <p>Cálculo basado en la Ley Federal del Trabajo • finiquito.xyz</p>
  </div>

  <div class="total-box">
    <div class="label">Total de Finiquito</div>
    <div class="amount">${formatearMoneda(resultado.totalFiniquito)}</div>
    <div style="font-size:13px; color:#374151;">${tipo}</div>
  </div>

  <div class="section-title">Información Laboral</div>
  <div class="info-grid">
    <div class="info-item"><div class="key">Salario Mensual</div><div class="val">${formatearMoneda(salarioMensual)}</div></div>
    <div class="info-item"><div class="key">Salario Diario</div><div class="val">${formatearMoneda(resultado.salarioDiario)}</div></div>
    <div class="info-item"><div class="key">Fecha de Ingreso</div><div class="val">${formatearFecha(new Date(fechaIngreso))}</div></div>
    <div class="info-item"><div class="key">Fecha de Terminación</div><div class="val">${formatearFecha(new Date(fechaTerminacion))}</div></div>
    <div class="info-item"><div class="key">Días No Pagados</div><div class="val">${diasNoPagados} días</div></div>
    <div class="info-item"><div class="key">Días de Vacaciones</div><div class="val">${diasVacaciones} días</div></div>
  </div>

  <div class="section-title">Desglose del Finiquito</div>
  <table>
    <tbody>${conceptosHTML}</tbody>
    <tfoot>
      <tr style="background:#eff6ff;">
        <td style="padding:14px 8px; font-size:16px; font-weight:900; color:#1d4ed8;">TOTAL</td>
        <td style="padding:14px 8px; font-size:20px; font-weight:900; color:#1d4ed8; text-align:right;">${formatearMoneda(resultado.totalFiniquito)}</td>
      </tr>
    </tfoot>
  </table>

  <div class="footer">
    Este documento es una estimación basada en la Ley Federal del Trabajo de México. No constituye asesoría legal.<br>
    Generado en finiquito.xyz • ${new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
  </div>

  <script>window.onload = () => { window.print(); }<\/script>
</body>
</html>`);
    win.document.close();
  };

  // Compartir resultados con enlace
  const compartirResultados = () => {
    if (!resultado) return;
    const params = new URLSearchParams({
      s: salarioMensual.toString(),
      i: fechaIngreso,
      t: fechaTerminacion,
      v: diasVacaciones.toString(),
      n: diasNoPagados.toString(),
      l: esLiquidacion ? "1" : "0"
    });
    const url = `${window.location.origin}/?${params.toString()}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setMensajeCompartir("¡Enlace copiado!");
        setTimeout(() => setMensajeCompartir(""), 3000);
      });
    } else if (navigator.share) {
      navigator.share({ title: "Mi Finiquito", url });
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
                    type="text"
                    inputMode="decimal"
                    value={salarioInput}
                    onChange={handleSalarioChange}
                    onBlur={handleSalarioBlur}
                    onFocus={handleSalarioFocus}
                    className="pl-7"
                    placeholder="15,000.00"
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
                    <div className="flex gap-2 justify-center flex-wrap">
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
                        {mensajeCompartir || "Compartir"}
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
