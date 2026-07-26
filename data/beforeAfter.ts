export type BeforeAfterItem = {
  id: string;
  src: string;
  alt: string;
  service: string;
  region?: string;
  width: number;
  height: number;
};

// O carrossel só é renderizado quando houver pelo menos duas fotos reais,
// autorizadas e validadas. Não usamos as mídias antigas nem placeholders.
export const beforeAfterItems: readonly BeforeAfterItem[] = [];
