"use client";

import Image from "next/image";
import { beforeAfterItems } from "@/data/beforeAfter";
import { useTranslations } from "@/i18n/useTranslations";

export function BeforeAfterInfiniteCarousel() {
  const { t } = useTranslations();

  if (beforeAfterItems.length < 2) return null;

  const group = (hidden: boolean) => (
    <div
      className="before-after__group"
      aria-hidden={hidden ? "true" : undefined}
    >
      {beforeAfterItems.map((item) => (
        <figure key={`${hidden ? "copy" : "original"}-${item.id}`}>
          <Image
            src={item.src}
            alt={hidden ? "" : item.alt}
            width={item.width}
            height={item.height}
            sizes="(max-width: 600px) 82vw, 420px"
            loading="lazy"
          />
          {!hidden ? <figcaption>{item.service}</figcaption> : null}
        </figure>
      ))}
    </div>
  );

  return (
    <section
      className="before-after"
      id="resultados"
      aria-labelledby="before-after-title"
    >
      <div className="section-shell section-copy">
        <span>{t.beforeAfter.eyebrow}</span>
        <h2 id="before-after-title">{t.beforeAfter.title}</h2>
        <p>{t.beforeAfter.text}</p>
      </div>
      <div className="before-after__viewport" aria-label={t.beforeAfter.ariaLabel}>
        <div className="before-after__track">
          {group(false)}
          {group(true)}
        </div>
      </div>
    </section>
  );
}
