"use client";

import { Baby, CheckCircle2, HeartHandshake, Home } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import { WhatsAppButton } from "./WhatsAppButton";

const benefitIcons = [HeartHandshake, Baby, Home] as const;
const infantEmojis = [
  { emoji: "🧸", className: "infant-emoji--bear-one" },
  { emoji: "🍼", className: "infant-emoji--bottle-one" },
  { emoji: "👶", className: "infant-emoji--baby" },
  { emoji: "🧩", className: "infant-emoji--puzzle" },
  { emoji: "🎈", className: "infant-emoji--balloon" },
  { emoji: "🛁", className: "infant-emoji--bath" },
  { emoji: "🧸", className: "infant-emoji--bear-two" },
  { emoji: "🍼", className: "infant-emoji--bottle-two" },
  { emoji: "🧼", className: "infant-emoji--soap" },
  { emoji: "🧒", className: "infant-emoji--child" },
] as const;

export function InfantSection() {
  const { t } = useTranslations();

  return (
    <section className="infant-section" id="infantil" aria-labelledby="infant-title">
      <div className="infant-section__emoji-cloud" aria-hidden="true">
        {infantEmojis.map(({ emoji, className }, index) => (
          <span className={className} key={`${emoji}-${index}`}>
            {emoji}
          </span>
        ))}
      </div>
      <div className="section-shell infant-section__layout">
        <div className="infant-section__copy">
          <span>{t.infant.eyebrow}</span>
          <h2 id="infant-title">{t.infant.title}</h2>
          <p>{t.infant.text}</p>
          <div className="infant-section__benefits">
            {t.infant.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index] ?? CheckCircle2;
              return (
                <div key={benefit}>
                  <Icon aria-hidden="true" />
                  <span>{benefit}</span>
                </div>
              );
            })}
          </div>
          <WhatsAppButton
            origin="class_profile"
            section="infantil"
            ctaId="infant-whatsapp"
            message={t.infant.whatsappMessage}
          >
            {t.infant.cta}
          </WhatsAppButton>
        </div>
        <ul className="infant-section__items">
          {t.infant.items.map((item) => (
            <li key={item}>
              <CheckCircle2 aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
