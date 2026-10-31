import { Heart, Compass, BookOpen, Users, ArrowDown, Sparkles } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onOpenCalculator: () => void;
}

export function Hero({ onExploreClick, onOpenCalculator }: HeroProps) {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Sub-header Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-200/80 text-xs text-stone-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-900 tracking-wide uppercase">TEMA CIENTÍFICO</span>
            <span aria-hidden="true">·</span>
            <span>Prevención Cardiovascular en la Amazonía Peruana</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Edición Académica 2024</span>
            <span aria-hidden="true">·</span>
            <span>Tarapoto, San Martín</span>
            <span aria-hidden="true">·</span>
            <span>6 Integrantes</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <p className="text-xs uppercase tracking-widest font-semibold text-amber-800 mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              Tesis y Divulgación en Salud Pública
            </p>

            {/* Creative 4-word title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12] mb-6 text-balance">
              Latidos Mediterráneos en Tarapoto
            </h1>

            {/* Thematic core subtitle */}
            <p className="text-lg sm:text-xl text-stone-700 font-serif italic mb-6 leading-relaxed">
              Dieta mediterránea en la prevención de cardiopatías en adultos de Tarapoto
            </p>

            <p className="text-stone-600 text-base leading-relaxed mb-8 max-w-2xl">
              Un análisis multidimensional sobre cómo los principios cardioprotectores del patrón mediterráneo 
              —adaptados estratégicamente a la vasta riqueza nutricional de la selva de San Martín (como el sacha inchi, 
              palta regional y frutas nativas)— representan la intervención más eficaz y sostenible para frenar el 
              avance del infarto agudo y las patologías coronarias en adultos tarapotinos.
            </p>

            {/* Action CTA & Quick Jump */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-amber-900 hover:bg-amber-800 rounded-lg shadow-sm transition-all"
              >
                <span>Leer Investigación Completa</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-all"
              >
                <Heart className="w-4 h-4 text-red-600" />
                <span>Test de Adherencia PREDIMED</span>
              </button>
            </div>

            {/* Research Key Metrics (tabular-nums, clean text) */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-stone-200">
              <div>
                <p className="font-mono text-2xl lg:text-3xl font-bold text-stone-900 tabular-nums">-30%</p>
                <p className="text-xs text-stone-500 font-medium mt-1">Riesgo de Eventos Cardiovasculares</p>
              </div>
              <div>
                <p className="font-mono text-2xl lg:text-3xl font-bold text-stone-900 tabular-nums">14</p>
                <p className="text-xs text-stone-500 font-medium mt-1">Criterios Nutricionales Validados</p>
              </div>
              <div>
                <p className="font-mono text-2xl lg:text-3xl font-bold text-stone-900 tabular-nums">100%</p>
                <p className="text-xs text-stone-500 font-medium mt-1">Sinergia con Productos Locales</p>
              </div>
            </div>

          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 group">
              <img
                src="/src/assets/images/hero_mediterranean_tarapoto_1793400749276.jpg"
                alt="Fusión de dieta mediterránea con ingredientes de Tarapoto San Martín"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-4/3 lg:aspect-4/4 object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="p-4 bg-stone-900/90 text-stone-200 text-xs flex items-center justify-between">
                <div>
                  <span className="font-medium text-white block">Sinergia Agroalimentaria</span>
                  <span className="text-stone-400">Aceite de oliva, Sacha Inchi y biodiversidad de San Martín</span>
                </div>
                <span className="text-[11px] font-mono uppercase bg-stone-800 px-2 py-1 rounded text-amber-300">
                  Tarapoto
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
