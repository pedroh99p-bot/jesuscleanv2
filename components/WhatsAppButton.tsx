"use client";

import { useEffect, useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import type { QuizAnswerLabels } from "@/data/quiz";
import {
  buildWhatsAppUrl,
  persistCampaignParams,
  resolveCampaignRecord,
  type WhatsAppOrigin,
} from "@/lib/whatsapp";
import { useTranslations } from "@/i18n/useTranslations";
import {
  trackEvent,
  trackLead,
  type AnalyticsEventName,
  type AnalyticsPayload,
} from "@/lib/analytics";
import { cx } from "@/lib/utils";

type WhatsAppButtonProps = {
  origin: WhatsAppOrigin;
  children: React.ReactNode;
  className?: string;
  message?: string;
  section?: string;
  ctaId?: string;
  quizData?: QuizAnswerLabels;
  trackingEvent?: AnalyticsEventName;
  trackingPayload?: AnalyticsPayload;
  qualifiedLead?: boolean;
  variant?: "primary" | "soft" | "ghost";
  icon?: boolean;
  ariaLabel?: string;
};

export function WhatsAppButton({
  origin,
  children,
  className,
  message,
  section,
  ctaId,
  quizData,
  trackingEvent,
  trackingPayload,
  qualifiedLead = true,
  variant = "primary",
  icon = true,
  ariaLabel,
}: WhatsAppButtonProps) {
  const { locale } = useTranslations();
  const fallback = useMemo(
    () => buildWhatsAppUrl({ origin, message, section, ctaId, quizData, locale }),
    [origin, message, section, ctaId, quizData, locale],
  );
  const [href, setHref] = useState(fallback);

  useEffect(() => {
    persistCampaignParams(window.location.search);
    const campaign = resolveCampaignRecord(window.location.search);

    setHref(
      buildWhatsAppUrl({
        origin,
        message,
        section,
        ctaId,
        quizData,
        campaign,
        locale,
      }),
    );
  }, [origin, message, section, ctaId, quizData, locale]);

  const payload: AnalyticsPayload = {
    section,
    cta_id: ctaId,
    link_url: href,
    ...trackingPayload,
  };

  const content = (
    <>
      {icon ? <MessageCircle aria-hidden="true" size={20} /> : null}
      <span>{children}</span>
    </>
  );

  if (!business.whatsappConfigured) {
    return (
      <button
        type="button"
        className={cx(
          "wa-button",
          `wa-button--${variant}`,
          "wa-button--disabled",
          className,
        )}
        disabled
        aria-label={ariaLabel ?? "WhatsApp pendente de configuração"}
        title="Número oficial de WhatsApp pendente"
      >
        {content}
      </button>
    );
  }

  return (
    <a
      className={cx("wa-button", `wa-button--${variant}`, className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => {
        if (origin === "hero") {
          trackEvent("hero_cta_click", payload);
        }

        if (trackingEvent) {
          trackEvent(trackingEvent, payload);
        }

        trackEvent("whatsapp_click", payload);

        if (qualifiedLead) {
          trackLead(payload);
        }
      }}
    >
      {content}
    </a>
  );
}
