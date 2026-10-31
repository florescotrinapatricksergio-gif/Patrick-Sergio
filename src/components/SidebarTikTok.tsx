import { useState } from "react";
import { ExternalLink, Play, Pause, Smartphone, Heart, MessageCircle, Share2, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";

export function SidebarTikTok() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const videoPoints = [
    {
      title: "1. Cardiopatías en Tarapoto",
      text: "El tacacho con cecina en aceites recalentados eleva el colesterol LDL. ¡Primera causa de riesgo en adultos jóvenes!",
      tag: "Epidemiología"
    },
    {
      title: "2. Sacha Inchi Amazónico",
      text: "Con 48% de omega-3 y omega-6, iguala y supera la protección endotelial del aceite de oliva mediterráneo.",
      tag: "Superalimento"
    },
    {
      title: "3. Prevención Comprobada",
      text: "El estudio PREDIMED demostró hasta 30% menos infartos al incorporar grasas monoinsaturadas y pescados de río.",
      tag: "Clínica"
    }
  ];

  return (
    <div className="bg-stone-900 text-stone-200 rounded-2xl border border-stone-800 p-5 shadow-xs mt-6">
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-4">
        <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
          <Smartphone className="w-3.5 h-3.5" />
          RECURSO AUDIOVISUAL TIKTOK
        </span>
        <span className="text-[10px] bg-red-600/30 text-red-300 border border-red-500/40 px-2 py-0.5 rounded font-mono">
          Enlace Verificado
        </span>
      </div>

      <h4 className="text-base font-bold text-white mb-2 leading-snug">
        Cápsula de Divulgación Rápida
      </h4>
      <p className="text-xs text-stone-400 mb-4 leading-relaxed font-sans">
        Video referencial del esquema de investigación para redes sociales y comunidad de Tarapoto:
      </p>

      {/* Main Action Link Callout */}
      <div className="p-3 bg-stone-800/90 rounded-xl border border-stone-700 mb-4">
        <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-1">
          Link directo de TikTok
        </span>
        <a
          href="https://vt.tiktok.com/ZSg7CuPKp/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 font-mono text-xs break-all hover:text-sky-300 underline block mb-3"
        >
          https://vt.tiktok.com/ZSg7CuPKp/
        </a>

        <a
          href="https://vt.tiktok.com/ZSg7CuPKp/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold text-black bg-white hover:bg-stone-200 rounded-lg shadow-sm transition-colors uppercase tracking-wider"
        >
          <span>Abrir video en TikTok</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Simulated Interactive Reel Card */}
      <div className="bg-black/60 rounded-xl p-3.5 border border-stone-800 relative">
        <div className="flex items-center justify-between text-[11px] text-stone-400 mb-2">
          <span className="font-semibold text-white">@tarapoto.saludcardio</span>
          <span className="font-mono text-[10px]">Punto {currentCard + 1} de 3</span>
        </div>

        <span className="inline-block text-[10px] font-mono text-amber-300 bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 rounded mb-1.5">
          {videoPoints[currentCard].tag}
        </span>
        <h5 className="text-xs font-bold text-white mb-1">
          {videoPoints[currentCard].title}
        </h5>
        <p className="text-[11px] text-stone-300 leading-snug mb-3">
          {videoPoints[currentCard].text}
        </p>

        {/* Mini Controls */}
        <div className="flex items-center justify-between pt-2 border-t border-stone-800/80 text-[11px]">
          <button
            onClick={() => setCurrentCard((prev) => (prev - 1 + 3) % 3)}
            className="text-stone-400 hover:text-white flex items-center"
          >
            <ChevronLeft className="w-3.5 h-3.5" /> Ant.
          </button>
          
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i === currentCard ? "bg-amber-400" : "bg-stone-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentCard((prev) => (prev + 1) % 3)}
            className="text-stone-400 hover:text-white flex items-center"
          >
            Sig. <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}
