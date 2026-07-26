import { ptBR } from "./pt-BR";

export const en = {
  ...ptBR,
  common: {
    ...ptBR.common,
    brandSuffix: "Upholstery cleaning",
    instructor: "Igor Jesus",
    beach: "Rio de Janeiro",
    neighborhood: "On-site service",
    reference: "Areas subject to confirmation",
    notInformed: "Not provided",
    production: "Produced by MONTANA",
  },
  languages: {
    label: "Select language",
    serviceLabel: "Language",
    options: {
      "pt-BR": "Brazilian Portuguese",
      en: "English",
      es: "Spanish",
    },
  },
  topbar: {
    ariaLabel: "Quick information",
    items: [
      "Service in Rio de Janeiro",
      "Professional upholstery cleaning",
      "On-site appointments",
      "Photo-based pre-quote",
      "Care for each fabric",
    ],
  },
  preloader: { text: "Preparing a cleaner experience..." },
  navigation: {
    home: "Home",
    solutions: "Solutions",
    specialist: "About us",
    services: "Services",
    infant: "Children",
    quiz: "Quote",
    serviceArea: "Service area",
  },
  header: {
    ...ptBR.header,
    navAria: "Main navigation",
    mobileNavAria: "Mobile menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    headerWhatsApp: "Request a quote",
    mobileWhatsApp: "WhatsApp service",
    whatsappMessage:
      "Hi, Jesus Clean! I would like to send photos and request a pre-quote.",
  },
  hero: {
    eyebrow: "Exclusive service in Rio de Janeiro",
    title: "A clean, fresh and renewed sofa",
    titleHighlight: "without leaving home.",
    body:
      "Professional upholstery cleaning in Rio de Janeiro with scheduled on-site service, fabric care and visible results.",
    primaryCta: "Chat on WhatsApp",
    secondaryCta: "Start pre-quote",
    chipsAria: "Main solutions",
    benefits: [
      "Upholstery cleaning",
      "Sofas and mattresses",
      "Armchairs and rugs",
      "Several areas in Rio",
    ],
    whatsappMessage:
      "Hi, Jesus Clean! I would like an assessment. I will send photos and my area.",
  },
  introVideo: {
    ...ptBR.introVideo,
    eyebrow: "What is hiding in your upholstery?",
    title: "Your upholstery may be dirtier than it looks",
    body:
      "Regular cleaning does not always reach dirt, odors and residue accumulated deep in the fabric.",
    cta: "Assess my upholstery",
    controls: "Video controls",
    pause: "Pause video",
    play: "Play video",
    unmute: "Turn sound on",
    mute: "Mute video",
    note: "See part of the process and a result from a Jesus Clean service.",
    whatsappMessage:
      "Hi, Jesus Clean! I watched the video and would like an assessment. I will send photos.",
  },
  rollers: {
    one: {
      items: [
        "Professional cleaning",
        "Sofas",
        "Mattresses",
        "Armchairs",
        "Rugs",
        "On-site service",
        "Quote via WhatsApp",
      ],
      label:
        "Professional cleaning, sofas, mattresses, armchairs, rugs, on-site service and quotes via WhatsApp",
    },
    two: {
      items: [
        "Deep cleaning",
        "Odor reduction",
        "Renewed upholstery",
        "Fabric care",
        "Scheduled service",
        "Visible results",
      ],
      label:
        "Deep cleaning, odor reduction, renewed upholstery, fabric care, scheduled service and visible results",
    },
    three: {
      items: [
        "A cleaner sofa",
        "A more comfortable home",
        "Professional cleaning",
        "Service in Rio",
        "Request your quote",
      ],
      label:
        "A cleaner sofa, a more comfortable home, professional cleaning, service in Rio and request your quote",
    },
  },
  quiz: {
    ...ptBR.quiz,
    eyebrow: "Online pre-quote",
    title: "Tell us what you need cleaned.",
    description:
      "Answer five quick questions. Your summary will be ready for you to attach photos and request an assessment.",
    cover: {
      eyebrow: "Initial assessment",
      title: "Prepare your pre-quote request.",
      text:
        "Tell us the item, quantity, main issue, service area and preferred timing.",
      factsAria: "Pre-quote summary",
      facts: [
        "5 quick questions",
        "No automatic price calculation",
        "A ready-to-send summary",
      ],
      startButton: "Start now",
      progress: "questions to complete",
    },
    startTitle: "Start with the item details.",
    startText:
      "Your answers help the assessment but do not replace photos and fabric analysis.",
    startButton: "Start pre-quote",
    resultLabel: "Summary complete",
    send: "Send details on WhatsApp",
    back: "Back",
    restart: "Start over",
    questionProgress: "Question {current} of {total}",
    progressLabel: "Progress {progress}%",
    hint: "Choose an answer to continue",
    advancing: "Moving on...",
    autoAdvance: "Automatic advance",
    notInformed: "Not provided",
    questions: [
      {
        id: "item_type",
        question: "What would you like cleaned?",
        options: [
          { id: "sofa", label: "Sofa" },
          { id: "mattress", label: "Mattress" },
          { id: "chairs", label: "Armchairs or chairs" },
          { id: "rug", label: "Rug" },
          { id: "car_seat", label: "Car seats" },
          { id: "multiple", label: "More than one item" },
        ],
      },
      {
        id: "quantity",
        question: "How many items need cleaning?",
        options: [
          { id: "one", label: "1 item" },
          { id: "two", label: "2 items" },
          { id: "three_four", label: "3 or 4 items" },
          { id: "five_plus", label: "5 or more items" },
        ],
      },
      {
        id: "main_problem",
        question: "What is the main issue?",
        options: [
          { id: "odor", label: "Odor" },
          { id: "stains", label: "Visible stains" },
          { id: "deep_dirt", label: "Accumulated dirt" },
          { id: "maintenance", label: "Preventive cleaning" },
        ],
      },
      {
        id: "region",
        question: "Where will the service take place?",
        options: [
          { id: "south", label: "South Zone" },
          { id: "north", label: "North Zone" },
          { id: "west", label: "West Zone, Barra or Recreio" },
          { id: "center", label: "Downtown, Tijuca or Méier" },
          { id: "other", label: "Baixada or another area" },
        ],
      },
      {
        id: "timing",
        question: "When do you need the service?",
        options: [
          { id: "asap", label: "As soon as possible" },
          { id: "this_week", label: "This week" },
          { id: "next_week", label: "Next week" },
          { id: "researching", label: "I am researching" },
        ],
      },
    ],
    labels: {
      item_type: "Item type",
      quantity: "Quantity",
      main_problem: "Main issue",
      region: "Area",
      timing: "Preferred timing",
    },
    results: {
      ready: {
        title: "Your pre-quote is almost ready",
        text:
          "Send this summary and attach photos so Jesus Clean can assess your items.",
        recommendedProfile: "Photo-based pre-quote",
      },
    },
    whatsappIntro: "Hi, Jesus Clean! I completed the initial pre-quote online.",
    whatsappOutro:
      "I will attach photos for your assessment. I understand the final price depends on the analysis.",
  },
  problems: {
    eyebrow: "Everyday solutions",
    title: "When regular cleaning is not enough.",
    text:
      "The assessment considers fabric, time and dirt type before recommending a process.",
    items: [
      {
        title: "Sofa odors",
        text: "Deep cleaning can help reduce odors and improve the room.",
        cta: "Ask on WhatsApp",
        message:
          "Hi, Jesus Clean! My sofa has an odor and I would like to send photos for assessment.",
      },
      {
        title: "Visible stains",
        text:
          "Fabric assessment and technical cleaning to improve appearance.",
        cta: "Assess my item",
        message:
          "Hi, Jesus Clean! My item has visible stains and I would like an assessment.",
      },
      {
        title: "Accumulated dirt",
        text:
          "A process focused on making upholstery cleaner and more comfortable.",
        cta: "Request cleaning",
        message:
          "Hi, Jesus Clean! I would like an item with accumulated dirt assessed.",
      },
      {
        title: "A worn appearance",
        text:
          "Specialized cleaning to refresh and improve the item's appearance.",
        cta: "Request a quote",
        message:
          "Hi, Jesus Clean! I would like an item with a worn appearance assessed.",
      },
    ],
    disclaimer:
      "Results vary by fabric, time, source and dirt type. Complete removal is not guaranteed.",
  },
  services: {
    eyebrow: "Services",
    title: "Solutions for different items and spaces.",
    text:
      "Until service-specific photos are available, each card uses clear icons and information.",
    cards: [
      {
        id: "sofas",
        title: "Sofa cleaning",
        description: "Fabric assessment and technical on-site cleaning.",
        benefit: "Helps reduce dirt and odors and improve appearance.",
        cta: "Assess my sofa",
        message:
          "Hi, Jesus Clean! I would like a sofa assessment. I will send photos, seat count and my area.",
      },
      {
        id: "colchoes",
        title: "Mattress cleaning",
        description: "A process guided by fabric and item condition.",
        benefit: "Contributes to a cleaner, more comfortable surface.",
        cta: "Assess my mattress",
        message:
          "Hi, Jesus Clean! I would like a mattress assessment. I will send photos and size.",
      },
      {
        id: "poltronas-cadeiras",
        title: "Armchairs and chairs",
        description: "Service for individual items or sets.",
        benefit: "Attention to details, seams and high-use areas.",
        cta: "Assess my items",
        message:
          "Hi, Jesus Clean! I would like to assess armchairs or chairs.",
      },
      {
        id: "tapetes",
        title: "Rugs",
        description: "Material, size and condition are assessed first.",
        benefit: "Cleaning is guided by fiber type and room use.",
        cta: "Assess my rug",
        message:
          "Hi, Jesus Clean! I would like a rug assessment. I will send photos and approximate size.",
      },
      {
        id: "automotivos",
        title: "Car seats",
        description: "Cleaning for seats and other upholstered surfaces.",
        benefit: "Helps renew the interior and reduce accumulated residue.",
        cta: "Assess my vehicle",
        message:
          "Hi, Jesus Clean! I would like a car seat assessment.",
      },
      {
        id: "multiplas-pecas",
        title: "Multiple items",
        description: "A combined assessment for different upholstery types.",
        benefit: "Organizes service around the item combination.",
        cta: "Assess a set",
        message:
          "Hi, Jesus Clean! I would like to assess multiple items.",
      },
      {
        id: "residencial-comercial",
        title: "Residential and commercial",
        description: "Scheduled service for homes, businesses and condos.",
        benefit: "Scope and site access are aligned before booking.",
        cta: "Check service",
        message:
          "Hi, Jesus Clean! I would like to check residential or commercial service.",
      },
    ],
  },
  infant: {
    eyebrow: "Care for family routines",
    title: "Special cleaning for baby and children's items",
    text:
      "Strollers, infant seats, children's mattresses, rugs and other upholstery collect residue and odors. Each fabric and item is assessed.",
    benefits: ["Fabric care", "More comfort for daily life", "On-site service"],
    items: [
      "Baby stroller",
      "Infant car seat",
      "Child safety seat",
      "Children's mattress",
      "Nursery rugs",
      "Upholstery used by children",
    ],
    cta: "Clean children's items",
    whatsappMessage:
      "Hi, Jesus Clean! I would like children's items assessed. I will send photos and quantities.",
  },
  beforeAfter: {
    eyebrow: "Before and after",
    title: "Results you can see",
    text: "See transformations completed by Jesus Clean.",
    ariaLabel: "Real upholstery cleaning results",
  },
  specialist: {
    ...ptBR.specialist,
    eyebrow: "About us",
    title: "Professional care from first contact to the final result.",
    body:
      "Jesus Clean was created to provide professional cleaning with care, trust and visible results. Igor Jesus leads each service with attention to detail and commitment to every client.",
    imageAlt: "Igor Jesus, founder of Jesus Clean, wearing the blue brand uniform",
    captionText: "Founder of Jesus Clean",
    locationBadge: "Service in Rio de Janeiro",
    metricsAria: "Commercial indicators pending evidence",
    metrics: [
      { value: 900, prefix: "+", suffix: "", label: "Clients served" },
      { value: 100, prefix: "", suffix: "%", label: "Service in Rio" },
      { value: 5, prefix: "", suffix: "★", label: "Professional quality" },
    ],
    features: [
      {
        title: "Fabric care",
        text: "Each item is assessed before the cleaning approach is defined.",
      },
      {
        title: "Personal service",
        text: "Clear guidance for preparation, execution and drying.",
      },
    ],
    cta: "Talk to Igor on WhatsApp",
    instagramCta: "Instagram",
    whatsappMessage:
      "Hi, Igor! I found Jesus Clean online and would like an upholstery assessment.",
  },
  community: {
    ...ptBR.community,
    eyebrow: "Why choose Jesus Clean",
    title: "Four pillars in every service.",
    body:
      "An organized experience with item assessment, careful execution and clear guidance.",
    imageAlt:
      "Igor Jesus wearing a blue uniform in a residential service setting",
    testimonialsTitle: "Service pillars",
    noTestimonials: "No authorized review has been published.",
    pillars: [
      {
        title: "On-site service",
        text: "Jesus Clean visits your home or business at a scheduled time.",
      },
      {
        title: "Specific care",
        text: "Fabric, size and current condition are part of the initial assessment.",
      },
      {
        title: "Professional process",
        text: "The service is organized to clean the item at your location.",
      },
      {
        title: "Visible result",
        text: "Close communication and guidance for the drying stage.",
      },
    ],
    cta: "Assess my item",
    whatsappMessage:
      "Hi, Jesus Clean! I would like an item assessment and more details about the process.",
  },
  practical: {
    ...ptBR.practical,
    eyebrow: "How it works",
    title: "How the service works",
    body:
      "Request an assessment and receive guidance to schedule the cleaning.",
    stepsAria: "Service steps",
    steps: [
      {
        number: "01",
        title: "Send photos on WhatsApp",
        text: "Show the item, quantity and the main areas you want cleaned.",
      },
      {
        number: "02",
        title: "Receive an assessment",
        text:
          "The team reviews the item, fabric, size, condition and location.",
      },
      {
        number: "03",
        title: "Schedule the service",
        text:
          "Choose an available date for Jesus Clean to visit your home or business.",
      },
      {
        number: "04",
        title: "Receive the cleaning",
        text:
          "The service is completed on-site and you receive drying guidance.",
      },
    ],
    firstClass: {
      eyebrow: "Initial assessment",
      title: "Photos and context help guide the service.",
      text:
        "The pre-quote considers the item, fabric, size, condition and location. Prices are not calculated automatically.",
    },
    facts: [
      { label: "Contact", value: "Photo-based pre-quote" },
      { label: "Area", value: "Several areas in Rio" },
      { label: "Items", value: "Residential and commercial" },
      { label: "Schedule", value: "Availability confirmed" },
      { label: "Service", value: "Completed on-site" },
    ],
    checklistTitle: "What to send",
    checklist: [
      "General photos and detail shots",
      "Item type and quantity",
      "Service neighborhood",
      "Preferred timing",
    ],
    primaryCta: "Request an assessment",
    secondaryCta: "Redo pre-quote",
    whatsappMessage:
      "Hi, Jesus Clean! I would like to send details and photos for an initial assessment.",
  },
  classProfiles: {
    ...ptBR.classProfiles,
    heading: "Most common requests",
    ariaLabel: "Featured services carousel",
    previous: "Previous service",
    next: "Next service",
    dots: "Service indicators",
    dot: "Go to service {index}",
    progress: "Service {current} of {total}",
    audienceLabel: "Best for",
    profiles: {
      sofa: {
        title: "Sofa cleaning",
        description: "Fabric assessment and professional on-site cleaning.",
        audience: "Sofas with accumulated dirt, odors or a worn appearance.",
        cta: "Assess my sofa",
        whatsappMessage:
          "Hi, Jesus Clean! I would like a sofa assessment and will send photos.",
      },
      mattress: {
        title: "Mattress cleaning",
        description:
          "A process guided by the material, size and condition of the item.",
        audience: "Mattresses that need deep cleaning or maintenance.",
        cta: "Assess my mattress",
        whatsappMessage:
          "Hi, Jesus Clean! I would like a mattress assessment and will send photos.",
      },
      combo: {
        title: "Multiple items",
        description:
          "Organize the assessment of sofas, chairs, armchairs and other upholstery.",
        audience: "Homes, businesses and condominiums with several items.",
        cta: "Assess multiple items",
        whatsappMessage:
          "Hi, Jesus Clean! I would like to assess multiple items and will send photos and quantities.",
      },
    },
  },
  location: {
    ...ptBR.location,
    eyebrow: "Service area",
    title: "Service across several areas of Rio de Janeiro",
    body:
      "Jesus Clean visits homes, businesses and condominiums with scheduled appointments.",
    meetingLabel: "Service mode",
    meetingPoint: "On-site appointments",
    neighborhoodAndCity: "Rio de Janeiro, RJ",
    exactNote: "Neighborhood and availability are confirmed before booking.",
    route: "Send location",
    cta: "Check my area",
    mapTitle: "Service area representation",
    mapPendingTitle: "Mobile service in Rio de Janeiro",
    mapPendingText:
      "No private address or fixed map is shown. Contact us to confirm your area.",
    regionsLabel: "Areas covered on request",
    regions: [
      "South Zone",
      "North Zone",
      "West Zone",
      "Downtown",
      "Barra and Recreio",
      "Tijuca and Méier",
      "Baixada and nearby areas on request",
    ],
    whatsappMessage:
      "Hi, Jesus Clean! I would like to check whether you serve my neighborhood. My location is:",
  },
  faq: {
    ...ptBR.faq,
    eyebrow: "Frequently asked questions",
    title: "Clear information before your appointment.",
    text: "Timing, results and availability depend on each item assessment.",
    cta: "Ask on WhatsApp",
    whatsappMessage:
      "Hi, Jesus Clean! I read the FAQ and would like further guidance.",
    items: [
      {
        id: "duracao-higienizacao",
        question: "How long does the cleaning take?",
        answer:
          "Timing varies with item type, size and condition. An estimate is provided after the photo assessment and confirmed when booking.",
      },
      {
        id: "tempo-secagem",
        question: "How long does upholstery take to dry?",
        answer:
          "Drying depends on fabric, ventilation, weather and humidity. Specific guidance is provided after the service.",
      },
      {
        id: "remove-manchas",
        question: "Does cleaning remove every stain?",
        answer:
          "Complete removal cannot be guaranteed. Results vary by fabric, stain source, time and previous products.",
      },
      {
        id: "reduz-odores",
        question: "Can the process reduce odors?",
        answer:
          "Deep cleaning may help reduce odors linked to residue and dirt. Results vary by source and duration.",
      },
      {
        id: "tipos-atendidos",
        question: "Which upholstery items are serviced?",
        answer:
          "Sofas, mattresses, armchairs, chairs, rugs, car seats and children's items are among the solutions, subject to assessment.",
      },
      {
        id: "retirar-sofa",
        question: "Must the sofa be moved out?",
        answer:
          "The service is completed on-site. The team provides guidance on the required workspace beforehand.",
      },
      {
        id: "pre-orcamento-foto",
        question: "How does a photo-based pre-quote work?",
        answer:
          "Send photos, quantity, fabric type when known, main issue and location. Final conditions depend on assessment.",
      },
      {
        id: "empresas-condominios",
        question: "Do you serve businesses and condominiums?",
        answer:
          "Residential and commercial service is planned. Scope, access and item quantity must be confirmed.",
      },
      {
        id: "regioes",
        question: "Which areas do you serve?",
        answer:
          "Several Rio de Janeiro areas are covered, subject to schedule and location confirmation.",
      },
      {
        id: "agendar",
        question: "How do I book?",
        answer:
          "Send photos and basic details on WhatsApp. After the assessment, the team shares conditions and available dates.",
      },
    ],
  },
  finalCta: {
    ...ptBR.finalCta,
    eyebrow: "Photo-based pre-quote",
    title: "Your upholstery can look new again",
    text:
      "Send a photo and receive guidance for cleaning your sofa, mattress, rug or other upholstery.",
    primary: "Request a quote on WhatsApp",
    secondary: "Start pre-quote",
    visualTop: "Scheduled service",
    visualStrong: "Care in every detail",
    whatsappMessage:
      "Hi, Jesus Clean! I would like to send photos and request a pre-quote.",
  },
  footer: {
    ...ptBR.footer,
    description:
      "Professional residential and commercial upholstery cleaning in Rio de Janeiro.",
    whatsappMessage:
      "Hi, Jesus Clean! I came from the website and would like an assessment.",
    navigationTitle: "Navigation",
    infoTitle: "Service",
    serviceLanguages: "Rio de Janeiro • subject to confirmation",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    cookiePreferences: "Cookie preferences",
  },
  floating: {
    ariaLabel: "Message Jesus Clean on WhatsApp",
    message:
      "Hi, Jesus Clean! I would like to send photos and request a pre-quote.",
  },
  consent: {
    ...ptBR.consent,
    eyebrow: "Privacy",
    title: "You control cookies.",
    text:
      "Essential cookies keep the website working. Analytics and marketing are enabled only with your permission.",
    privacyLink: "View privacy policy",
    optionsAria: "Cookie preferences",
    essentialTitle: "Essential",
    essentialText: "Required for navigation and security.",
    analyticsTitle: "Analytics",
    analyticsText: "Helps us understand sections, CTAs and campaign sources.",
    marketingTitle: "Marketing",
    marketingText: "Enables media pixels when a real ID is configured.",
    reject: "Reject",
    customize: "Customize",
    save: "Save preferences",
    accept: "Accept",
  },
  privacy: {
    ...ptBR.privacy,
    metadataTitle: "Privacy policy",
    back: "Back to the landing page",
    eyebrow: "Privacy",
    title: "Initial privacy policy",
    intro:
      "This page describes the initial privacy structure for Jesus Clean. Final legal validation depends on legal identity, tax ID, privacy email and formal retention periods.",
    sections: [
      {
        title: "Information you provide",
        text:
          "The quiz or WhatsApp conversation may include item type, quantity, issue, area, timing and information you choose to send.",
      },
      {
        title: "Technical data",
        text:
          "With consent, the website may record navigation events and campaign source data.",
      },
      {
        title: "Cookies and consent",
        text:
          "Essential cookies support basic functions. Analytics and marketing require your choice.",
      },
      {
        title: "Sharing",
        text:
          "Google Analytics, Google Tag Manager and Meta Pixel load only with real IDs and compatible consent.",
      },
      {
        title: "Pending details",
        text:
          "Legal name, tax ID, privacy email, legal basis and retention periods require validation.",
      },
    ],
  },
  whatsapp: {
    defaultMessage:
      "Hi, Jesus Clean! I would like to send photos and request a pre-quote.",
    quizAnswersTitle: "Pre-quote answers:",
    campaignTitle: "Campaign source:",
    origin: "Click origin",
    section: "Section",
    cta: "CTA",
  },
} as const;
