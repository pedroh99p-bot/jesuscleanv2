const rawPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
const phone = /^55\d{10,11}$/.test(rawPhone) ? rawPhone : null;
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || null;
const configuredInstagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() || null;

export const business = {
  name: "Jesus Clean",
  specialist: "Igor Jesus",
  role: "Fundador da Jesus Clean",
  service:
    "Higienização profissional de estofados residenciais e comerciais no Rio de Janeiro.",
  publicSiteUrl: configuredSiteUrl,
  siteUrl: configuredSiteUrl ?? "http://localhost:3000",
  isPublicSiteConfigured: Boolean(configuredSiteUrl),
  phone,
  whatsappConfigured: Boolean(phone),
  whatsappBase: phone ? `https://wa.me/${phone}` : null,
  whatsapp: {
    defaultMessage:
      "Olá, Jesus Clean! Gostaria de enviar fotos e solicitar um pré-orçamento de higienização.",
    messages: {
      hero:
        "Olá, Jesus Clean! Quero avaliar meu estofado e solicitar um pré-orçamento.",
      specialist:
        "Olá, Igor! Conheci a Jesus Clean pelo site e gostaria de avaliar meu estofado.",
      services:
        "Olá, Jesus Clean! Quero saber mais sobre a higienização de estofados.",
      infant:
        "Olá, Jesus Clean! Quero avaliar itens infantis para higienização.",
      location:
        "Olá, Jesus Clean! Quero confirmar se vocês atendem minha região.",
      final:
        "Olá, Jesus Clean! Quero enviar fotos e solicitar um pré-orçamento.",
    },
  },
  instagramHandle: "@jesus.clean",
  instagramUrl: configuredInstagram,
  locale: {
    city: "Rio de Janeiro",
    state: "RJ",
    serviceMode: "Atendimento em domicílio",
  },
  regions: [
    "Zona Sul",
    "Zona Norte",
    "Zona Oeste",
    "Centro",
    "Barra e Recreio",
    "Tijuca e Méier",
    "Baixada e entorno sob consulta",
  ],
  location: {
    publicAddress: null,
    routeUrl: null,
    mapEmbedSrc: null,
    coordinates: null,
    mapStatus: "disabled_pending_public_location",
  },
  claims: {
    clientsServed: 900,
    clientsServedPrefix: "+",
    rating: 5,
    ratingSuffix: "★",
    coverage: 100,
    coverageSuffix: "%",
  },
  urgencyCampaign: {
    enabled: false,
    title: "Atendimento agendado no Rio de Janeiro",
    description:
      "Envie fotos para receber uma avaliação inicial e consultar disponibilidade.",
    validUntil: null,
    cta: "Consultar disponibilidade",
  },
  assets: {
    heroVideo: "/assets/hero/hero-background.mp4",
    heroPoster: "/assets/hero/hero-poster.webp",
    introVideo: "/assets/video/jesus-clean-introduction.mp4",
    introPoster: "/assets/video/jesus-clean-introduction-poster.webp",
    logo: "/assets/brand/jesus-clean-logo.webp",
    pillarsImage: "/assets/pillars/four-pillars.webp",
    specialistPortrait: "/assets/specialist/igor-jesus.webp",
    socialImage: "/assets/pillars/four-pillars.webp",
  },
  analytics: {
    origin: "landing_page_jesus_clean",
    campaign: null,
  },
  privacy: {
    legalName: null,
    taxId: null,
    contactEmail: null,
  },
  productionCredit: {
    name: "MONTANA",
    url: null as string | null,
  },
} as const;
