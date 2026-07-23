/**
 * Manifiesto de rutas — FUENTE de verdad para el PRERENDER de SEO.
 *
 * Lo consume scripts/prerender.mjs para generar un index.html propio por ruta
 * (head + JSON-LD). El sitemap NO se genera aquí: lo sirve la Cloudflare Function
 * functions/sitemap.xml.js (mantener ambos en sync al agregar artículos).
 *
 * Al agregar un artículo nuevo:
 *   1) créalo y agrégalo a client/src/App.tsx (ruta + componente),
 *   2) agrégalo a functions/sitemap.xml.js,
 *   3) agrégalo aquí (title/description = los mismos que su useSEO()).
 *
 * useSEO() añade " | Calculadora de Finiquito México" al título en runtime;
 * el prerender hace lo mismo (BASE_TITLE).
 */

export const BASE_URL = "https://finiquito.xyz";
export const BASE_TITLE = "Calculadora de Finiquito México";

// Fecha de última revisión del sitio (para dateModified del JSON-LD).
const SITE_UPDATED = "2026-07-23";

/**
 * type:
 *   "home"    → conserva el JSON-LD escrito a mano en index.html (WebApplication + FAQ)
 *   "article" → BlogPosting + BreadcrumbList (Inicio › Blog › Artículo)
 *   "page"    → WebPage + BreadcrumbList
 */
export const ROUTES = [
  {
    path: "/",
    canonical: "/",
    type: "home",
    title: "Calculadora de Finiquito México 2026 — Cálculo Rápido y Preciso",
    description:
      "Calcula tu finiquito en México según la Ley Federal del Trabajo. Rápido, preciso y 100% gratuito. Incluye aguinaldo, vacaciones, prima vacacional e indemnización por despido.",
  },
  {
    path: "/blog",
    canonical: "/blog",
    type: "page",
    title: "Blog — Guías sobre Finiquito y Derechos Laborales en México",
    description:
      "Artículos y guías sobre cómo calcular finiquito, diferencia entre finiquito y liquidación, vacaciones dignas y derechos laborales en México 2026.",
  },
  {
    path: "/about",
    canonical: "/about",
    type: "page",
    title: "Sobre Nosotros — Calculadora de Finiquito México",
    description:
      "Conoce la misión de finiquito.xyz: democratizar el acceso a información precisa sobre finiquitos laborales en México, gratis y conforme a la Ley Federal del Trabajo.",
  },
  {
    path: "/privacy",
    canonical: "/privacy",
    type: "page",
    title: "Política de Privacidad",
    description:
      "Conoce cómo protegemos tu información en finiquito.xyz. No almacenamos datos personales. Tu privacidad es nuestra prioridad.",
  },
  {
    path: "/terms",
    canonical: "/terms",
    type: "page",
    title: "Términos de Servicio",
    description:
      "Términos y condiciones de uso de finiquito.xyz. Herramienta gratuita para calcular finiquito en México según la Ley Federal del Trabajo.",
  },

  // ── Artículos ──────────────────────────────────────────────────────────────
  {
    path: "/blog/como-calcular-finiquito",
    canonical: "/blog/como-calcular-finiquito",
    type: "article",
    datePublished: "2026-05-25",
    title: "Cómo Calcular tu Finiquito Paso a Paso en México 2026",
    description:
      "Aprende a calcular tu finiquito en México con fórmulas exactas según la Ley Federal del Trabajo 2026. Incluye aguinaldo, vacaciones, prima vacacional y más.",
  },
  {
    path: "/blog/finiquito-vs-liquidacion",
    canonical: "/blog/finiquito-vs-liquidacion",
    type: "article",
    datePublished: "2026-05-25",
    title: "Diferencia entre Finiquito y Liquidación en México 2026",
    description:
      "¿Cuál es la diferencia entre finiquito y liquidación en México? Aprende cuándo aplica cada uno, qué incluye y cómo calcularlo según la Ley Federal del Trabajo.",
  },
  {
    path: "/blog/vacaciones-dignas-reforma-2023",
    canonical: "/blog/vacaciones-dignas-reforma-2023",
    type: "article",
    datePublished: "2026-05-25",
    title: "Vacaciones Dignas 2023: Qué Cambió en la Ley Federal del Trabajo",
    description:
      "La reforma de Vacaciones Dignas 2023 duplicó los días mínimos de vacaciones en México. Descubre cuántos días te corresponden según tu antigüedad y cómo afecta tu finiquito.",
  },
  {
    path: "/blog/prima-de-antiguedad",
    canonical: "/blog/prima-de-antiguedad",
    type: "article",
    datePublished: "2026-05-25",
    title: "Prima de Antigüedad en México 2026: Cuándo te Corresponde y Cómo Calcularla",
    description:
      "Todo sobre la prima de antigüedad en México: cuándo aplica, cómo calcularla con el tope de 2 UMA, y en qué casos se paga al renunciar o al ser despedido.",
  },
  {
    path: "/blog/cuanto-corresponde-si-renuncio",
    canonical: "/blog/cuanto-corresponde-si-renuncio",
    type: "article",
    datePublished: "2026-05-25",
    title: "¿Cuánto me Corresponde si Renuncio? Guía por Años de Servicio 2026",
    description:
      "Descubre exactamente cuánto dinero te corresponde al renunciar en México según tu antigüedad. Ejemplos reales con 1, 2, 3, 5 y 10 años de servicio.",
  },
  {
    path: "/blog/aguinaldo-proporcional-finiquito",
    canonical: "/blog/aguinaldo-proporcional-finiquito",
    type: "article",
    datePublished: "2026-05-25",
    title: "Aguinaldo Proporcional 2026: Cómo Calcularlo en tu Finiquito",
    description:
      "Todo sobre el aguinaldo proporcional en México 2026: fórmula, ejemplos, cuándo se paga en el finiquito y qué dice el Artículo 87 de la Ley Federal del Trabajo.",
  },
  {
    path: "/blog/que-hacer-con-tu-finiquito",
    canonical: "/blog/que-hacer-con-tu-finiquito",
    type: "article",
    datePublished: "2026-06-13",
    title: "Qué Hacer con tu Finiquito: 5 Decisiones Inteligentes (2026)",
    description:
      "Recibiste tu finiquito y no sabes qué hacer con ese dinero. Aquí te explicamos las 5 mejores decisiones financieras para proteger y hacer crecer tu finiquito en México.",
  },
  {
    path: "/blog/donde-invertir-tu-finiquito",
    canonical: "/blog/donde-invertir-tu-finiquito",
    type: "article",
    datePublished: "2026-06-13",
    title: "Dónde Invertir tu Finiquito para que No Pierda Valor (2026)",
    description:
      "Guía práctica para invertir tu finiquito en México en 2026. CETES, GBM+, Nu, fondos indexados y más opciones con rendimientos reales y sin riesgo exagerado.",
  },
  {
    path: "/blog/mejores-tarjetas-sin-empleo",
    canonical: "/blog/mejores-tarjetas-sin-empleo",
    type: "article",
    datePublished: "2026-06-13",
    title: "Mejores Tarjetas de Crédito sin Comprobante de Ingresos México 2026",
    description:
      "¿Te quedaste sin empleo? Estas tarjetas de crédito no requieren comprobante de ingresos. Mantén tu historial crediticio mientras buscas trabajo.",
  },
  {
    path: "/blog/cursos-para-generar-ingresos",
    canonical: "/blog/cursos-para-generar-ingresos",
    type: "article",
    datePublished: "2026-07-23",
    title: "Cómo Generar Ingresos por tu Cuenta tras un Despido: Oficios y Cursos 2026",
    description:
      "Perdiste tu empleo y quieres generar ingresos sin depender de otro trabajo. Oficios y cursos con demanda para empezar por tu cuenta o desde casa en México, paso a paso.",
  },
  {
    path: "/blog/cuanto-tiempo-para-pagar-finiquito",
    canonical: "/blog/cuanto-tiempo-para-pagar-finiquito",
    type: "article",
    datePublished: "2026-07-05",
    title: "¿Cuánto Tiempo Tiene la Empresa para Pagar el Finiquito? México 2026",
    description:
      "La ley mexicana establece plazos claros para el pago del finiquito. Conoce tus derechos, qué pasa si la empresa no paga a tiempo y cómo reclamar ante la CFCRL.",
  },
  {
    path: "/blog/finiquito-con-embarazo",
    canonical: "/blog/finiquito-con-embarazo",
    type: "article",
    datePublished: "2026-07-05",
    title: "Finiquito con Embarazo: Tus Derechos Laborales en México 2026",
    description:
      "¿Estás embarazada y te despidieron o quieres renunciar? Conoce tus derechos: protección LFT, subsidio IMSS, cuánto te corresponde y qué hacer paso a paso.",
  },
  {
    path: "/blog/como-impugnar-finiquito-incorrecto",
    canonical: "/blog/como-impugnar-finiquito-incorrecto",
    type: "article",
    datePublished: "2026-07-05",
    title: "Cómo Impugnar un Finiquito Incorrecto en México 2026",
    description:
      "¿Tu finiquito tiene errores o te pagaron menos de lo que corresponde? Aprende a identificar errores, negociar, acudir a la CFCRL y demandar si es necesario.",
  },
  {
    path: "/blog/carta-de-renuncia-mexico",
    canonical: "/blog/carta-de-renuncia-mexico",
    type: "article",
    datePublished: "2026-07-05",
    title: "Carta de Renuncia en México 2026: Cómo Redactarla y Qué Incluir",
    description:
      "Modelo de carta de renuncia en México 2026 conforme a la LFT. Qué debe incluir, cuántos días de aviso dar, si es obligatoria y cómo proteger tu finiquito.",
  },
  {
    path: "/blog/finiquito-y-seguro-social-imss",
    canonical: "/blog/finiquito-y-seguro-social-imss",
    type: "article",
    datePublished: "2026-07-05",
    title: "Finiquito y Seguro Social IMSS: Qué Pasa al Dejar tu Trabajo México 2026",
    description:
      "¿Qué pasa con tu IMSS cuando cobras tu finiquito? Vigencia del seguro, AFORE, crédito INFONAVIT y pasos para proteger tus derechos de seguridad social en México.",
  },
  {
    path: "/blog/despido-durante-incapacidad",
    canonical: "/blog/despido-durante-incapacidad",
    type: "article",
    datePublished: "2026-07-05",
    title: "¿Me Pueden Despedir Estando de Incapacidad? Tus Derechos México 2026",
    description:
      "La ley protege al trabajador durante una incapacidad por enfermedad o accidente. Conoce si pueden despedirte, cuánto te corresponde y cómo defenderte en México.",
  },
  {
    path: "/blog/acta-administrativa-finiquito",
    canonical: "/blog/acta-administrativa-finiquito",
    type: "article",
    datePublished: "2026-07-05",
    title: "Acta Administrativa: Qué Es y Cómo Afecta tu Finiquito en México 2026",
    description:
      "¿Te levantaron un acta administrativa? Aprende qué es, cuándo es válida, cuándo no, cómo responder y si afecta el monto de tu finiquito en México.",
  },
];

/**
 * Construye los bloques <script type="application/ld+json"> para una ruta.
 * Devuelve null para la home (conserva el JSON-LD escrito a mano en index.html).
 */
export function buildJsonLd(route) {
  if (route.type === "home") return null;

  const url = BASE_URL + route.canonical;
  const fullTitle = `${route.title} | ${BASE_TITLE}`;

  const crumbs = [{ name: "Inicio", item: `${BASE_URL}/` }];
  if (route.canonical.startsWith("/blog")) {
    crumbs.push({ name: "Blog", item: `${BASE_URL}/blog` });
  }
  if (route.type === "article") {
    crumbs.push({ name: route.title, item: url });
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };

  const primary =
    route.type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: fullTitle,
          description: route.description,
          url,
          inLanguage: "es-MX",
          datePublished: route.datePublished || SITE_UPDATED,
          dateModified: SITE_UPDATED,
          author: { "@type": "Organization", name: "finiquito.xyz", url: BASE_URL },
          publisher: { "@type": "Organization", name: "finiquito.xyz", url: BASE_URL },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
        }
      : {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: fullTitle,
          description: route.description,
          url,
          inLanguage: "es-MX",
        };

  return [primary, breadcrumb]
    .map((obj) => `<script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n</script>`)
    .join("\n");
}
