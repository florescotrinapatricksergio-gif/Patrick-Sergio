import { HeartPulse, Stethoscope, AlertTriangle, UserMinus, DollarSign, Activity } from "lucide-react";

export function ConsecuenciasSection() {
  const consequencesList = [
    {
      title: "Infarto Agudo de Miocardio (IAM)",
      description: "La rotura de una placa aterosclerótica genera una trombosis oclusiva aguda que priva de oxígeno al músculo cardíaco, provocando necrosis celular irreversible en cuestión de minutos.",
      severity: "Crítica"
    },
    {
      title: "Insuficiencia Cardíaca Congestiva",
      description: "El remodelado ventricular patológico reduce la fracción de eyección. El paciente experimenta disnea de esfuerzo progresiva, edema en miembros inferiores y dificultad para realizar actividades básicas.",
      severity: "Crónica / Progresiva"
    },
    {
      title: "Accidente Cerebrovascular (ACV / Ictus)",
      description: "La embolia encefálica derivada de placas carotídeas o fibrilación auricular produce parálisis hemipléjica, afasia motora y pérdida permanente de la autonomía individual.",
      severity: "Alta Discapacidad"
    },
    {
      title: "Arritmias Malignas y Muerte Súbita",
      description: "La isquemia miocárdica desestabiliza la conducción eléctrica cardíaca, precipitando taquicardias y fibrilaciones ventriculares letales antes de llegar al hospital.",
      severity: "Mortalidad Inmediata"
    },
    {
      title: "Impacto Socioeconómico y Familiar en San Martín",
      description: "Los costos de hospitalización en UCI, medicamentos de por vida y los traslados a centros de mayor complejidad en Lima o Trujillo conllevan a un empobrecimiento catastrófico de las familias tarapotinas.",
      severity: "Social y Económica"
    },
    {
      title: "Pérdida Prematura de Años de Vida Productiva (AVAD)",
      description: "Al afectar con mayor dureza a adultos de entre 40 y 65 años, trunca la etapa de mayor productividad económica y desarrollo social en la región amazónica.",
      severity: "Impacto Poblacional"
    }
  ];

  return (
    <section id="consecuencias" className="py-16 lg:py-24 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest font-mono text-amber-800 font-semibold mb-2">
            Capítulo 05 · Repercusiones Médicas y Sociales
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            Consecuencias de las Cardiopatías en la Población
          </h2>
          <p className="mt-4 text-lg text-stone-600 font-serif italic">
            El elevado costo clínico, humano y familiar de no adoptar intervenciones nutricionales oportunas.
          </p>
        </div>

        {/* Narrative & Image 1: Clinical Crisis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-stone-700 leading-relaxed text-base">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              El Daño Miocárdico y la Emergencia Hospitalaria
            </h3>
            <p>
              Cuando las señales de alerta como la dislipidemia, la obesidad central y la hipertensión no son revertidas 
              mediante cambios dietéticos tempranos, el desenlace clínico más temido es el <strong>síndrome coronario agudo</strong>. 
              En el Hospital II-2 de Tarapoto y centros de salud de la red asistencial, los ingresos por dolor precordial opresivo 
              han aumentado considerablemente en adultos económicamente activos.
            </p>
            <p>
              La oclusión total de una rama coronaria (como la descendente anterior izquierda) provoca la muerte celular del tejido 
              miocárdico. Aquellos pacientes que logran sobrevivir al episodio agudo a menudo quedan con <strong>fracciones de eyección severamente disminuidas</strong>, 
              lo que transforma una vida activa y productiva en una condición de discapacidad crónica caracterizada por ahogo constante 
              y dependencia de polifarmacia.
            </p>
          </div>

          {/* Imagen 1 de Consecuencias */}
          <div className="lg:col-span-5">
            <figure className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-lg">
              <img
                src="/src/assets/images/consecuencias_cardiologia_ecg_1793400778132.jpg"
                alt="Monitor de electrocardiograma y monitorización en unidad de cuidados coronarios"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <figcaption className="p-4 bg-stone-900 text-stone-200 text-xs">
                <span className="font-semibold text-amber-400 block font-mono">FIGURA 5.1 · GRAVEDAD CLÍNICA</span>
                Monitorización hemodinámica en UCI: las arritmias ventriculares y el paro cardíaco son el desenlace del daño isquémico acumulado.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Narrative & Image 2: Life Quality & Prevention */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 pt-8 border-t border-stone-100">
          
          {/* Imagen 2 de Consecuencias */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <figure className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-lg">
              <img
                src="/src/assets/images/corazon_saludable_adulto_1793400752213.jpg"
                alt="Prevención oportuna del infarto con estilo de vida cardiosaludable"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <figcaption className="p-4 bg-stone-900 text-stone-200 text-xs">
                <span className="font-semibold text-amber-400 block font-mono">FIGURA 5.2 · EL CAMINO PREVENTIVO</span>
                La dieta mediterránea no solo previene el primer infarto; evita la pérdida catastrófica de autonomía en el adulto.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-stone-700 leading-relaxed text-base">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              El Costo Oculto en las Familias de San Martín
            </h3>
            <p>
              Más allá de los parámetros electrocardiográficos y hemodinámicos, las cardiopatías provocan una <strong>crisis socioeconómica profunda</strong>. 
              En la región San Martín, donde un alto porcentaje de trabajadores depende de actividades independientes, agrícolas o comerciales, 
              la hospitalización prolongada o la discapacidad de quien encabeza la familia desestabiliza por completo el presupuesto del hogar.
            </p>
            <p>
              El gasto de bolsillo para costear antihipertensivos, hipolipemiantes, anticoagulantes y consultas especializadas puede absorber 
              hasta el 45% de los ingresos mensuales familiares. En contraste, adoptar una dieta preventiva rica en legumbres locales, frutos secos, 
              verduras de huerto y grasas cardiosaludables representa una inversión infinitamente más accesible y humana.
            </p>
          </div>

        </div>

        {/* Structured Grid of Consequences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {consequencesList.map((item, idx) => (
            <div key={idx} className="bg-stone-50 rounded-xl p-5 border border-stone-200 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-800 font-semibold block mb-1">
                  Nivel: {item.severity}
                </span>
                <h4 className="font-semibold text-stone-900 text-base mb-2">{item.title}</h4>
                <p className="text-stone-600 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
