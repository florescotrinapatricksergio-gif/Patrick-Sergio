import { useState } from "react";
import { Heart, MapPin, GraduationCap, Building2 } from "lucide-react";

interface TopNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function TopNav({ activeSection, onNavigate }: TopNavProps) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-stone-200 shadow-xs">
      
      {/* Primary White Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Lockup: Logo Initials + Name */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center font-sans text-sm shadow-xs">
            DM
          </div>
          <span className="font-bold text-stone-900 text-lg tracking-tight whitespace-nowrap">
            CardioDieta Tarapoto
          </span>
        </div>

        {/* Center Nav Links matching image.png */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-medium text-stone-600">
          <button
            onClick={() => onNavigate("importancia")}
            className={`hover:text-stone-900 transition-colors whitespace-nowrap ${
              activeSection === "importancia" ? "text-sky-600 font-semibold" : ""
            }`}
          >
            Importancia
          </button>
          <button
            onClick={() => onNavigate("tesis-int")}
            className={`hover:text-stone-900 transition-colors whitespace-nowrap ${
              activeSection === "tesis-int" ? "text-sky-600 font-semibold" : ""
            }`}
          >
            Tesis Int.
          </button>
          <button
            onClick={() => onNavigate("tesis-nac")}
            className={`hover:text-stone-900 transition-colors whitespace-nowrap ${
              activeSection === "tesis-nac" ? "text-sky-600 font-semibold" : ""
            }`}
          >
            Tesis Nac.
          </button>
          <button
            onClick={() => onNavigate("causas")}
            className={`hover:text-stone-900 transition-colors whitespace-nowrap ${
              activeSection === "causas" ? "text-sky-600 font-semibold" : ""
            }`}
          >
            Causas
          </button>
          <button
            onClick={() => onNavigate("consecuencias")}
            className={`hover:text-stone-900 transition-colors whitespace-nowrap ${
              activeSection === "consecuencias" ? "text-sky-600 font-semibold" : ""
            }`}
          >
            Consecuencias
          </button>
          <button
            onClick={() => onNavigate("referencias")}
            className={`hover:text-stone-900 transition-colors whitespace-nowrap ${
              activeSection === "referencias" ? "text-sky-600 font-semibold" : ""
            }`}
          >
            Referencias
          </button>
          <button
            onClick={() => onNavigate("integrantes")}
            className={`hover:text-stone-900 transition-colors whitespace-nowrap ${
              activeSection === "integrantes" ? "text-sky-600 font-semibold" : ""
            }`}
          >
            Integrantes
          </button>
        </nav>

        {/* Right Location Tag */}
        <div className="flex items-center gap-1.5 text-xs text-stone-500 font-sans whitespace-nowrap shrink-0">
          <MapPin className="w-3.5 h-3.5 text-stone-400" />
          <span>Tarapoto · San Martín</span>
        </div>

      </div>

      {/* Secondary Navy Banner Bar (exact match to image.png header strip) */}
      <div className="bg-[#0f2438] text-stone-300 text-[11px] font-sans border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-sky-400 font-medium">
              <GraduationCap className="w-3.5 h-3.5" />
              Universidad César Vallejo
            </span>
            <span className="text-stone-500">|</span>
            <span className="text-stone-300 hidden sm:inline">
              Hospital II-2 Tarapoto / Red Asistencial San Martín - Perú
            </span>
            <span className="text-stone-300 sm:hidden">
              Hospital Tarapoto - San Martín
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="text-stone-300">Habilidades Comunicativas</span>
            <span className="text-stone-500">|</span>
            <span className="text-sky-300 font-semibold">Grupo 5</span>
          </div>

        </div>
      </div>

    </header>
  );
}
