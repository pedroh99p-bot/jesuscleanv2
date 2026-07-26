import { en } from "./en";
import { ptBR } from "./pt-BR";

export const es = {
  ...en,
  common: {
    ...en.common,
    brandSuffix: "Higienización de tapizados",
    beach: "Río de Janeiro",
    neighborhood: "Atención a domicilio",
    reference: "Zonas sujetas a confirmación",
    notInformed: "No informado",
    production: "Producido por MONTANA",
  },
  languages: {
    label: "Seleccionar idioma",
    serviceLabel: "Idioma",
    options: {
      "pt-BR": "Portugués de Brasil",
      en: "Inglés",
      es: "Español",
    },
  },
  topbar: {
    ariaLabel: "Información rápida",
    items: [
      "Atención en Río de Janeiro",
      "Higienización profesional",
      "Atención a domicilio",
      "Prepresupuesto por fotos",
      "Cuidado de cada tejido",
    ],
  },
  preloader: { text: "Preparando una experiencia más limpia..." },
  navigation: {
    home: "Inicio",
    solutions: "Soluciones",
    specialist: "Quiénes somos",
    services: "Servicios",
    infant: "Infantil",
    quiz: "Presupuesto",
    serviceArea: "Atención",
  },
  header: {
    ...ptBR.header,
    navAria: "Navegación principal",
    mobileNavAria: "Menú móvil",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    headerWhatsApp: "Pedir presupuesto",
    mobileWhatsApp: "Atención por WhatsApp",
    whatsappMessage:
      "¡Hola, Jesus Clean! Quiero enviar fotos y solicitar un prepresupuesto.",
  },
  hero: {
    eyebrow: "Atención exclusiva en Río de Janeiro",
    title: "Tu sofá limpio, fresco y renovado",
    titleHighlight: "sin salir de casa.",
    body:
      "Higienización profesional de tapizados en Río de Janeiro con atención programada, cuidado del tejido y resultado visible.",
    primaryCta: "Atención por WhatsApp",
    secondaryCta: "Hacer prepresupuesto",
    chipsAria: "Principales soluciones",
    benefits: [
      "Higienización de tapizados",
      "Sofás y colchones",
      "Sillones y alfombras",
      "Varias zonas de Río",
    ],
    whatsappMessage:
      "¡Hola, Jesus Clean! Quiero evaluar mi tapizado. Enviaré fotos y mi zona.",
  },
  introVideo: {
    ...ptBR.introVideo,
    eyebrow: "¿Qué se esconde en tu tapizado?",
    title: "Tu tapizado puede estar más sucio de lo que parece",
    body:
      "La limpieza común no siempre alcanza la suciedad, los olores y los residuos acumulados en el tejido.",
    cta: "Evaluar mi tapizado",
    controls: "Controles del video",
    pause: "Pausar video",
    play: "Reproducir video",
    unmute: "Activar sonido",
    mute: "Silenciar video",
    note: "Mira parte del proceso y un resultado de Jesus Clean.",
    whatsappMessage:
      "¡Hola, Jesus Clean! Vi el video y quiero evaluar mi tapizado. Enviaré fotos.",
  },
  rollers: {
    one: {
      items: [
        "Higienización profesional",
        "Sofás",
        "Colchones",
        "Sillones",
        "Alfombras",
        "Atención a domicilio",
        "Presupuesto por WhatsApp",
      ],
      label:
        "Higienización profesional, sofás, colchones, sillones, alfombras, atención a domicilio y presupuesto por WhatsApp",
    },
    two: {
      items: [
        "Limpieza profunda",
        "Reducción de olores",
        "Tapizado renovado",
        "Cuidado del tejido",
        "Atención programada",
        "Resultado visible",
      ],
      label:
        "Limpieza profunda, reducción de olores, tapizado renovado, cuidado del tejido, atención programada y resultado visible",
    },
    three: {
      items: [
        "Sofá más limpio",
        "Casa más cómoda",
        "Higienización profesional",
        "Atención en Río",
        "Pide tu presupuesto",
      ],
      label:
        "Sofá más limpio, casa más cómoda, higienización profesional, atención en Río y pide tu presupuesto",
    },
  },
  quiz: {
    ...ptBR.quiz,
    eyebrow: "Prepresupuesto online",
    title: "Cuéntanos qué necesitas higienizar.",
    description:
      "Responde cinco preguntas. Al final tendrás un resumen para añadir fotos y solicitar la evaluación.",
    cover: {
      eyebrow: "Evaluación inicial",
      title: "Prepara tu solicitud.",
      text:
        "Informa la pieza, cantidad, problema principal, zona y plazo deseado.",
      factsAria: "Resumen del prepresupuesto",
      facts: [
        "5 preguntas rápidas",
        "Sin cálculo automático",
        "Resumen listo para enviar",
      ],
      startButton: "Empezar ahora",
      progress: "preguntas para completar",
    },
    startTitle: "Empieza con los datos de la pieza.",
    startText:
      "Las respuestas ayudan, pero no sustituyen el análisis de fotos y tejido.",
    startButton: "Empezar",
    resultLabel: "Resumen completo",
    send: "Enviar datos por WhatsApp",
    back: "Volver",
    restart: "Rehacer",
    questionProgress: "Pregunta {current} de {total}",
    progressLabel: "Progreso {progress}%",
    hint: "Elige una respuesta para avanzar",
    advancing: "Avanzando...",
    autoAdvance: "Avance automático",
    notInformed: "No informado",
    questions: [
      {
        id: "item_type",
        question: "¿Qué quieres higienizar?",
        options: [
          { id: "sofa", label: "Sofá" },
          { id: "mattress", label: "Colchón" },
          { id: "chairs", label: "Sillones o sillas" },
          { id: "rug", label: "Alfombra" },
          { id: "car_seat", label: "Asientos de auto" },
          { id: "multiple", label: "Más de una pieza" },
        ],
      },
      {
        id: "quantity",
        question: "¿Cuántas piezas quieres higienizar?",
        options: [
          { id: "one", label: "1 pieza" },
          { id: "two", label: "2 piezas" },
          { id: "three_four", label: "3 o 4 piezas" },
          { id: "five_plus", label: "5 o más piezas" },
        ],
      },
      {
        id: "main_problem",
        question: "¿Cuál es el problema principal?",
        options: [
          { id: "odor", label: "Mal olor" },
          { id: "stains", label: "Manchas visibles" },
          { id: "deep_dirt", label: "Suciedad acumulada" },
          { id: "maintenance", label: "Higienización preventiva" },
        ],
      },
      {
        id: "region",
        question: "¿En qué zona será la atención?",
        options: [
          { id: "south", label: "Zona Sur" },
          { id: "north", label: "Zona Norte" },
          { id: "west", label: "Zona Oeste, Barra o Recreio" },
          { id: "center", label: "Centro, Tijuca o Méier" },
          { id: "other", label: "Baixada u otra zona" },
        ],
      },
      {
        id: "timing",
        question: "¿Para cuándo necesitas el servicio?",
        options: [
          { id: "asap", label: "Lo antes posible" },
          { id: "this_week", label: "Esta semana" },
          { id: "next_week", label: "La próxima semana" },
          { id: "researching", label: "Estoy investigando" },
        ],
      },
    ],
    labels: {
      item_type: "Tipo de pieza",
      quantity: "Cantidad",
      main_problem: "Problema principal",
      region: "Zona",
      timing: "Plazo deseado",
    },
    results: {
      ready: {
        title: "Tu prepresupuesto está casi listo",
        text:
          "Envía este resumen y añade fotos para que Jesus Clean evalúe tus piezas.",
        recommendedProfile: "Prepresupuesto por fotos",
      },
    },
    whatsappIntro: "¡Hola, Jesus Clean! Completé el prepresupuesto inicial.",
    whatsappOutro:
      "Adjuntaré fotos para la evaluación. Entiendo que el precio final depende del análisis.",
  },
  problems: {
    eyebrow: "Soluciones cotidianas",
    title: "Cuando la limpieza común no es suficiente.",
    text:
      "La evaluación considera tejido, tiempo y tipo de suciedad antes de indicar el proceso.",
    items: [
      {
        title: "Mal olor en el sofá",
        text: "La limpieza profunda puede ayudar a reducir olores.",
        cta: "Consultar por WhatsApp",
        message:
          "¡Hola, Jesus Clean! Mi sofá tiene mal olor y quiero enviar fotos.",
      },
      {
        title: "Manchas visibles",
        text: "Evaluación del tejido para mejorar el aspecto.",
        cta: "Evaluar mi pieza",
        message:
          "¡Hola, Jesus Clean! Mi pieza tiene manchas visibles y quiero evaluarla.",
      },
      {
        title: "Suciedad acumulada",
        text: "Proceso enfocado en dejar el tapizado más limpio y cómodo.",
        cta: "Quiero higienizar",
        message:
          "¡Hola, Jesus Clean! Quiero evaluar una pieza con suciedad acumulada.",
      },
      {
        title: "Aspecto envejecido",
        text: "Limpieza especializada para mejorar el aspecto.",
        cta: "Pedir presupuesto",
        message:
          "¡Hola, Jesus Clean! Quiero evaluar una pieza con aspecto envejecido.",
      },
    ],
    disclaimer:
      "El resultado varía según tejido, tiempo y suciedad. No se garantiza eliminación total.",
  },
  services: {
    eyebrow: "Servicios",
    title: "Soluciones para distintas piezas y ambientes.",
    text:
      "Hasta contar con fotos específicas, cada tarjeta usa iconos e información clara.",
    cards: [
      {
        id: "sofas",
        title: "Higienización de sofás",
        description: "Evaluación del tejido y limpieza en el lugar.",
        benefit: "Ayuda a reducir suciedad y olores.",
        cta: "Evaluar mi sofá",
        message:
          "¡Hola, Jesus Clean! Quiero evaluar un sofá y enviaré fotos.",
      },
      {
        id: "colchoes",
        title: "Higienización de colchones",
        description: "Proceso según tejido y estado de la pieza.",
        benefit: "Contribuye a una superficie más limpia.",
        cta: "Evaluar mi colchón",
        message:
          "¡Hola, Jesus Clean! Quiero evaluar un colchón.",
      },
      {
        id: "poltronas-cadeiras",
        title: "Sillones y sillas",
        description: "Atención para piezas individuales o conjuntos.",
        benefit: "Cuidado de detalles y zonas de mayor uso.",
        cta: "Evaluar mis piezas",
        message:
          "¡Hola, Jesus Clean! Quiero evaluar sillones o sillas.",
      },
      {
        id: "tapetes",
        title: "Alfombras",
        description: "Evaluación previa de material, tamaño y estado.",
        benefit: "Proceso guiado por el tipo de fibra.",
        cta: "Evaluar mi alfombra",
        message:
          "¡Hola, Jesus Clean! Quiero evaluar una alfombra.",
      },
      {
        id: "automotivos",
        title: "Asientos de auto",
        description: "Higienización de asientos y superficies tapizadas.",
        benefit: "Ayuda a renovar el interior.",
        cta: "Evaluar mi vehículo",
        message:
          "¡Hola, Jesus Clean! Quiero evaluar los asientos de mi auto.",
      },
      {
        id: "multiplas-pecas",
        title: "Varias piezas",
        description: "Evaluación conjunta de distintos tapizados.",
        benefit: "Organiza el servicio según la combinación.",
        cta: "Evaluar un conjunto",
        message:
          "¡Hola, Jesus Clean! Quiero evaluar varias piezas.",
      },
      {
        id: "residencial-comercial",
        title: "Residencial y comercial",
        description: "Atención programada para hogares y empresas.",
        benefit: "Alcance y acceso alineados antes de agendar.",
        cta: "Consultar atención",
        message:
          "¡Hola, Jesus Clean! Quiero consultar atención residencial o comercial.",
      },
    ],
  },
  infant: {
    eyebrow: "Cuidado para la familia",
    title: "Higienización especial para artículos infantiles",
    text:
      "Cochecitos, sillas, colchones y alfombras infantiles acumulan residuos y olores. Cada pieza se evalúa.",
    benefits: ["Cuidado del tejido", "Más comodidad", "Atención a domicilio"],
    items: [
      "Cochecito de bebé",
      "Silla de bebé",
      "Silla infantil",
      "Colchón infantil",
      "Alfombras infantiles",
      "Tapizados usados por niños",
    ],
    cta: "Higienizar artículos infantiles",
    whatsappMessage:
      "¡Hola, Jesus Clean! Quiero evaluar artículos infantiles.",
  },
  beforeAfter: {
    eyebrow: "Antes y después",
    title: "Resultados que puedes ver",
    text: "Mira transformaciones realizadas por Jesus Clean.",
    ariaLabel: "Resultados reales de higienización",
  },
  specialist: {
    ...ptBR.specialist,
    eyebrow: "Quiénes somos",
    title: "Cuidado profesional desde el primer contacto.",
    body:
      "Jesus Clean nació para ofrecer higienización profesional con cuidado, confianza y resultado visible. Igor Jesus dirige los servicios con atención a los detalles.",
    imageAlt: "Igor Jesus, fundador de Jesus Clean, con uniforme azul",
    captionText: "Fundador de Jesus Clean",
    locationBadge: "Atención en Río de Janeiro",
    metricsAria: "Indicadores comerciales pendientes de comprobación",
    metrics: [
      { value: 900, prefix: "+", suffix: "", label: "Clientes atendidos" },
      { value: 100, prefix: "", suffix: "%", label: "Atención en Río" },
      { value: 5, prefix: "", suffix: "★", label: "Calidad profesional" },
    ],
    features: [
      {
        title: "Cuidado del tejido",
        text: "Cada pieza se evalúa antes de definir el procedimiento.",
      },
      {
        title: "Atención cercana",
        text: "Orientación clara para preparación, ejecución y secado.",
      },
    ],
    cta: "Hablar con Igor por WhatsApp",
    instagramCta: "Instagram",
    whatsappMessage:
      "¡Hola, Igor! Conocí Jesus Clean y quiero evaluar mi tapizado.",
  },
  community: {
    ...ptBR.community,
    eyebrow: "Por qué elegir Jesus Clean",
    title: "Cuatro pilares en cada servicio.",
    body:
      "Una experiencia organizada, con evaluación, cuidado en la ejecución y orientación.",
    imageAlt:
      "Igor Jesus con uniforme azul en un ambiente residencial de atención",
    testimonialsTitle: "Pilares del servicio",
    noTestimonials: "No hay reseñas autorizadas publicadas.",
    pillars: [
      {
        title: "Atención a domicilio",
        text: "Jesus Clean va a tu casa o empresa con horario programado.",
      },
      {
        title: "Cuidado específico",
        text: "El tejido, tamaño y estado forman parte de la evaluación.",
      },
      {
        title: "Proceso profesional",
        text: "El servicio se organiza para higienizar en el propio lugar.",
      },
      {
        title: "Resultado visible",
        text: "Atención cercana y orientación para la etapa de secado.",
      },
    ],
    cta: "Evaluar mi pieza",
    whatsappMessage:
      "¡Hola, Jesus Clean! Quiero evaluar una pieza y entender el proceso.",
  },
  practical: {
    ...ptBR.practical,
    eyebrow: "Cómo funciona",
    title: "Cómo funciona la atención",
    body:
      "Solicita la evaluación y recibe orientación para programar la higienización.",
    stepsAria: "Etapas del servicio",
    steps: [
      {
        number: "01",
        title: "Envía fotos por WhatsApp",
        text: "Muestra la pieza, cantidad y los puntos principales.",
      },
      {
        number: "02",
        title: "Recibe la evaluación",
        text:
          "El equipo analiza la pieza, tejido, tamaño, estado y ubicación.",
      },
      {
        number: "03",
        title: "Programa la atención",
        text:
          "Elige una fecha disponible para recibir a Jesus Clean.",
      },
      {
        number: "04",
        title: "Recibe la higienización",
        text:
          "El servicio se realiza en el lugar y recibes orientación de secado.",
      },
    ],
    firstClass: {
      eyebrow: "Evaluación inicial",
      title: "Fotos y contexto orientan la atención.",
      text:
        "El prepresupuesto considera pieza, tejido, tamaño, estado y zona. No calcula precios automáticamente.",
    },
    facts: [
      { label: "Contacto", value: "Prepresupuesto por fotos" },
      { label: "Zona", value: "Varias regiones de Río" },
      { label: "Piezas", value: "Residenciales y comerciales" },
      { label: "Agenda", value: "Disponibilidad confirmada" },
      { label: "Ejecución", value: "Atención en el lugar" },
    ],
    checklistTitle: "Qué enviar",
    checklist: [
      "Fotos generales y de los detalles",
      "Tipo y cantidad de piezas",
      "Barrio de la atención",
      "Plazo deseado",
    ],
    primaryCta: "Solicitar evaluación",
    secondaryCta: "Rehacer prepresupuesto",
    whatsappMessage:
      "¡Hola, Jesus Clean! Quiero enviar datos y fotos para una evaluación.",
  },
  classProfiles: {
    ...ptBR.classProfiles,
    heading: "Pedidos más comunes",
    ariaLabel: "Carrusel de servicios destacados",
    previous: "Servicio anterior",
    next: "Servicio siguiente",
    dots: "Indicadores de servicios",
    dot: "Ir al servicio {index}",
    progress: "Servicio {current} de {total}",
    audienceLabel: "Indicado para",
    profiles: {
      sofa: {
        title: "Higienización de sofás",
        description:
          "Evaluación del tejido y limpieza profesional a domicilio.",
        audience: "Sofás con suciedad, olores o aspecto desgastado.",
        cta: "Evaluar mi sofá",
        whatsappMessage:
          "¡Hola, Jesus Clean! Quiero evaluar mi sofá y enviaré fotos.",
      },
      mattress: {
        title: "Higienización de colchones",
        description:
          "Procedimiento según material, tamaño y estado de la pieza.",
        audience: "Colchones que necesitan limpieza profunda o mantenimiento.",
        cta: "Evaluar mi colchón",
        whatsappMessage:
          "¡Hola, Jesus Clean! Quiero evaluar mi colchón y enviaré fotos.",
      },
      combo: {
        title: "Varias piezas",
        description:
          "Organiza la evaluación de sofás, sillas y otros tapizados.",
        audience: "Hogares, empresas y condominios con varios artículos.",
        cta: "Evaluar varias piezas",
        whatsappMessage:
          "¡Hola, Jesus Clean! Quiero evaluar varias piezas y enviaré fotos y cantidades.",
      },
    },
  },
  location: {
    ...ptBR.location,
    eyebrow: "Zona de atención",
    title: "Atención en varias regiones de Río de Janeiro",
    body:
      "Jesus Clean va a hogares, empresas y condominios con horario programado.",
    meetingLabel: "Modalidad",
    meetingPoint: "Atención a domicilio",
    neighborhoodAndCity: "Río de Janeiro, RJ",
    exactNote: "El barrio y la disponibilidad se confirman antes de agendar.",
    route: "Enviar ubicación",
    cta: "Consultar mi barrio",
    mapTitle: "Representación de la zona de atención",
    mapPendingTitle: "Atención móvil en Río de Janeiro",
    mapPendingText:
      "No mostramos dirección privada ni mapa fijo. Consulta tu zona.",
    regionsLabel: "Zonas atendidas bajo consulta",
    regions: [
      "Zona Sur",
      "Zona Norte",
      "Zona Oeste",
      "Centro",
      "Barra y Recreio",
      "Tijuca y Méier",
      "Baixada y alrededores bajo consulta",
    ],
    whatsappMessage:
      "¡Hola, Jesus Clean! Quiero confirmar si atienden mi barrio. Mi ubicación es:",
  },
  faq: {
    ...ptBR.faq,
    eyebrow: "Preguntas frecuentes",
    title: "Información clara antes de la atención.",
    text:
      "Los plazos, resultados y disponibilidad dependen de cada evaluación.",
    cta: "Preguntar por WhatsApp",
    whatsappMessage:
      "¡Hola, Jesus Clean! Leí las preguntas y necesito orientación.",
    items: [
      {
        id: "duracao-higienizacao",
        question: "¿Cuánto dura la higienización?",
        answer:
          "El tiempo varía según tipo, tamaño y estado. La estimación se informa después de evaluar las fotos.",
      },
      {
        id: "tempo-secagem",
        question: "¿Cuánto tarda en secarse?",
        answer:
          "Depende del tejido, ventilación, clima y humedad. Se dan indicaciones específicas al final.",
      },
      {
        id: "remove-manchas",
        question: "¿Elimina todas las manchas?",
        answer:
          "No se puede prometer eliminación total. El resultado varía según tejido, origen y antigüedad.",
      },
      {
        id: "reduz-odores",
        question: "¿Ayuda a reducir olores?",
        answer:
          "La limpieza profunda puede ayudar a reducir olores de residuos y suciedad. El resultado varía.",
      },
      {
        id: "tipos-atendidos",
        question: "¿Qué tipos de tapizado atienden?",
        answer:
          "Sofás, colchones, sillones, sillas, alfombras, asientos de auto y artículos infantiles, sujetos a evaluación.",
      },
      {
        id: "retirar-sofa",
        question: "¿Hay que retirar el sofá?",
        answer:
          "El servicio se realiza en el lugar. El equipo orienta sobre el espacio necesario.",
      },
      {
        id: "pre-orcamento-foto",
        question: "¿Cómo funciona el prepresupuesto por fotos?",
        answer:
          "Envía fotos, cantidad, tejido cuando lo sepas, problema y zona. Las condiciones dependen de la evaluación.",
      },
      {
        id: "empresas-condominios",
        question: "¿Atienden empresas y condominios?",
        answer:
          "La atención residencial y comercial está prevista. Alcance, acceso y cantidad deben confirmarse.",
      },
      {
        id: "regioes",
        question: "¿Qué regiones atienden?",
        answer:
          "Se atienden varias zonas de Río de Janeiro, según agenda y confirmación de ubicación.",
      },
      {
        id: "agendar",
        question: "¿Cómo agendar?",
        answer:
          "Envía fotos y datos por WhatsApp. Tras la evaluación, el equipo informa condiciones y fechas.",
      },
    ],
  },
  finalCta: {
    ...ptBR.finalCta,
    eyebrow: "Prepresupuesto por fotos",
    title: "Tu tapizado puede volver a parecer nuevo",
    text:
      "Envía una foto y recibe orientación para higienizar sofá, colchón, alfombra u otro tapizado.",
    primary: "Solicitar presupuesto por WhatsApp",
    secondary: "Hacer prepresupuesto",
    visualTop: "Atención programada",
    visualStrong: "Cuidado en cada detalle",
    whatsappMessage:
      "¡Hola, Jesus Clean! Quiero enviar fotos y solicitar un prepresupuesto.",
  },
  footer: {
    ...ptBR.footer,
    description:
      "Higienización profesional de tapizados residenciales y comerciales en Río de Janeiro.",
    whatsappMessage:
      "¡Hola, Jesus Clean! Vine del sitio y quiero solicitar una evaluación.",
    navigationTitle: "Navegación",
    infoTitle: "Atención",
    serviceLanguages: "Río de Janeiro • bajo consulta",
    rights: "Todos los derechos reservados.",
    privacy: "Política de privacidad",
    cookiePreferences: "Preferencias de cookies",
  },
  floating: {
    ariaLabel: "Contactar a Jesus Clean por WhatsApp",
    message:
      "¡Hola, Jesus Clean! Quiero enviar fotos y solicitar un prepresupuesto.",
  },
  assistant: {
    landmarkLabel: "Asistente de agenda Jesus Clean",
    launcherTitle: "Asistente virtual",
    launcherSubtitle: "Jesus Clean te orienta",
    directWhatsapp: "Agenda directa",
    directWhatsappAria: "Agendar directamente por WhatsApp",
    directWhatsappMessage:
      "¡Hola, Jesus Clean! Quiero consultar la disponibilidad y agendar una higienización.",
    open: "Abrir asistente de agenda",
    close: "Cerrar asistente de agenda",
    title: "Jesus Clean responde",
    subtitle: "Asistente de agenda",
    notice: "Orientación simple para organizar tu solicitud.",
    greeting:
      "¡Hola! 👋 Prepararé tu solicitud en 5 pasos rápidos. Al final, podrás enviar todo organizado por WhatsApp.",
    step: "PASO {current} DE {total}",
    helper: "Toca una opción para continuar.",
    back: "Volver",
    restart: "Empezar de nuevo",
    resultEyebrow: "TODO LISTO",
    resultTitle: "¡Tu solicitud está organizada!",
    resultText:
      "Revisa el resumen y envíalo por WhatsApp. Después, agrega fotos de las piezas.",
    send: "AGENDAR POR WHATSAPP",
    whatsappIntro:
      "👋 *¡HOLA, JESUS CLEAN!* Quiero agendar una higienización de tapizados.",
    whatsappOutro:
      "Adjuntaré fotos para la evaluación y esperaré la confirmación de disponibilidad.",
  },
  consent: {
    ...ptBR.consent,
    eyebrow: "Privacidad",
    title: "Tú controlas las cookies.",
    text:
      "Las cookies esenciales mantienen el sitio. Analytics y marketing solo se activan con tu permiso.",
    privacyLink: "Ver política de privacidad",
    optionsAria: "Preferencias de cookies",
    essentialTitle: "Esenciales",
    essentialText: "Necesarias para navegación y seguridad.",
    analyticsTitle: "Analytics",
    analyticsText: "Ayuda a entender secciones, CTAs y campañas.",
    marketingTitle: "Marketing",
    marketingText: "Activa píxeles cuando haya un ID real.",
    reject: "Rechazar",
    customize: "Personalizar",
    save: "Guardar preferencias",
    accept: "Aceptar",
  },
  privacy: {
    ...ptBR.privacy,
    metadataTitle: "Política de privacidad",
    back: "Volver a la landing page",
    eyebrow: "Privacidad",
    title: "Política de privacidad inicial",
    intro:
      "Esta página describe la estructura inicial de privacidad de Jesus Clean. La validación jurídica final depende de datos aún pendientes.",
    sections: [
      {
        title: "Datos que informas",
        text:
          "El quiz o WhatsApp puede incluir pieza, cantidad, problema, zona, plazo y datos que decidas enviar.",
      },
      {
        title: "Datos técnicos",
        text:
          "Con consentimiento, el sitio puede registrar navegación y origen de campañas.",
      },
      {
        title: "Cookies y consentimiento",
        text:
          "Las cookies esenciales mantienen funciones básicas. Analytics y marketing requieren tu elección.",
      },
      {
        title: "Compartir datos",
        text:
          "Google Analytics, Tag Manager y Meta Pixel solo cargan con IDs reales y consentimiento.",
      },
      {
        title: "Datos pendientes",
        text:
          "Razón social, CNPJ, email, base legal y plazos de conservación requieren validación.",
      },
    ],
  },
  whatsapp: {
    defaultMessage:
      "¡Hola, Jesus Clean! Quiero enviar fotos y solicitar un prepresupuesto.",
    quizAnswersTitle: "Respuestas del prepresupuesto:",
    campaignTitle: "Origen de la campaña:",
    origin: "Origen del clic",
    section: "Sección",
    cta: "CTA",
  },
} as const;
