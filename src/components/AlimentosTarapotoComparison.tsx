import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Leaf, Heart } from "lucide-react";

export function AlimentosTarapotoComparison() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const comparisonData = [
    {
      category: "grasas",
      mediterranean: "Aceite de Oliva Virgen Extra (AOVE)",
      medProperty: "Rico en ácido oleico (omega-9) y polifenoles antiinflamatorios.",
      tarapoto: "Aceite Virgen de Sacha Inchi (Plukenetia volubilis)",
      taraProperty: "Hasta 48% de omega-3 (alfa-linolénico) y 36% omega-6. Prensado en frío en San Martín.",
      synergy: "Reduce el LDL oxidado y mejora la distensibilidad arterial de forma comparable o superior."
    },
    {
      category: "pescados",
      mediterranean: "Pescados Azules (Sardina, Caballa, Atún del Mediterráneo)",
      medProperty: "Altos en EPA y DHA para prevenir arritmias ventriculares.",
      tarapoto: "Pescados de Río Amazónicos (Paiche, Gamitana, Boquichico, Sábalo)",
      taraProperty: "Carnes magras y semigrasas de aguas dulces, ricos en fósforo, zinc y grasas saludables al vapor.",
      synergy: "Al prepararlos en pango o al vapor (evitando freírlos en manteca) proporcionan proteína de alto valor biológico libre de grasas saturadas."
    },
    {
      category: "frutos",
      mediterranean: "Nueces de Castilla, Almendras y Avellanas",
      medProperty: "L-arginina, fibra dietética y tocoferoles cardioprotectores.",
      tarapoto: "Semillas de Sacha Inchi Tostadas y Castaña Amazónica",
      taraProperty: "Concentración inigualable de vitamina E, magnesio y selenio antioxidante.",
      synergy: "Estabiliza la capa endotelial vascular y previene el daño oxidativo inducido por el calor y radiación solar."
    },
    {
      category: "frutas",
      mediterranean: "Cítricos Valencianos, Tomates y Uvas Rojas",
      medProperty: "Licopeno, resveratrol y ácido ascórbico para la pared capilar.",
      tarapoto: "Camu Camu, Limón Mandarino, Cocona y Aguaje",
      taraProperty: "El Camu Camu posee hasta 40 veces más vitamina C que la naranja; el Aguaje aporta fitoestrógenos y carotenoides.",
      synergy: "Neutraliza radicales libres, inhibe la agregación plaquetaria y optimiza la síntesis de colágeno vascular."
    },
    {
      category: "legumbres",
      mediterranean: "Garbanzos, Lentejas y Judías Blancas",
      medProperty: "Almidón resistente y fibra soluble para reducir colesterol luminal.",
      tarapoto: "Frijol Huasca, Chiclayo Verdura y Frijol Regional",
      taraProperty: "Variedades criollas cultivadas en chacras de Lamas y San Martín, ricas en folatos y fibra prebiótica.",
      synergy: "Favorece una microbiota intestinal productora de ácidos grasos de cadena corta (butirato), reduciendo la inflamación sistémica."
    }
  ];

  const filtered = selectedCategory === "all" 
    ? comparisonData 
    : comparisonData.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24 border-b border-stone-200 bg-stone-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-widest font-mono text-amber-800 font-semibold mb-2 flex items-center gap-2">
            <Leaf className="w-3.5 h-3.5 text-emerald-700" />
            Tabla Comparativa & Guía Práctica
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            Dieta Mediterránea vs. Fusión Amazónica Tarapotina
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-serif italic">
            ¿Cómo sustituir los alimentos mediterráneos con la prodigiosa despensa natural de San Martín sin perder la cardioprotección?
          </p>
        </div>

        {/* Category Filters (interactive functional controls) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: "all", label: "Todos los Alimentos" },
            { id: "grasas", label: "Aceites y Grasas" },
            { id: "pescados", label: "Pescados y Proteínas" },
            { id: "frutos", label: "Semillas y Frutos Secos" },
            { id: "frutas", label: "Frutas y Antioxidantes" },
            { id: "legumbres", label: "Legumbres y Granos" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === tab.id
                  ? "bg-amber-900 text-white shadow-xs"
                  : "bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Comparison Cards Grid */}
        <div className="space-y-6">
          {filtered.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs hover:border-amber-700/50 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Mediterranean Column */}
                <div className="lg:col-span-5 bg-stone-50 rounded-xl p-5 border border-stone-200/80">
                  <span className="text-[11px] font-mono text-amber-800 uppercase tracking-widest font-semibold block mb-1">
                    Patrón Mediterráneo Clásico
                  </span>
                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {item.mediterranean}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {item.medProperty}
                  </p>
                </div>

                {/* Central Connector */}
                <div className="lg:col-span-2 flex flex-col items-center justify-center text-center py-2">
                  <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs mb-1">
                    <ArrowRight className="w-4 h-4 hidden lg:block" />
                    <span className="lg:hidden">↓</span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider">
                    Equivalencia
                  </span>
                </div>

                {/* Tarapoto Amazonian Column */}
                <div className="lg:col-span-5 bg-emerald-50/50 rounded-xl p-5 border border-emerald-200/80">
                  <span className="text-[11px] font-mono text-emerald-800 uppercase tracking-widest font-semibold block mb-1">
                    Sustituto Autóctono en Tarapoto
                  </span>
                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {item.tarapoto}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {item.taraProperty}
                  </p>
                </div>

              </div>

              {/* Sinergy note */}
              <div className="mt-4 pt-4 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-600">
                <Heart className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Efecto Cardioprotector Comprobado:</strong> {item.synergy}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
