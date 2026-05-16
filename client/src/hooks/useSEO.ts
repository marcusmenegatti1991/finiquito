/**
 * Hook para gestionar SEO por página
 * Actualiza título, descripción y canonical dinámicamente
 */
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

const BASE_TITLE = "Calculadora de Finiquito México";
const BASE_URL = "https://finiquito.xyz";

export function useSEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    // Actualizar título
    document.title = `${title} | ${BASE_TITLE}`;

    // Actualizar description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    // Actualizar OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", `${title} | ${BASE_TITLE}`);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonical ? `${BASE_URL}${canonical}` : BASE_URL);

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag)
      canonicalTag.setAttribute("href", canonical ? `${BASE_URL}${canonical}` : BASE_URL);
  }, [title, description, canonical]);
}
