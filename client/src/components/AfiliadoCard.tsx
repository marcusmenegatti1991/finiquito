/**
 * Tarjeta de curso/afiliado. Renderiza un afiliado de client/src/config/afiliados.ts
 * con el marcado correcto para SEO/compliance:
 *   - rel="sponsored" (enlace pagado, lo pide Google)
 *   - target="_blank" + noopener
 *   - aviso de transparencia visible
 *
 * Uso en un artículo:  <AfiliadoCard id="hotmart-ahorrar" />
 */

import { afiliadoPorId, AVISO_AFILIADO } from "@/config/afiliados";

export default function AfiliadoCard({ id }: { id: string }) {
  const a = afiliadoPorId(id);
  if (!a) return null;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 my-6">
      <div className="flex items-start gap-4">
        <span className="text-4xl flex-shrink-0">{a.badge ?? "🎓"}</span>
        <div className="flex-1">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
            Curso recomendado · {a.plataforma}
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">{a.nombre}</h3>
          <p className="text-gray-700 text-sm mb-4">{a.descripcion}</p>
          <a
            href={a.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Ver el curso →
          </a>
          <p className="text-xs text-gray-500 mt-3 italic">{AVISO_AFILIADO}</p>
        </div>
      </div>
    </div>
  );
}
