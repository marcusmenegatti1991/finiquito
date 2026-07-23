/**
 * Prerender estático de SEO — se ejecuta DESPUÉS de `vite build`.
 *
 * El sitio es un SPA (React + wouter): sin esto, TODAS las rutas sirven el mismo
 * index.html con el <head> del home, y los crawlers/redes sociales ven siempre el
 * mismo título. Este script clona el index.html ya compilado (con sus assets
 * hasheados) y escribe un index.html propio por ruta con:
 *   - <title>, description, canonical, og:* y twitter:* correctos
 *   - JSON-LD por tipo (BlogPosting / WebPage + BreadcrumbList)
 * y regenera sitemap.xml. El cuerpo sigue siendo el SPA (React lo hidrata al
 * cargar); Google ejecuta JS, así que el contenido se indexa igual, pero ahora
 * cada URL manda su propio head en el HTML inicial.
 *
 * Uso:  node scripts/prerender.mjs
 *       DIST_DIR=/ruta node scripts/prerender.mjs   (para pruebas)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, BASE_URL, BASE_TITLE, buildJsonLd } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const DIST = process.env.DIST_DIR
  ? path.resolve(process.env.DIST_DIR)
  : path.join(projectRoot, "dist", "public");

const templatePath = path.join(DIST, "index.html");
if (!fs.existsSync(templatePath)) {
  console.error(`[prerender] No se encontró ${templatePath}\n              Corre 'vite build' antes del prerender.`);
  process.exit(1);
}
const template = fs.readFileSync(templatePath, "utf8");

// ── helpers de escape ────────────────────────────────────────────────────────
const escAttr = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escText = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Reemplaza el `content` de un <meta name="..."> exacto (si existe).
function setMetaName(html, name, content) {
  const re = new RegExp(`(<meta\\s+name="${name}"\\s+content=")[^"]*(")`, "i");
  return re.test(html) ? html.replace(re, `$1${escAttr(content)}$2`) : html;
}
// Reemplaza el `content` de un <meta property="..."> exacto (si existe).
function setMetaProp(html, prop, content) {
  const re = new RegExp(`(<meta\\s+property="${prop}"\\s+content=")[^"]*(")`, "i");
  return re.test(html) ? html.replace(re, `$1${escAttr(content)}$2`) : html;
}

function renderRoute(route) {
  const fullTitle = `${route.title} | ${BASE_TITLE}`;
  const url = BASE_URL + (route.canonical === "/" ? "/" : route.canonical);
  let html = template;

  // <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escText(fullTitle)}</title>`);

  // meta description + canonical
  html = setMetaName(html, "description", route.description);
  html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/i, `$1${escAttr(url)}$2`);

  // Open Graph
  html = setMetaProp(html, "og:title", fullTitle);
  html = setMetaProp(html, "og:description", route.description);
  html = setMetaProp(html, "og:url", url);

  // Twitter (useSEO no los toca en runtime; aquí sí quedan por ruta)
  html = setMetaName(html, "twitter:title", fullTitle);
  html = setMetaName(html, "twitter:description", route.description);

  // JSON-LD: la home conserva el suyo (buildJsonLd => null); el resto se sustituye.
  const jsonld = buildJsonLd(route);
  if (jsonld) {
    // Quita todos los bloques ld+json existentes (heredados del home)…
    html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, "");
    // …e inyecta los de esta ruta justo antes de </body>.
    html = html.replace(/<\/body>/i, `${jsonld}\n</body>`);
  }

  return html;
}

function outPathFor(canonical) {
  if (canonical === "/") return path.join(DIST, "index.html");
  // "/blog/foo" → dist/public/blog/foo/index.html  (URLs limpias en Cloudflare Pages)
  return path.join(DIST, canonical.replace(/^\//, ""), "index.html");
}

// ── genera un index.html por ruta ────────────────────────────────────────────
let count = 0;
for (const route of ROUTES) {
  const out = outPathFor(route.canonical);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, renderRoute(route), "utf8");
  count++;
  console.log(`[prerender] ${route.canonical.padEnd(38)} → ${path.relative(DIST, out)}`);
}

// El sitemap.xml NO se genera aquí: lo sirve functions/sitemap.xml.js (Cloudflare
// Pages Function), que tiene precedencia sobre archivos estáticos en esa ruta.

console.log(`[prerender] Listo: ${count} páginas pre-renderizadas en ${path.relative(projectRoot, DIST) || DIST}`);
