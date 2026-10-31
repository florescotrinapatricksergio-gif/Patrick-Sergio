import { useState } from "react";
import { Copy, Check, ExternalLink, BookMarked } from "lucide-react";
import { CitationItem, INITIAL_CITATIONS } from "../data/blogData.ts";

interface SidebarReferenciasProps {
  citations?: CitationItem[];
  highlightedId?: number | null;
}

export function SidebarReferencias({
  citations = INITIAL_CITATIONS,
  highlightedId,
}: SidebarReferenciasProps) {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (citation: CitationItem) => {
    const vancouverText = `${citation.id}. ${citation.sourceName}. ${citation.title}. ${citation.publication}. ${citation.locationYear}. Disponible en: ${citation.url}`;
    navigator.clipboard.writeText(vancouverText);
    setCopiedId(citation.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <aside id="referencias" className="bg-white rounded-2xl border border-stone-200/90 p-5 sm:p-6 shadow-xs">
      
      {/* Top Header matching image.png */}
      <div className="pb-4 border-b border-stone-100 mb-4">
        <span className="text-[11px] font-mono uppercase tracking-wider text-sky-700 font-semibold block mb-1">
          VI. FUENTES ACADÉMICAS
        </span>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-stone-900 tracking-tight">
            Referencias Bibliográficas
          </h3>
          <span className="text-[11px] font-sans text-stone-400">
            Formato Vancouver
          </span>
        </div>
        <p className="text-[11px] text-stone-500 font-sans mt-2 leading-relaxed">
          Fuentes indexadas y tesis universitarias que respaldan la investigación cardiológica en Tarapoto (Consulta: 28 de octubre de 2026):
        </p>
      </div>

      {/* List of Citation Cards matching image.png */}
      <div className="space-y-3">
        {citations.map((c) => {
          const isHighlighted = highlightedId === c.id;

          return (
            <div
              key={c.id}
              id={`citation-${c.id}`}
              className={`p-3.5 rounded-xl border transition-all ${
                isHighlighted
                  ? "bg-amber-50/80 border-amber-400 ring-2 ring-amber-300/40"
                  : "bg-stone-50/80 border-stone-200 hover:border-stone-300"
              }`}
            >
              {/* Top Row: Number Badge + Source Name + Copy Icon */}
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-sky-700 text-white font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                    {c.id}
                  </div>
                  <span className="font-bold text-stone-900 text-xs leading-snug">
                    {c.sourceName}
                  </span>
                </div>

                <button
                  onClick={() => handleCopy(c)}
                  className="p-1 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded transition-colors shrink-0"
                  title="Copiar referencia en formato Vancouver"
                >
                  {copiedId === c.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Title & Publication details */}
              <p className="text-xs text-stone-800 font-sans font-medium mb-1 leading-snug">
                {c.title}
              </p>
              <p className="text-[11px] text-stone-500 leading-tight mb-2 font-sans">
                {c.publication}. {c.locationYear}
              </p>

              {/* Bottom Row: Link + Year badge */}
              <div className="flex items-center justify-between text-[11px] pt-1 border-t border-stone-200/60">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-900 font-medium"
                >
                  <span>Abrir fuente oficial</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <span className="font-mono text-[10px] text-stone-400 bg-stone-200/60 px-1.5 py-0.5 rounded">
                  {c.year}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </aside>
  );
}
