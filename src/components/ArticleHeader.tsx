import { Share2, Calendar, Clock, MapPin, Sparkles } from "lucide-react";

interface ArticleHeaderProps {
  onShareClick: () => void;
}

export function ArticleHeader({ onShareClick }: ArticleHeaderProps) {
  return (
    <div className="pt-8 pb-6 border-b border-stone-200 mb-8">
      
      {/* Category Kickers in blue/cyan */}
      <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono tracking-wider text-sky-700 uppercase font-semibold mb-3">
        <span>ARTÍCULO CIENTÍFICO</span>
        <span>/</span>
        <span>DIVULGACIÓN UNIVERSITARIA</span>
        <span>/</span>
        <span>PREVENCIÓN CARDIOVASCULAR EN ADULTOS</span>
      </div>

      {/* Main Headline (Max 4 words creative title) */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15] mb-3">
        Latidos Mediterráneos en Tarapoto
      </h1>

      {/* Required Subtitle / Theme */}
      <p className="text-base sm:text-lg text-stone-600 font-sans mb-6">
        Dieta mediterránea en la prevención de cardiopatías en adultos de Tarapoto
      </p>

      {/* Metadata Row & Share Button matching image.png */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500 font-sans pb-2">
        
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold text-stone-700">Universidad César Vallejo</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-stone-400" />
            Octubre 2026
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            8 min de lectura
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="text-sky-700 font-medium">Sede Tarapoto, San Martín</span>
        </div>

        <button
          onClick={onShareClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg shadow-2xs transition-colors shrink-0"
        >
          <Share2 className="w-3.5 h-3.5 text-stone-500" />
          <span>Compartir blog</span>
        </button>

      </div>

    </div>
  );
}
