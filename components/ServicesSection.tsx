"use client";

import { CheckCircle2 } from "lucide-react";
import { serviceCatalog } from "@/data/services";
import { useTranslations } from "@/i18n/useTranslations";
import { DraggableCarousel } from "./DraggableCarousel";
import { WhatsAppButton } from "./WhatsAppButton";

export function ServicesSection() {
  const { t } = useTranslations();

  return (
    <section className="services-section" id="servicos" aria-labelledby="services-title">
      <div className="section-shell">
        <div className="section-copy">
          <span>{t.services.eyebrow}</span>
          <h2 id="services-title">{t.services.title}</h2>
          <p>{t.services.text}</p>
        </div>
        <DraggableCarousel
          className="services-section__carousel"
          trackClassName="services-section__grid"
          itemCount={serviceCatalog.length}
          ariaLabel={t.services.title}
          previousLabel={`${t.services.title}: ${t.classProfiles.previous}`}
          nextLabel={`${t.services.title}: ${t.classProfiles.next}`}
        >
          {serviceCatalog.map((service, index) => {
            const copy = t.services.cards.find((card) => card.id === service.id);
            if (!copy) return null;
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                data-carousel-card={index}
                aria-label={`${index + 1} / ${serviceCatalog.length}: ${copy.title}`}
              >
                <div className="services-section__icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{copy.title}</h3>
                <p>{copy.description}</p>
                <span>
                  <CheckCircle2 aria-hidden="true" />
                  {copy.benefit}
                </span>
                <WhatsAppButton
                  origin="class_profile"
                  section="servicos"
                  ctaId={`service-${service.id}`}
                  variant="soft"
                  message={copy.message}
                >
                  {copy.cta}
                </WhatsAppButton>
              </article>
            );
          })}
        </DraggableCarousel>
      </div>
    </section>
  );
}
