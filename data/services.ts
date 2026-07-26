import {
  Armchair,
  Baby,
  BedDouble,
  Building2,
  CarFront,
  Layers3,
  Sofa,
} from "lucide-react";

export const serviceCatalog = [
  {
    id: "sofas",
    icon: Sofa,
    asset: null,
  },
  {
    id: "colchoes",
    icon: BedDouble,
    asset: null,
  },
  {
    id: "tapetes",
    icon: Layers3,
    asset: null,
  },
  {
    id: "poltronas-cadeiras",
    icon: Armchair,
    asset: null,
  },
  {
    id: "automotivos",
    icon: CarFront,
    asset: null,
  },
  {
    id: "multiplas-pecas",
    icon: Baby,
    asset: null,
  },
  {
    id: "residencial-comercial",
    icon: Building2,
    asset: null,
  },
] as const;
