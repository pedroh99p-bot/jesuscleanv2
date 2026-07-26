"use client";

import { Compass, MapPin, MapPinned, Send, ShieldCheck } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import { WhatsAppButton } from "./WhatsAppButton";

export function LocationSection() {
  const { t } = useTranslations();

  return (
    <section
      className="location-section"
      id="atendimento"
      aria-labelledby="location-title"
    >
      <span className="anchor-sentinel" id="localizacao" aria-hidden="true" />
      <div className="section-shell location-section__layout">
        <div className="location-section__copy">
          <div className="location-section__heading">
            <span>{t.location.eyebrow}</span>
            <h2 id="location-title">{t.location.title}</h2>
            <p>{t.location.body}</p>
          </div>

          <div className="meeting-card">
            <MapPin aria-hidden="true" />
            <span>{t.location.meetingLabel}</span>
            <h3>{t.location.meetingPoint}</h3>
            <p>{t.location.neighborhoodAndCity}</p>
            <small>
              <ShieldCheck aria-hidden="true" />
              {t.location.exactNote}
            </small>
          </div>

          <div className="location-section__actions">
            <WhatsAppButton
              origin="location"
              section="atendimento"
              ctaId="location-send"
              variant="soft"
              message={t.location.whatsappMessage}
            >
              <Send aria-hidden="true" />
              {t.location.route}
            </WhatsAppButton>
            <WhatsAppButton
              origin="location"
              section="atendimento"
              ctaId="location-whatsapp"
              message={t.location.whatsappMessage}
            >
              {t.location.cta}
            </WhatsAppButton>
          </div>
        </div>

        <div className="location-map location-map--regions">
          <div className="location-map__fallback">
            <Compass aria-hidden="true" />
            <h3>{t.location.mapPendingTitle}</h3>
            <p>{t.location.mapPendingText}</p>
            <strong>{t.location.regionsLabel}</strong>
            <ul>
              {t.location.regions.map((region) => (
                <li key={region}>
                  <MapPinned aria-hidden="true" />
                  <span>{region}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
