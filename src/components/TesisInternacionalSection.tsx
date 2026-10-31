import { Globe, Award, HeartHandshake, CheckCircle2, TrendingDown } from "lucide-react";

export function TesisInternacionalSection() {
  return (
    <section id="tesis-internacional" className="py-16 lg:py-24 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest font-mono text-amber-800 font-semibold mb-2">
            Capítulo 03 · Evidencia Epidemiológica Global
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            Tesis Internacional: El Ensayo PREDIMED y la Evidencia Europea
          </h2>
          <p className="mt-4 text-lg text-stone-600 font-serif italic">
            El mayor ensayo clínico aleatorizado que revolucionó las guías cardiológicas mundiales.
          </p>
        </div>

        {/* Global Reference Card */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 mb-14">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-1.5 font-semibold text-amber-900">
              <Globe className="w-4 h-4" />
              ENSAYO CLÍNICO MULTICÉNTRICO ALEATORIZADO
            </span>
            <span>
              New England Journal of Medicine · Universidad de Barcelona / Navarra
            </span>
          </div>

          <div className="pt-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-3 leading-snug">
              "Primary Prevention of Cardiovascular Disease with a Mediterranean Diet Supplemented with Extra-Virgin Olive Oil or Nuts" (PREDIMED)
            </h3>
            <p className="text-sm font-sans text-stone-600 mb-6">
              <strong>Investigadores Principales:</strong> Dr. Ramón Estruch, Dr. Emilio Ros, Dr. Miguel Ángel Martínez-González y consorcio de 16 centros hospitalarios europeos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white rounded-xl p-5 border border-stone-200">
              <div>
                <p className="text-xs font-mono uppercase text-stone-400 font-medium">Muestra Global</p>
                <p className="text-xl font-bold text-stone-900 font-mono tabular-nums mt-1">7,447</p>
                <p className="text-xs text-stone-500 mt-0.5">Hombres (55-80 a) y mujeres (60-80 a) sin ECV previa pero con alto riesgo.</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-stone-400 font-medium">Tiempo de Seguimiento</p>
                <p className="text-xl font-bold text-stone-900 font-mono tabular-nums mt-1">4.8 Años</p>
                <p className="text-xs text-stone-500 mt-0.5">Mediana de seguimiento prospectivo con evaluación bioquímica rigurosa.</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-stone-400 font-medium">Reducción Riesgo Relativo</p>
                <p className="text-xl font-bold text-amber-800 font-mono tabular-nums mt-1">30%</p>
                <p className="text-xs text-stone-500 mt-0.5">Hazard Ratio 0.70 (IC 95%, 0.54 - 0.92; p = 0.009).</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase text-stone-400 font-medium">Nivel de Evidencia</p>
                <p className="text-xl font-bold text-emerald-800 font-mono mt-1">Clase I, Nivel A</p>
                <p className="text-xs text-stone-500 mt-0.5">Máximo estándar en las Guías Internacionales de la AHA y ESC.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-stone-700 leading-relaxed text-base">
            <h4 className="font-serif text-2xl font-bold text-stone-900">
              Protocolo Experimental y Grupos de Estudio
            </h4>
            <p>
              En el ensayo PREDIMED, los participantes fueron asignados aleatoriamente a uno de tres regímenes alimentarios:
            </p>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <span className="font-semibold text-stone-900 block mb-1">1. Dieta Mediterránea + Aceite de Oliva Virgen Extra (AOVE):</span>
                Consumo diario de al menos 4 cucharadas soperas (aproximadamente 50 g/día) de AOVE de alta calidad rico en polifenoles.
              </div>
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <span className="font-semibold text-stone-900 block mb-1">2. Dieta Mediterránea + Frutos Secos Mixtos:</span>
                Suplementación de 30 g diarios de una mezcla de nueces (15 g), avellanas (7.5 g) y almendras (7.5 g).
              </div>
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <span className="font-semibold text-stone-900 block mb-1">3. Dieta Control Hipograsa:</span>
                Consejo dietético convencional de restricción de grasas totales conforme a las recomendaciones clínicas habituales.
              </div>
            </div>
            <p>
              Los resultados fueron tan concluyentes que el comité ético independiente recomendó suspender precozmente el ensayo 
              al constatar una superioridad estadística incuestionable de los grupos mediterráneos en la reducción de infarto de miocardio, 
              ictus y mortalidad cardiovascular.
            </p>
          </div>

          {/* Imagen 1 de Tesis Internacional */}
          <div className="lg:col-span-5">
            <figure className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-lg">
              <img
                src="/src/assets/images/tesis_predimed_mediterraneo_1793400777389.jpg"
                alt="Aceite de oliva virgen extra y publicaciones del ensayo PREDIMED"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <figcaption className="p-4 bg-stone-900 text-stone-200 text-xs">
                <span className="font-semibold text-amber-400 block font-mono">FIGURA 3.1 · REFERENCIA PREDIMED</span>
                La sinergia de lípidos insaturados con antioxidantes fenólicos es el secreto molecular de la protección vascular.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Narrative & Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 border-t border-stone-200">
          
          {/* Imagen 2 de Tesis Internacional */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <figure className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-lg">
              <img
                src="/src/assets/images/tesis_clinica_cardiovascular_1793400750636.jpg"
                alt="Consulta de cardiología preventiva y evaluación de biomarcadores"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <figcaption className="p-4 bg-stone-900 text-stone-200 text-xs">
                <span className="font-semibold text-amber-400 block font-mono">FIGURA 3.2 · APLICACIÓN CLÍNICA</span>
                Los protocolos internacionales de cardiología indican que el cambio nutricional supera a muchos fármacos en prevención primaria.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-stone-700 leading-relaxed text-base">
            <h4 className="font-serif text-2xl font-bold text-stone-900">
              Traducción Clínica para los Médicos y Pacientes de Tarapoto
            </h4>
            <p>
              La tesis internacional demostró que la clave no reside en "eliminar las grasas", sino en <strong>seleccionar la calidad adecuada de los lípidos</strong>. 
              Mientras que las grasas trans e hidrogenadas inducen apoptosis endotelial y rigidez arterial, los ácidos grasos monoinsaturados 
              y poliinsaturados ejercen un efecto pleiotrópico vasodilatador y antiaterogénico.
            </p>
            <p>
              Para Tarapoto, donde el acceso al aceite de oliva importado puede implicar un coste económico superior para los sectores vulnerables, 
              la lección internacional de PREDIMED valida científicamente el uso de frutos oleaginosos equivalentes. Las nueces mediterráneas 
              encuentran en las semillas de <strong>sacha inchi</strong> un análogo nutricional con un perfil de ácidos grasos alfa-linolénicos incluso más concentrado, 
              convirtiéndolo en la pieza angular de la cardioprotección amazónica.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
