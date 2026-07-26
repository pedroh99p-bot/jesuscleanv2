import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: `Política de privacidade | ${business.name}`,
  description:
    "Estrutura inicial de privacidade da Jesus Clean, incluindo cookies, analytics, marketing e pontos pendentes de validação.",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
