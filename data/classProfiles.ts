export type ClassProfileId = "sofa" | "mattress" | "combo";

export type ClassProfile = {
  id: ClassProfileId;
  emoji: string;
  titleKey: string;
  descriptionKey: string;
  audienceKey: string;
  ctaKey: string;
  whatsappMessageKey: string;
  order: number;
  enabled: boolean;
};

export const classProfiles: ClassProfile[] = [
  {
    id: "sofa",
    emoji: "01",
    titleKey: "classProfiles.profiles.sofa.title",
    descriptionKey: "classProfiles.profiles.sofa.description",
    audienceKey: "classProfiles.profiles.sofa.audience",
    ctaKey: "classProfiles.profiles.sofa.cta",
    whatsappMessageKey: "classProfiles.profiles.sofa.whatsappMessage",
    order: 1,
    enabled: true,
  },
  {
    id: "mattress",
    emoji: "02",
    titleKey: "classProfiles.profiles.mattress.title",
    descriptionKey: "classProfiles.profiles.mattress.description",
    audienceKey: "classProfiles.profiles.mattress.audience",
    ctaKey: "classProfiles.profiles.mattress.cta",
    whatsappMessageKey: "classProfiles.profiles.mattress.whatsappMessage",
    order: 2,
    enabled: true,
  },
  {
    id: "combo",
    emoji: "03",
    titleKey: "classProfiles.profiles.combo.title",
    descriptionKey: "classProfiles.profiles.combo.description",
    audienceKey: "classProfiles.profiles.combo.audience",
    ctaKey: "classProfiles.profiles.combo.cta",
    whatsappMessageKey: "classProfiles.profiles.combo.whatsappMessage",
    order: 3,
    enabled: true,
  },
];

export function getEnabledClassProfiles() {
  return classProfiles
    .filter((profile) => profile.enabled)
    .sort((a, b) => a.order - b.order);
}
