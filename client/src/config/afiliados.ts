/**
 * Afiliados — FUENTE ÚNICA de los enlaces de afiliado del sitio.
 *
 * Todos los links viven aquí. Los artículos los renderizan con <AfiliadoCard>
 * (client/src/components/AfiliadoCard.tsx), que ya pone rel="sponsored",
 * target="_blank" y el aviso de transparencia. Para agregar/cambiar un afiliado,
 * edita SOLO este archivo.
 *
 * Categorías → dónde encaja cada uno:
 *   - "finanzas"      → Qué hacer con tu finiquito / Dónde invertir
 *   - "empleabilidad" → cursos de habilidades para conseguir mejor empleo
 *   - "ingresos"      → oficios / negocios para generar ingresos propios
 */

export type CategoriaAfiliado = "finanzas" | "empleabilidad" | "ingresos";

export interface Afiliado {
  /** id estable para referenciarlo desde un artículo */
  id: string;
  nombre: string;
  /** 1 línea honesta y orientada al beneficio (nada de promesas mágicas) */
  descripcion: string;
  /** link de afiliado (el hoplink lleva tu ID de afiliado) */
  url: string;
  plataforma: string;
  categoria: CategoriaAfiliado;
  /** emoji/insignia corta para la tarjeta */
  badge?: string;
}

/** Aviso de transparencia (obligatorio y bueno para la confianza + Google). */
export const AVISO_AFILIADO =
  "Enlace de afiliado: si compras, podemos recibir una comisión sin costo extra para ti.";

export const AFILIADOS: Afiliado[] = [
  {
    id: "hotmart-ahorrar",
    nombre: "Cómo Ahorrar sin Dinero",
    descripcion:
      "Estrategias para ordenar tus gastos y empezar a ahorrar aunque el presupuesto esté apretado — útil justo cuando estás entre empleos.",
    url: "https://go.hotmart.com/O106860165L",
    plataforma: "Hotmart",
    categoria: "finanzas",
    badge: "💰",
  },
  {
    id: "hotmart-pestanas",
    nombre: "Extensiones de Pestañas de Cero a Experta",
    descripcion:
      "Aprende un oficio con demanda para generar ingresos por tu cuenta o desde casa, sin necesidad de un empleo formal.",
    url: "https://go.hotmart.com/S106860213U?ap=2e52", // oferta de $25 USD (mejor conversión)
    plataforma: "Hotmart",
    categoria: "ingresos",
    badge: "💅",
  },
];

/** Devuelve los afiliados de una categoría (para armar secciones en artículos). */
export function afiliadosDe(categoria: CategoriaAfiliado): Afiliado[] {
  return AFILIADOS.filter((a) => a.categoria === categoria);
}

/** Busca un afiliado por id. */
export function afiliadoPorId(id: string): Afiliado | undefined {
  return AFILIADOS.find((a) => a.id === id);
}
