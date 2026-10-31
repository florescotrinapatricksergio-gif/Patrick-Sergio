import { Check, Edit3, ZoomIn } from "lucide-react";
import { SectionContent } from "../data/blogData.ts";

interface SectionCardProps {
  section: SectionContent;
  onImageClick: (imageUrl: string, caption: string) => void;
  onEditSectionText: (section: SectionContent) => void;
  onCitationClick: (citationId: number) => void;
}

export function SectionCard({
  section,
  onImageClick,
  onEditSectionText,
  onCitationClick,
}: SectionCardProps) {
  // Helper to parse citations in text e.g. [1], [2], [1][2]
  const renderParagraphWithCitations = (text: string) => {
    const parts = text.split(/(\[\d+\])/g);
    return parts.map((part, index) => {
      const match = part.match(/\[(\d+)\]/);
      if (match) {
        const citationId = parseInt(match[1], 10);
        return (
          <button
            key={index}
            onClick={() => onCitationClick(citationId)}
            className="inline-flex items-center justify-center text-[10px] font-mono font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 hover:text-sky-900 border border-sky-200 rounded px-1 py-0.2 mx-0.5 align-super cursor-pointer transition-colors"
            title={`Ver referencia bibliográfica [${citationId}]`}
          >
            [{citationId}]
          </button>
        );
      }
      return part;
    });
  };

  return (
    <article
      id={section.id}
      className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs mb-8 transition-all hover:border-stone-300"
    >
      {/* Top Header of Card matching image.png */}
      <div className="flex items-center justify-between gap-4 pb-3 border-b border-stone-100 text-xs">
        
        {/* Pill Tag with Check Icon */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-800 font-semibold tracking-wide text-xs">
          <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
          <span>{section.badge}</span>
        </div>

        {/* Right Step Label */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onEditSectionText(section)}
            className="inline-flex items-center gap-1 text-[11px] text-stone-500 hover:text-sky-700 hover:bg-stone-50 px-2 py-0.5 rounded transition-colors"
            title="Editar o pegar texto exacto del PDF para este punto"
          >
            <Edit3 className="w-3 h-3" />
            <span>Editar texto</span>
          </button>
          <span className="font-mono text-stone-400 text-xs">{section.step}</span>
        </div>

      </div>

      {/* Main Section Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mt-4 mb-4 leading-snug">
        {section.title}
      </h2>

      {/* Text Paragraphs */}
      <div className="space-y-4 text-stone-700 text-sm sm:text-[15px] leading-relaxed font-sans mb-8">
        {section.paragraphs.map((p, idx) => (
          <p key={idx} className="text-justify">
            {renderParagraphWithCitations(p)}
          </p>
        ))}
      </div>

      {/* Sub-bar: Evidencia Fotográfica */}
      <div className="pt-4 border-t border-stone-100 mb-4 flex items-center justify-between text-xs text-stone-500 font-sans">
        <span className="font-mono uppercase tracking-wider text-[11px] font-semibold text-stone-500">
          EVIDENCIA FOTOGRÁFICA (FIG. {section.fig1.num} Y FIG. {section.fig2.num})
        </span>
        <span className="text-[11px] text-sky-700 hidden sm:inline">
          Clic en cualquier imagen para ampliar
        </span>
      </div>

      {/* 2 Images Side-by-Side matching image.png */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        
        {/* Figure 1 */}
        <figure
          onClick={() => onImageClick(section.fig1.imageUrl, section.fig1.title)}
          className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-stone-50 transition-all hover:shadow-md"
        >
          <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
            <img
              src={section.fig1.imageUrl}
              alt={section.fig1.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            {/* Fig. X badge in top-left */}
            <div className="absolute top-2.5 left-2.5 bg-stone-900/85 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded font-semibold">
              Fig. {section.fig1.num}
            </div>
            {/* Zoom icon in bottom-right */}
            <div className="absolute bottom-2.5 right-2.5 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-3.5 h-3.5" />
            </div>
          </div>
          <figcaption className="p-3 text-xs">
            <strong className="block text-stone-900 font-semibold mb-0.5">
              {section.fig1.title}
            </strong>
            <p className="text-stone-500 text-[11px] leading-snug line-clamp-2">
              {section.fig1.description}
            </p>
          </figcaption>
        </figure>

        {/* Figure 2 */}
        <figure
          onClick={() => onImageClick(section.fig2.imageUrl, section.fig2.title)}
          className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-stone-50 transition-all hover:shadow-md"
        >
          <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
            <img
              src={section.fig2.imageUrl}
              alt={section.fig2.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            {/* Fig. X badge in top-left */}
            <div className="absolute top-2.5 left-2.5 bg-stone-900/85 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded font-semibold">
              Fig. {section.fig2.num}
            </div>
            {/* Zoom icon in bottom-right */}
            <div className="absolute bottom-2.5 right-2.5 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-3.5 h-3.5" />
            </div>
          </div>
          <figcaption className="p-3 text-xs">
            <strong className="block text-stone-900 font-semibold mb-0.5">
              {section.fig2.title}
            </strong>
            <p className="text-stone-500 text-[11px] leading-snug line-clamp-2">
              {section.fig2.description}
            </p>
          </figcaption>
        </figure>

      </div>

    </article>
  );
}
