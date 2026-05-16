/**
 * Componente AdSense
 * Inserta unidades de anuncios de Google AdSense.
 *
 * Uso:
 *   <AdSense slot="1234567890" format="auto" />
 *   <AdSense slot="1234567890" format="rectangle" />
 *
 * Notas:
 * - Requiere que el script de AdSense esté cargado en index.html
 * - Los IDs de slot se obtienen en el panel de AdSense:
 *   Anuncios > Unidades de anuncios > Crear nueva unidad
 * - En desarrollo, los anuncios no se muestran (solo el placeholder)
 */

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseProps {
  /** ID del slot de anuncio (data-ad-slot) — obtenido en el panel de AdSense */
  slot: string;
  /** Formato del anuncio */
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  /** Clase CSS adicional para el contenedor */
  className?: string;
  /** Ancho responsivo completo */
  fullWidthResponsive?: boolean;
}

const PUBLISHER_ID = "ca-pub-4441710642783960";
const isDev = import.meta.env.DEV;

export default function AdSense({
  slot,
  format = "auto",
  className = "",
  fullWidthResponsive = true,
}: AdSenseProps) {
  const adRef = useRef<HTMLModElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (isDev || initialized.current) return;
    initialized.current = true;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (e) {
      console.warn("AdSense error:", e);
    }
  }, []);

  if (isDev) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded-lg text-gray-400 text-xs ${className}`}
        style={{ minHeight: 90 }}
      >
        📢 Anuncio AdSense (slot: {slot})
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
