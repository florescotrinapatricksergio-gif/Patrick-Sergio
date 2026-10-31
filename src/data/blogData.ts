export interface SectionContent {
  id: string;
  romano: string;
  badge: string;
  step: string;
  title: string;
  paragraphs: string[];
  citations: number[];
  fig1: {
    num: number;
    title: string;
    description: string;
    imageUrl: string;
  };
  fig2: {
    num: number;
    title: string;
    description: string;
    imageUrl: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  institution: string;
  bio: string;
  photoUrl: string;
}

export interface CitationItem {
  id: number;
  sourceName: string;
  title: string;
  publication: string;
  locationYear: string;
  url: string;
  year: string;
}

export const INITIAL_SECTIONS: SectionContent[] = [
  {
    id: "importancia",
    romano: "I",
    badge: "I. IMPORTANCIA",
    step: "Punto 1 de 5",
    title: "La Importancia de la Dieta Mediterránea y la Prevención Cardíaca en Tarapoto",
    paragraphs: [
      "La importancia de la dieta mediterránea en la prevención de cardiopatías en adultos de Tarapoto radica en su comprobada capacidad para modular los factores de riesgo ateroscleróticos y optimizar la función endotelial vascular. En la provincia de San Martín, la acelerada urbanización y la transición nutricional han generado un incremento alarmante en el consumo de ácidos grasos saturados e hidrogenados provenientes de frituras comerciales recalentadas, propiciando cuadros prematuros de hipertensión arterial y síndrome metabólico [1].",
      "La adopción de este régimen alimentario no solo protege al sistema cardiovascular mediante el aporte de ácidos grasos monoinsaturados y poliinsaturados (omega-3 y omega-9), sino que promueve una reducción sistemática de marcadores proinflamatorios séricos como la proteína C reactiva ultrasensible y la interleucina-6. Al mismo tiempo, en la realidad de la selva peruana, la integración de fuentes bioactivas nativas como el Sacha Inchi (Plukenetia volubilis) y la palta regional potencia la capacidad antioxidante celular [2].",
      "Sin embargo, persisten limitaciones culturales y de acceso a información nutricional en la población adulta de Tarapoto, lo que favorece el avance silencioso de placas de ateroma en las arterias coronarias. En este contexto, los profesionales de la salud y equipos comunitarios exigen intervenciones educativas continuas que revaloricen los productos cardiosaludables locales y reduzcan la morbimortalidad cardiovascular [1][2]."
    ],
    citations: [1, 2],
    fig1: {
      num: 1,
      title: "Matriz Nutricional Cardioprotectora",
      description: "Lípidos insaturados, semillas de sacha inchi, aceite virgen y antioxidantes naturales para la protección de la pared vascular coronaria.",
      imageUrl: "/src/assets/images/dieta_mediterranea_ingredientes_1793400750615.jpg"
    },
    fig2: {
      num: 2,
      title: "Salud Endotelial y Prevención en Adultos",
      description: "Intervención nutricional temprana para evitar el remodelado ventricular patológico y daño miocárdico en adultos de Tarapoto.",
      imageUrl: "/src/assets/images/corazon_saludable_adulto_1793400752213.jpg"
    }
  },
  {
    id: "tesis-int",
    romano: "II",
    badge: "II. TESIS INTERNACIONAL",
    step: "Punto 2 de 5",
    title: "Evidencia del Ensayo Clínico PREDIMED y Estudios Internacionales",
    paragraphs: [
      "A nivel internacional, el estudio PREDIMED (Prevención con Dieta Mediterránea), publicado en el New England Journal of Medicine por Estruch y colaboradores, representa el ensayo clínico aleatorizado de referencia mundial más sólido sobre nutrición y salud cardiovascular. La investigación evaluó a 7,447 participantes con alto riesgo cardiovascular asignados a tres cohortes: dieta mediterránea con aceite de oliva virgen extra, dieta mediterránea con frutos secos, y dieta control baja en grasas [3].",
      "Los resultados del seguimiento prospectivo confirmaron una reducción relativa del 30% en la incidencia de eventos cardiovasculares mayores (infarto agudo de miocardio, accidente cerebrovascular y muerte de origen cardiovascular) en los grupos intervenidos con el patrón mediterráneo. Se evidenció además una mejoría estadísticamente significativa en la presión arterial sistólica, reducción del colesterol LDL oxidado y mayor elasticidad en las grandes arterias [4].",
      "Asimismo, revisiones sistemáticas de la Sociedad Europea de Cardiología ratifican que los polifenoles y ácidos grasos monoinsaturados actúan sobre la expresión genética de enzimas antioxidantes endógenas, frenando la disfunción endotelial y estabilizando la capa fibrosa de las arterias coronarias en poblaciones adultas [3][4]."
    ],
    citations: [3, 4],
    fig1: {
      num: 3,
      title: "Ensayo Clínico PREDIMED",
      description: "Evidencia de nivel Clase I, Nivel A sobre el aceite de oliva virgen extra y frutos secos en la reducción de eventos coronarios.",
      imageUrl: "/src/assets/images/tesis_predimed_mediterraneo_1793400777389.jpg"
    },
    fig2: {
      num: 4,
      title: "Consulta Médica y Biomarcadores",
      description: "Control riguroso de parámetros hemodinámicos, perfil lipídico y reactividad vascular en prevención primaria.",
      imageUrl: "/src/assets/images/tesis_clinica_cardiovascular_1793400750636.jpg"
    }
  },
  {
    id: "tesis-nac",
    romano: "III",
    badge: "III. TESIS NACIONAL",
    step: "Punto 3 de 5",
    title: "Investigaciones Nacionales y Estudios en la Región San Martín",
    paragraphs: [
      "En el ámbito nacional, diversas investigaciones desarrolladas en universidades peruanas (Universidad Nacional de San Martín, Universidad Peruana Cayetano Heredia y UNMSM) han investigado el impacto de los hábitos alimentarios amazónicos en el perfil metabólico de adultos. La tesis 'Perfil lipídico y efecto cardioprotector del consumo de Sacha Inchi en pobladores de Tarapoto' demostró una correlación directa entre el consumo tradicional de frituras en grasas reutilizadas y la alta prevalencia de hipertrigliceridemia en mayores de 35 años [5].",
      "El estudio cuasiexperimental realizado en centros de salud de Tarapoto y Morales evidenció que la sustitución del aceite de cocina comercial por aceite de sacha inchi prensado en frío, combinado con mayor consumo de frutas regionales ricas en vitamina C (como camu camu) y legumbres nativas, logró disminuir los triglicéridos en un 22.8% e incrementar el colesterol HDL cardioprotector en un 14.6% tras 16 semanas de intervención [6].",
      "Las investigaciones concluyen que la adaptación local del patrón mediterráneo es factible, económicamente accesible y culturalmente aceptada en Tarapoto, constituyendo una herramienta prioritaria de salud pública comunitaria para evitar el colapso hospitalario por infartos agudos [5][6]."
    ],
    citations: [5, 6],
    fig1: {
      num: 5,
      title: "Investigación Universitaria Local",
      description: "Análisis epidemiológico de historias clínicas y registro de factores de riesgo cardiovascular en Tarapoto.",
      imageUrl: "/src/assets/images/investigacion_salud_selva_1793400752432.jpg"
    },
    fig2: {
      num: 6,
      title: "Talleres Comunitarios en San Martín",
      description: "Sesiones educativas con adultos de Tarapoto sobre preparación de alimentos cardiosaludables y semillas de la selva.",
      imageUrl: "/src/assets/images/tarapoto_nutricion_comunitaria_1793400776181.jpg"
    }
  },
  {
    id: "causas",
    romano: "IV",
    badge: "IV. CAUSAS",
    step: "Punto 4 de 5",
    title: "Causas y Factores Etiológicos de las Cardiopatías en Adultos",
    paragraphs: [
      "Las causas del alarmante incremento de cardiopatías en adultos de Tarapoto responden a un origen multifactorial donde convergen hábitos nutricionales perjudiciales y cambios en el estilo de vida urbano. En primer término, destaca el consumo masivo de alimentos preparados con aceites vegetales sometidos a repetidos ciclos de fritura a altas temperaturas, lo que genera compuestos polares citotóxicos que lesionan el endotelio arterial [1][5].",
      "En segundo término, el marcado sedentarismo favorecido por la excesiva motorización urbana (dependencia cotidiana de mototaxis y motocicletas lineales incluso para distancias cortas) disminuye drásticamente el gasto energético calórico. Esto se asocia a la alta ingesta de sodio proveniente de embutidos ahumados (cecina y chorizo curado) y condimentos artificiales que inducen hipertensión arterial no controlada [6].",
      "A nivel molecular, la acumulación de lípidos en la pared vascular provoca la oxidación de lipoproteínas de baja densidad (LDL), reclutamiento leucocitario y formación progresiva de la estría grasa, que con los años evoluciona a placas de ateroma complejas con riesgo de rotura y oclusión coronaria [2][4]."
    ],
    citations: [1, 2, 5, 6],
    fig1: {
      num: 7,
      title: "Factores de Riesgo Cotidianos",
      description: "Grasas saturadas en frituras, embutidos curados, alto contenido de sodio y control deficiente de la presión arterial.",
      imageUrl: "/src/assets/images/causas_habitos_riesgo_1793400775510.jpg"
    },
    fig2: {
      num: 8,
      title: "Progresión de la Aterosclerosis",
      description: "Evolución patológica desde la pared arterial normal hasta el estrechamiento luminal por acumulación lipídica.",
      imageUrl: "/src/assets/images/causas_arteria_aterosclerosis_1793400778402.jpg"
    }
  },
  {
    id: "consecuencias",
    romano: "V",
    badge: "V. CONSECUENCIAS",
    step: "Punto 5 de 5",
    title: "Consecuencias Clínicas, Familiares y Sociales en la Población",
    paragraphs: [
      "Las consecuencias de las cardiopatías no prevenidas abarcan desenlaces clínicos de gravedad extrema. La complicación más temida es el Infarto Agudo de Miocardio (IAM), desencadenado por la rotura de una placa aterosclerótica que genera necrosis isquémica irreversible del miocardio en escasas horas. Aquellos pacientes que logran sobrevivir suelen desarrollar insuficiencia cardíaca congestiva crónica con marcada limitación funcional [1][3].",
      "Asimismo, el accidente cerebrovascular (ACV o ictus) de origen trombótico o embólico provoca secuelas neurológicas permanentes en adultos de mediana edad, incluyendo hemiplejía motora, afasia y pérdida de la independencia en las actividades básicas de la vida diaria [4][6].",
      "En el plano socioeconómico, el impacto en las familias de Tarapoto es devastador. La hospitalización en unidades de cuidados intensivos, los traslados de emergencia fuera de la región y el costo prolongado de tratamientos farmacológicos generan gastos catastróficos que empobrecen al hogar, sumado a la pérdida prematura de años de vida productiva del principal sostén económico familiar [5]."
    ],
    citations: [1, 3, 4, 5, 6],
    fig1: {
      num: 9,
      title: "Gravedad y Monitoreo Coronario",
      description: "Atención médica urgente y monitorización electrocardiográfica continua en pacientes con síndrome coronario agudo.",
      imageUrl: "/src/assets/images/consecuencias_cardiologia_ecg_1793400778132.jpg"
    },
    fig2: {
      num: 10,
      title: "Preservación de la Vida y Autonomía",
      description: "La intervención con dieta mediterránea previene el daño irreversible y mantiene la capacidad funcional del adulto.",
      imageUrl: "/src/assets/images/corazon_saludable_adulto_1793400752213.jpg"
    }
  }
];

export const INITIAL_CITATIONS: CitationItem[] = [
  {
    id: 1,
    sourceName: "Universidad Peruana Cayetano Heredia",
    title: "Prevalencia de factores de riesgo cardiovascular y síndrome metabólico en adultos de la Amazonía peruana",
    publication: "Revista Médica Herediana [Internet]",
    locationYear: "Lima: UPCH; 2024 jul-sep [citado 28 oct 2026]; 35(3)",
    url: "https://revistas.upch.edu.pe",
    year: "2024"
  },
  {
    id: 2,
    sourceName: "Ministerio de Salud del Perú (MINSA)",
    title: "Guías Alimentarias para la Población Peruana: Intervención Nutricional en Enfermedades Crónicas",
    publication: "Centro Nacional de Alimentación y Nutrición - Instituto Nacional de Salud",
    locationYear: "Lima: MINSA; 2022. p. 45-78",
    url: "https://www.gob.pe/minsa",
    year: "2022"
  },
  {
    id: 3,
    sourceName: "Estruch R, Ros E, Salas-Salvadó J, et al.",
    title: "Primary Prevention of Cardiovascular Disease with a Mediterranean Diet (Ensayo PREDIMED)",
    publication: "New England Journal of Medicine [Internet]",
    locationYear: "Boston: NEJM; 2018 jun [citado 25 oct 2026]; 378(25):e34",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1800389",
    year: "2018"
  },
  {
    id: 4,
    sourceName: "European Society of Cardiology (ESC)",
    title: "European Guidelines on Cardiovascular Disease Prevention in Clinical Practice",
    publication: "European Heart Journal [Internet]",
    locationYear: "Oxford: Oxford University Press; 2021; 42(34):3227-3337",
    url: "https://academic.oup.com/eurheartj",
    year: "2021"
  },
  {
    id: 5,
    sourceName: "Universidad Nacional de San Martín",
    title: "Perfil lipídico y efecto cardioprotector del Sacha Inchi (Plukenetia volubilis) en adultos de Tarapoto",
    publication: "Tesis de Grado en Ciencias de la Salud [Internet]",
    locationYear: "Tarapoto: Repositorio Institucional UNSM; 2023 [citado 24 oct 2026]",
    url: "https://repositorio.unsm.edu.pe",
    year: "2023"
  },
  {
    id: 6,
    sourceName: "Sociedad Peruana de Cardiología (SOPECAR)",
    title: "Consenso Peruano sobre Dislipidemias y Prevención Primaria de Cardiopatías en Poblaciones Regionales",
    publication: "Revista Peruana de Cardiología",
    locationYear: "Lima: SOPECAR; 2023 sep; 49(2):112-130",
    url: "https://sopecard.org",
    year: "2023"
  }
];

export const INITIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "Sergio Patrick Flores Cotrina",
    role: "Coordinador General del Proyecto",
    institution: "Universidad César Vallejo · Sede Tarapoto",
    bio: "Responsable de la dirección del estudio e integración de la evidencia sobre cardiopatías en San Martín.",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "member-2",
    name: "Valeria Ríos Pinedo",
    role: "Redacción y Tesis Internacional",
    institution: "Universidad César Vallejo · Sede Tarapoto",
    bio: "Especialista en la sistematización de datos del ensayo PREDIMED y mecanismos moleculares.",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "member-3",
    name: "Carlos Daniel Delgado Soria",
    role: "Investigación y Tesis Nacional",
    institution: "Universidad César Vallejo · Sede Tarapoto",
    bio: "Enfocado en la recopilación de antecedentes sobre hábitos alimentarios y sacha inchi en San Martín.",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "member-4",
    name: "Mariana Alva Reátegui",
    role: "Análisis de Causas y Factores de Riesgo",
    institution: "Universidad César Vallejo · Sede Tarapoto",
    bio: "Investigadora de campo sobre consumo de aceites recalentados y sedentarismo en Tarapoto.",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "member-5",
    name: "Javier Mendoza Lozano",
    role: "Consecuencias Clínicas y Metodología",
    institution: "Universidad César Vallejo · Sede Tarapoto",
    bio: "Responsable del relevamiento de impacto hospitalario y secuelas en pacientes adultos.",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "member-6",
    name: "Lucía Paredes Bartra",
    role: "Divulgación y Enlace Comunitario",
    institution: "Universidad César Vallejo · Sede Tarapoto",
    bio: "Coordinadora de la cápsula audiovisual y redes sociales para la difusión preventiva en Tarapoto.",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
  }
];
