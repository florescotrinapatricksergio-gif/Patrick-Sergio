import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          <div className="md:col-span-5 space-y-3">
            <h3 className="font-serif text-xl font-bold text-white tracking-wide">
              Latidos Mediterráneos en Tarapoto
            </h3>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Iniciativa académica de investigación sobre la prevención primaria de cardiopatías 
              en adultos mediante la adaptación del modelo mediterráneo a la biodiversidad alimentaria de Tarapoto y San Martín.
            </p>
            <p className="text-stone-500 font-mono text-[11px]">
              Tarapoto · San Martín · Perú · 2024
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Secciones del Proyecto
            </p>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#importancia" className="hover:text-amber-400 transition-colors">Importancia Cardiovascular</a></li>
              <li><a href="#tesis-nacional" className="hover:text-amber-400 transition-colors">Tesis Nacional (Perú/Tarapoto)</a></li>
              <li><a href="#tesis-internacional" className="hover:text-amber-400 transition-colors">Tesis Internacional (PREDIMED)</a></li>
              <li><a href="#causas" className="hover:text-amber-400 transition-colors">Causas & Etiología</a></li>
              <li><a href="#consecuencias" className="hover:text-amber-400 transition-colors">Consecuencias Clínicas</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Recursos de Difusión
            </p>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#video-divulgacion" className="hover:text-amber-400 transition-colors">Apartado Video en TikTok</a></li>
              <li><a href="#video-equipo" className="hover:text-amber-400 transition-colors">Integrantes (6 Investigadores)</a></li>
              <li><a href="#referencias" className="hover:text-amber-400 transition-colors">Referencias Bibliográficas APA</a></li>
            </ul>
            <div className="pt-2 text-[11px] text-stone-500 italic">
              Proyecto de divulgación biomédica sin fines comerciales.
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-stone-500 text-[11px]">
            © {new Date().getFullYear()} Latidos Mediterráneos en Tarapoto. Desarrollado para la salud cardiovascular de San Martín.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
