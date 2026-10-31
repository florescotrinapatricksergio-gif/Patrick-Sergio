interface HeaderProps {
  onOpenCalculator: () => void;
}

export function Header({ onOpenCalculator }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#inicio" 
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 hover:text-amber-800 transition-colors whitespace-nowrap shrink-0"
        >
          Latidos Mediterráneos
        </a>

        {/* Zone 2: 4–5 single-line text nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a href="#importancia" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Importancia
          </a>
          <a href="#tesis-nacional" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Tesis Nacional
          </a>
          <a href="#tesis-internacional" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Tesis Internacional
          </a>
          <a href="#causas-consecuencias" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Causas & Consecuencias
          </a>
          <a href="#video-equipo" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Video & Equipo
          </a>
          <a href="#referencias" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Referencias
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCalculator}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-amber-900 hover:bg-amber-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            Evaluar Dieta PREDIMED
          </button>
        </div>
      </div>
    </header>
  );
}
