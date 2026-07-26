"use client";

import { ArrowDown, BedDouble, MapPin, Sofa, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { business } from "@/data/business";
import { useTranslations } from "@/i18n/useTranslations";
import { WhatsAppButton } from "./WhatsAppButton";

const benefitIcons = [Sparkles, Sofa, BedDouble, MapPin] as const;
const heroReadyEvent = "jesusclean:hero-ready";

export function Hero() {
  const { t } = useTranslations();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    let dispatched = false;
    let playbackRetry = 0;
    let playbackFrame = 0;
    let playbackPulse = 0;
    let pauseRetry = 0;

    const markReady = () => {
      if (dispatched) return;
      dispatched = true;
      window.dispatchEvent(new Event(heroReadyEvent));
    };

    if (!video) {
      window.requestAnimationFrame(markReady);
      return;
    }

    const startPlayback = () => {
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      video.defaultMuted = true;
      video.muted = true;
      video.volume = 0;
      video.controls = false;
      video.disablePictureInPicture = true;
      video.setAttribute("autoplay", "");
      video.setAttribute("loop", "");
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.removeAttribute("controls");
      void video.play().catch(() => {
        // O poster continua visível se o navegador bloquear autoplay.
      });
    };

    const resumeWhenVisible = () => {
      if (!document.hidden) startPlayback();
    };

    const resumeAfterPause = () => {
      if (document.hidden || video.ended) return;
      if (pauseRetry) window.clearTimeout(pauseRetry);
      pauseRetry = window.setTimeout(startPlayback, 120);
    };

    startPlayback();
    playbackFrame = window.requestAnimationFrame(startPlayback);
    playbackRetry = window.setTimeout(startPlayback, 240);
    playbackPulse = window.setInterval(() => {
      if (!document.hidden && video.paused) startPlayback();
    }, 700);

    if (video.readyState >= 2) {
      window.requestAnimationFrame(markReady);
    } else {
      video.addEventListener("loadeddata", markReady, { once: true });
      video.addEventListener("canplay", markReady, { once: true });
      video.addEventListener("error", markReady, { once: true });
    }

    video.addEventListener("loadedmetadata", startPlayback);
    video.addEventListener("loadeddata", startPlayback);
    video.addEventListener("canplay", startPlayback);
    video.addEventListener("pause", resumeAfterPause);
    window.addEventListener("pageshow", startPlayback);
    window.addEventListener("focus", startPlayback);
    window.addEventListener("online", startPlayback);
    window.addEventListener("pointerdown", startPlayback, { once: true });
    window.addEventListener("touchstart", startPlayback, {
      once: true,
      passive: true,
    });
    window.addEventListener("scroll", startPlayback, {
      once: true,
      passive: true,
    });
    document.addEventListener("visibilitychange", resumeWhenVisible);

    return () => {
      if (playbackFrame) window.cancelAnimationFrame(playbackFrame);
      if (playbackRetry) window.clearTimeout(playbackRetry);
      if (playbackPulse) window.clearInterval(playbackPulse);
      if (pauseRetry) window.clearTimeout(pauseRetry);
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("error", markReady);
      video.removeEventListener("loadedmetadata", startPlayback);
      video.removeEventListener("loadeddata", startPlayback);
      video.removeEventListener("canplay", startPlayback);
      video.removeEventListener("pause", resumeAfterPause);
      window.removeEventListener("pageshow", startPlayback);
      window.removeEventListener("focus", startPlayback);
      window.removeEventListener("online", startPlayback);
      window.removeEventListener("pointerdown", startPlayback);
      window.removeEventListener("touchstart", startPlayback);
      window.removeEventListener("scroll", startPlayback);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
    };
  }, []);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      {/* Hero video configured to loop indefinitely with autoplay, muted, and playsinline */}
      <video
        ref={videoRef}
        className="hero__background-video"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
        preload="auto"
        poster={business.assets.heroPoster}
        src={business.assets.heroVideo}
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__copy">
          <div className="eyebrow">
            <MapPin aria-hidden="true" size={18} />
            {t.hero.eyebrow}
          </div>
          <h1 id="hero-title">
            {t.hero.title} <span>{t.hero.titleHighlight}</span>
          </h1>
          <p>{t.hero.body}</p>
          <div className="hero__actions">
            <WhatsAppButton
              origin="hero"
              section="hero"
              ctaId="hero-primary"
              message={t.hero.whatsappMessage}
            >
              {t.hero.primaryCta}
            </WhatsAppButton>
            <a className="secondary-link" href="#quiz">
              <ArrowDown aria-hidden="true" size={18} />
              {t.hero.secondaryCta}
            </a>
          </div>
          <ul className="hero__chips" aria-label={t.hero.chipsAria}>
            {t.hero.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index] ?? Sparkles;
              return (
                <li key={benefit}>
                  <Icon aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
