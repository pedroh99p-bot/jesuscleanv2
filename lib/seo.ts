import { business } from "@/data/business";
import { faqItems } from "@/data/faq";

export const siteTitle =
  "Higienização de Estofados no Rio de Janeiro | Jesus Clean";

export const siteDescription =
  "Higienização profissional de sofás, colchões, poltronas, tapetes e estofados no Rio de Janeiro. Envie fotos pelo WhatsApp e solicite seu pré-orçamento.";

function compact<T extends Record<string, unknown>>(value: T) {
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => item !== null && item !== undefined),
  );
}

export function getLocalBusinessJsonLd() {
  return compact({
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${business.siteUrl}/#business`,
    name: business.name,
    url: business.isPublicSiteConfigured ? business.siteUrl : undefined,
    telephone: business.phone ? `+${business.phone}` : undefined,
    image: [
      `${business.siteUrl}${business.assets.logo}`,
      `${business.siteUrl}${business.assets.specialistPortrait}`,
    ],
    logo: `${business.siteUrl}${business.assets.logo}`,
    description: business.service,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.locale.city,
      addressRegion: business.locale.state,
      addressCountry: "BR",
    },
    areaServed: business.regions.map((region) => ({
      "@type": "Place",
      name: `${region}, ${business.locale.city}`,
    })),
    sameAs: business.instagramUrl ? [business.instagramUrl] : undefined,
  });
}

export function getServiceJsonLd() {
  return {
    "@type": "Service",
    "@id": `${business.siteUrl}/#service`,
    name: "Higienização profissional de estofados",
    serviceType: "Higienização de estofados",
    description: business.service,
    provider: {
      "@id": `${business.siteUrl}/#business`,
    },
    areaServed: {
      "@type": "City",
      name: business.locale.city,
    },
    availableLanguage: ["pt-BR", "en", "es"],
  };
}

export function getPersonJsonLd() {
  return {
    "@type": "Person",
    "@id": `${business.siteUrl}/#igor-jesus`,
    name: business.specialist,
    jobTitle: business.role,
    image: `${business.siteUrl}${business.assets.specialistPortrait}`,
    worksFor: {
      "@id": `${business.siteUrl}/#business`,
    },
  };
}

export function getFaqJsonLd() {
  return {
    "@type": "FAQPage",
    "@id": `${business.siteUrl}/#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessJsonLd(),
      getServiceJsonLd(),
      getPersonJsonLd(),
      getFaqJsonLd(),
    ],
  };
}
