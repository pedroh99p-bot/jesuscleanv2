"use client";

import { Frown, Layers3, ScanLine, Wind } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import { DraggableCarousel } from "./DraggableCarousel";
import { WhatsAppButton } from "./WhatsAppButton";

const icons = [Wind, ScanLine, Layers3, Frown] as const;

export function ProblemSection() {
  const { t } = useTranslations();

  return (
    <section className="problem-section" id="solucoes" aria-labelledby="problem-title">
      <div className="section-shell">
        <div className="section-copy">
          <span>{t.problems.eyebrow}</span>
          <h2 id="problem-title">{t.problems.title}</h2>
          <p>{t.problems.text}</p>
        </div>
        <DraggableCarousel
          className="problem-section__carousel"
          trackClassName="problem-section__grid"
          itemCount={t.problems.items.length}
          ariaLabel={t.problems.title}
          previousLabel={`${t.problems.title}: ${t.classProfiles.previous}`}
          nextLabel={`${t.problems.title}: ${t.classProfiles.next}`}
        >
          {t.problems.items.map((item, index) => {
            const Icon = icons[index] ?? ScanLine;
            return (
              <article
                key={item.title}
                data-carousel-card={index}
                aria-label={`${index + 1} / ${t.problems.items.length}: ${item.title}`}
              >
                <Icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <WhatsAppButton
                  origin="objections"
                  section="solucoes"
                  ctaId={`problem-${index + 1}`}
                  variant="ghost"
                  message={item.message}
                >
                  {item.cta}
                </WhatsAppButton>
              </article>
            );
          })}
        </DraggableCarousel>
        <p className="problem-section__disclaimer">{t.problems.disclaimer}</p>
      </div>
    </section>
  );
}
