import { business } from "./business";

export const links = {
  whatsapp: business.whatsappBase,
  instagram: business.instagramUrl,
  route: business.location.routeUrl,
} as const;
