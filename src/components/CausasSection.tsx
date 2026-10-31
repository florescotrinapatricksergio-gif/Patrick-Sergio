import { AlertCircle, Flame, HeartCrack, UtensilsCrossed, Bike, Cigarette, Scale } from "lucide-react";

export function CausasSection() {
  const causesList = [
    {
      title: "Transición Nutricional y Alimentos Fritos",
      description: "El alto consumo de cecina frita, tacacho con manteca animal, patacones y plátanos maduros fritos en aceites vegetales recalentados múltiples veces genera compuestos de peroxidación lipídica altamente aterogénicos.",
      icon: UtensilsCrossed
    },
    {
      title: "Sedentarismo Urbano y Motorización",
      description: "En Tarapoto, el uso generalizado de mototaxis y motocicletas lineales ha reducido drásticamente el hábito de caminata cotidiana, favoreciendo la baja capacidad cardiorrespiratoria.",
      icon: Bike
    },
    {
      title: "Hipertensión Arterial Asintomática y Subdiagnosticada",
      description: "La alta ingesta de sodio en embutidos ahumados y sazonadores artificiales, sumada a la baja detección oportuna en atención primaria, mantiene cifras tensionales elevadas que lesionan el endotelio vascular.",
      icon: HeartCrack
    },
    {
      title: "Dislipidemia Aterogénica y Resistencia a la Insulina",
      description: "La combinación de sobrepeso u obesidad abdominal con dietas hipercalóricas eleva los triglicéridos séricos y las lipoproteínas de muy baja densidad (VLDL), disminuyendo el HDL protector.",
      icon: Scale
    },
    {
      title: "Estrés y Consumo de Alcohol / Tabaco",
      description: "El tabaquismo y el consumo excesivo de cerveza o licores destilados en reuniones sociales contribuyen al estrés oxidativo vascular y disfunción autonómica.",
      icon: Cigarette
    },
    {
      title: "Inflamación Crónica y Formación de Ateroma",
      description: "La infiltración de monocitos y macrófagos cargados de lípidos (células espumosas) en la capa íntima coronaria desencadena una cascada inflamatoria que engrosa la pared arterial hasta estenosar la luz del vaso.",
      icon: Flame
    }
  ];

  return (
    <section id="causas" className="py-16 lg:py-24 border-b border-stone-200 bg-stone-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest font-mono text-amber-800 font-semibold mb-2">
            Capítulo 04 · Etiología y Factores de Riesgo
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            Causas del Riesgo Cardiovascular en Adultos de Tarapoto
          </h2>
          <p className="mt-4 text-lg text-stone-600 font-serif italic">
            Mecanismos etiológicos, determinantes conductuales y patogénesis vascular observada en la región.
          </p>
        </div>

        {/* First Block: Behavioral & Dietary Causes with Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-stone-700 leading-relaxed text-base">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              La Brecha Dietética y los Hábitos Cotidianos en la Selva
            </h3>
            <p>
              En el contexto específico de Tarapoto y las localidades aledañas de la provincia de San Martín, 
              el desarrollo de cardiopatías no responde a un único factor genético, sino a la convergencia acelerada 
              de factores ambientales, conductuales y dietéticos.
            </p>
            <p>
              Uno de los principales desencadenantes documentados en la investigación local es la <strong>alteración de los aceites de cocción</strong>. 
              En puestos callejeros y fondas populares, los aceites sufren ciclos sucesivos de calentamiento a más de 180°C. Este proceso térmico 
              degrada los ácidos grasos esenciales, formando hidroperóxidos, aldehídos tóxicos y ácidos grasos trans que penetran directamente en el 
              torrente circulatorio, iniciando la adhesión leucocitaria y la disfunción del endotelio coronario.
            </p>
            <p>
              Asimismo, la presencia de sales añadidas en exceso para la conservación tradicional de carnes curadas (cecina, chorizo regional) 
              incrementa la sobrecarga de volumen y la reactividad vascular periférica, induciendo picos hipertensivos no controlados.
            </p>
          </div>

          {/* Imagen 1 de Causas */}
          <div className="lg:col-span-5">
            <figure className="relative rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-lg">
              <img
                src="/src/assets/images/causas_habitos_riesgo_1793400775510.jpg"
                alt="Alimentos ultraprocesados, frituras, sodio y medición de presión arterial"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <figcaption className="p-4 bg-stone-900 text-stone-200 text-xs">
                <span className="font-semibold text-amber-400 block font-mono">FIGURA 4.1 · FACTORES DETERMINANTES</span>
                La tríada de aceites recalentados, excesivo sodio y sedentarismo acelera el daño arterial en adultos jóvenes.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Second Block: Cellular Pathogenesis & Plaque with Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 pt-8 border-t border-stone-200">
          
          {/* Imagen 2 de Causas */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <figure className="relative rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-lg">
              <img
                src="/src/assets/images/causas_arteria_aterosclerosis_1793400778402.jpg"
                alt="Modelo científico de placa aterosclerótica y estrechamiento coronario"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <figcaption className="p-4 bg-stone-900 text-stone-200 text-xs">
                <span className="font-semibold text-amber-400 block font-mono">FIGURA 4.2 · FISIOPATOLOGÍA VASCULAR</span>
                Evolución de la estría lipídica a la placa de ateroma avanzada y estenosis de la arteria coronaria.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-stone-700 leading-relaxed text-base">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Patogénesis Celular: Del Endotelio Dañado a la Aterosclerosis
            </h3>
            <p>
              A nivel fisiopatológico, el proceso inicia con la penetración de partículas de <strong>colesterol LDL oxidado</strong> a través de 
              uniones endoteliales vulneradas. La falta de antioxidantes polifenólicos (que la dieta mediterránea provee en abundancia mediante el aceite 
              de oliva, tomates y frutas frescas) permite que los radicales libres oxiden velozmente los lípidos en el espacio subendotelial.
            </p>
            <p>
              Los macrófagos fagocitan estas partículas oxidadas convirtiéndose en <em>células espumosas</em>, que liberan citoquinas proinflamatorias. 
              Con el paso de los años, se forma un núcleo lipídico necrótico recubierto por una capa fibrosa. Cuando la dieta es deficiente en ácidos grasos 
              omega-3 y omega-9, esta capa fibrosa permanece delgada, inestable y altamente propensa a la rotura espontánea.
            </p>
          </div>

        </div>

        {/* Systematic Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {causesList.map((cause, idx) => {
            const Icon = cause.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-5 border border-stone-200 hover:border-amber-700/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-900 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-stone-900 text-base mb-1">{cause.title}</h4>
                <p className="text-stone-600 text-xs leading-relaxed">{cause.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
