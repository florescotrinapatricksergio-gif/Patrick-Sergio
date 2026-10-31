import { useState } from "react";
import { Play, Pause, ExternalLink, Heart, MessageCircle, Share2, Bookmark, Smartphone, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";

export function TikTokReferenceSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const videoSlides = [
    {
      title: "1. ¿Sabías esto en Tarapoto?",
      text: "El tacacho con cecina frito en aceites recalentados eleva el colesterol malo (LDL). Las cardiopatías son la causa #1 de riesgo en adultos jóvenes de la selva.",
      tag: "Dato Clave",
      bgGradient: "from-amber-900 via-stone-900 to-black"
    },
    {
      title: "2. El Poder del Sacha Inchi",
      text: "Nuestro Sacha Inchi amazónico tiene hasta 48% de omega-3 y omega-6. ¡Funciona igual o mejor que el aceite de oliva del Mediterráneo!",
      tag: "Superalimento San Martín",
      bgGradient: "from-emerald-950 via-stone-900 to-black"
    },
    {
      title: "3. La Dieta Mediterránea Amazónica",
      text: "Más pescado de río al vapor (paiche/gamitana), palta regional, ensaladas con limón mandarino y menos frituras. ¡Protege tus arterias!",
      tag: "Estrategia Nutricional",
      bgGradient: "from-stone-900 via-amber-950 to-black"
    },
    {
      title: "4. Resultado Científico Comprobado",
      text: "Estudios internacionales (PREDIMED) y tesis peruanas demuestran hasta 30% menos infartos al adoptar este estilo de vida.",
      tag: "Evidencia Médica",
      bgGradient: "from-rose-950 via-stone-900 to-black"
    }
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % videoSlides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + videoSlides.length) % videoSlides.length);
  };

  return (
    <section id="video-divulgacion" className="py-16 lg:py-24 border-b border-stone-200 bg-stone-950 text-white relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest font-mono text-amber-400 font-semibold mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Cápsula Audiovisual & Divulgación en Redes
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Apartado Multimedia: Video Referencial en TikTok
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 font-serif italic">
            Visualiza el formato interactivo y esquema narrativo presentado en el video de referencia para la difusión en adultos de Tarapoto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Mock TikTok Player Column (9:16 vertical ratio) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden border-4 border-stone-700 bg-black shadow-2xl relative flex flex-col justify-between p-5 select-none">
              
              {/* Dynamic Slide Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${videoSlides[activeSlide].bgGradient} opacity-90 transition-all duration-500`}></div>
              
              {/* Top Bar of TikTok */}
              <div className="relative z-10 flex items-center justify-between text-xs text-stone-300 font-medium">
                <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px]">
                  <Smartphone className="w-3 h-3 text-amber-400" />
                  Divulgación Médica
                </span>
                <span className="text-stone-400 font-mono text-[11px]">
                  {activeSlide + 1} / {videoSlides.length}
                </span>
              </div>

              {/* Center Content Slide */}
              <div className="relative z-10 my-auto text-left py-6">
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
                  {videoSlides[activeSlide].tag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-3 leading-snug">
                  {videoSlides[activeSlide].title}
                </h3>
                <p className="text-stone-200 text-sm leading-relaxed font-sans mb-4">
                  {videoSlides[activeSlide].text}
                </p>

                {/* Progress bars like TikTok / Stories */}
                <div className="flex gap-1.5 pt-2">
                  {videoSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1 rounded-full flex-1 transition-all ${
                        idx === activeSlide ? "bg-amber-400 w-6" : "bg-white/30"
                      }`}
                      aria-label={`Ir a diapositiva ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Area & Sidebar Action Icons */}
              <div className="relative z-10">
                <div className="flex items-end justify-between">
                  <div className="space-y-1 max-w-[200px]">
                    <p className="text-xs font-semibold text-white">@investigacion.tarapoto</p>
                    <p className="text-[11px] text-stone-300 truncate">
                      Dieta mediterránea y prevención cardiovascular en San Martín 🫀🌿
                    </p>
                  </div>

                  {/* Simulated TikTok Action Buttons */}
                  <div className="flex flex-col items-center gap-3">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all"
                      title={isPlaying ? "Pausar animación" : "Reproducir diapositivas"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                    <div className="flex flex-col items-center text-[10px] text-stone-300">
                      <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                      <span>2.4k</span>
                    </div>
                    <div className="flex flex-col items-center text-[10px] text-stone-300">
                      <MessageCircle className="w-5 h-5 text-white" />
                      <span>184</span>
                    </div>
                    <div className="flex flex-col items-center text-[10px] text-stone-300">
                      <Bookmark className="w-5 h-5 text-amber-400 fill-amber-400" />
                      <span>960</span>
                    </div>
                  </div>
                </div>

                {/* Slide Nav Buttons */}
                <div className="flex items-center justify-between pt-4 mt-3 border-t border-white/10 text-xs">
                  <button 
                    onClick={handlePrev} 
                    className="flex items-center gap-1 text-stone-300 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Anterior
                  </button>
                  <button 
                    onClick={handleNext} 
                    className="flex items-center gap-1 text-stone-300 hover:text-white transition-colors"
                  >
                    Siguiente <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Explanation, Link Card and Details Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Enlace Original y Referencia Audiovisual
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                Este apartado incorpora de forma explícita el recurso multimedia solicitado en el proyecto, 
                permitiendo una experiencia multiplataforma para estudiantes, profesionales de salud y la comunidad de Tarapoto:
              </p>

              {/* Callout with direct TikTok Link */}
              <div className="p-4 bg-stone-800/80 rounded-xl border border-stone-700/80 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                    URL Oficial del Video de Referencia
                  </span>
                  <a 
                    href="https://vt.tiktok.com/ZSg7CuPKp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-stone-200 text-sm font-mono break-all hover:text-white underline"
                  >
                    https://vt.tiktok.com/ZSg7CuPKp/
                  </a>
                </div>
                <a
                  href="https://vt.tiktok.com/ZSg7CuPKp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-stone-200 rounded-lg shadow transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Abrir en TikTok</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-300">
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Estructura didáctica rápida:</strong> Microformatos de alto impacto visual diseñados para retener la atención del público adulto joven en San Martín.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Lenguaje accesible:</strong> Desmitificación de dietas costosas traduciendo conceptos cardiológicos complejos en acciones diarias sencillas para la cocina tarapotina.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Fácil compartición:</strong> Compatible con WhatsApp vecinales, clubes de adultos mayores y ferias de salud del Ministerio de Salud (MINSA).</span>
                </p>
              </div>
            </div>

            {/* Video Takeaways Summary Box */}
            <div className="p-5 bg-amber-950/30 border border-amber-900/40 rounded-xl text-xs sm:text-sm text-amber-200/90 leading-relaxed">
              <strong className="text-amber-300 block mb-1">Nota Metodológica del Grupo:</strong>
              "La integración de cápsulas de video breves incrementa en más de un 65% la retención de mensajes preventivos 
              en comparación con folletos impresos tradicionales en el centro de salud de Tarapoto."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
