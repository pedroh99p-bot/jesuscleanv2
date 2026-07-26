"use client";

import Image from "next/image";
import { ClipboardCheck, Home, ScanSearch, Sparkles } from "lucide-react";
import { business } from "@/data/business";
import { useTranslations } from "@/i18n/useTranslations";
import { WhatsAppButton } from "./WhatsAppButton";

const pillarIcons = [Home, ScanSearch, ClipboardCheck, Sparkles] as const;

export function SocialProofSection() {
  const { t } = useTranslations();

  return (
    <section
      className="pillars-section"
      id="pilares"
      aria-labelledby="pillars-title"
    >
      <div className="section-shell pillars-section__layout">
        <div className="pillars-section__media">
          <Image
            src={business.assets.pillarsImage}
            alt={t.community.imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>

        <div className="pillars-section__content">
          <div className="pillars-section__heading">
            <span>{t.community.eyebrow}</span>
            <h2 id="pillars-title">{t.community.title}</h2>
            <p>{t.community.body}</p>
          </div>

          <div
            className="pillars-section__grid"
            aria-label={t.community.testimonialsTitle}
          >
            {t.community.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? Sparkles;
              return (
                <article key={pillar.title}>
                  <Icon aria-hidden="true" />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              );
            })}
          </div>

          <WhatsAppButton
            origin="social_proof"
            section="pilares"
            ctaId="pillars-whatsapp"
            variant="soft"
            message={t.community.whatsappMessage}
          >
            {t.community.cta}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
