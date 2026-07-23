/**
 * Google Analytics 4 — medición de tráfico y valor por visita.
 *
 * Se activa SOLO si defines la variable de entorno `VITE_GA_ID` con tu
 * Measurement ID (formato "G-XXXXXXXXXX"). Sin ella, todo es no-op: seguro en
 * desarrollo y no rompe nada si aún no creaste la propiedad de GA4.
 *
 * Dónde ponerla:
 *   - Local:      client/.env.local  →  VITE_GA_ID=G-XXXXXXXXXX
 *   - Producción: Cloudflare Pages → Settings → Environment variables
 *
 * Como es un SPA (wouter), GA4 no ve los cambios de ruta por sí solo: por eso
 * configuramos con send_page_view:false y enviamos page_view a mano en cada
 * navegación (ver <Analytics/> en App.tsx).
 */

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;

/** Inserta el script de gtag una sola vez. No-op si no hay VITE_GA_ID. */
export function initAnalytics(): void {
  if (initialized || !GA_ID || typeof window === "undefined") return;
  initialized = true;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // GA espera el objeto `arguments` tal cual, no un array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // send_page_view:false → los page_view los mandamos nosotros por ruta.
  window.gtag("config", GA_ID, { send_page_view: false });
}

/** Envía un page_view manual (para navegación SPA). No-op si GA no está activo. */
export function trackPageView(pagePath: string): void {
  if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** true si GA4 está configurado (hay VITE_GA_ID). */
export const analyticsEnabled = Boolean(GA_ID);
