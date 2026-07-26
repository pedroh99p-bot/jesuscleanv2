"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";
import { business } from "@/data/business";
import { navigation } from "@/data/navigation";
import { useTranslations } from "@/i18n/useTranslations";
import { WhatsAppButton } from "./WhatsAppButton";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { t } = useTranslations();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <>
      <div
        className={`mobile-overlay${open ? " mobile-overlay--open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`mobile-menu${open ? " mobile-menu--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-menu__top">
          <Image
            src={business.assets.brandIcon}
            alt={business.name}
            width={56}
            height={56}
          />
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label={t.header.closeMenu}
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <nav className="mobile-menu__links" aria-label={t.header.mobileNavAria}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={onClose}>
              {t.navigation[item.key]}
            </a>
          ))}
        </nav>
        <WhatsAppButton
          origin="hero"
          section="mobile-menu"
          ctaId="mobile-menu-whatsapp"
          className="mobile-menu__cta"
          message={t.header.whatsappMessage}
        >
          {t.header.mobileWhatsApp}
        </WhatsAppButton>
      </aside>
    </>
  );
}
