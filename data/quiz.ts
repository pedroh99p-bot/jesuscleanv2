import type { Dictionary } from "@/i18n/dictionaries";

export type QuizQuestionId =
  | "item_type"
  | "quantity"
  | "main_problem"
  | "region"
  | "timing";

export type QuizOption = {
  id: string;
  label: string;
};

export type QuizQuestion = {
  id: QuizQuestionId;
  question: string;
  options: QuizOption[];
};

export type LocalizedQuizQuestion = {
  readonly id: QuizQuestionId;
  readonly question: string;
  readonly options: readonly QuizOption[];
};

export type QuizAnswers = Partial<Record<QuizQuestionId, string>>;
export type QuizAnswerLabels = Partial<Record<QuizQuestionId, string>>;

const questionEmojis: Record<QuizQuestionId, string> = {
  item_type: "🧼",
  quantity: "🔢",
  main_problem: "🔎",
  region: "📍",
  timing: "📅",
};

const optionEmojis: Record<string, string> = {
  sofa: "🛋️",
  mattress: "🛏️",
  chairs: "🪑",
  rug: "🧶",
  car_seat: "🚗",
  multiple: "🧺",
  one: "1️⃣",
  two: "2️⃣",
  three_four: "3️⃣",
  five_plus: "5️⃣",
  odor: "👃",
  stains: "🎯",
  deep_dirt: "🧹",
  maintenance: "✨",
  south: "🌊",
  north: "🧭",
  west: "🌅",
  center: "🏙️",
  other: "📌",
  asap: "⚡",
  this_week: "📆",
  next_week: "🗓️",
  researching: "🔍",
};

export function getQuizQuestionEmoji(id: QuizQuestionId) {
  return questionEmojis[id];
}

export function getQuizOptionEmoji(id: string) {
  return optionEmojis[id] ?? "✨";
}

export function getQuizAnswerLabels(
  answers: QuizAnswers,
  questions: readonly LocalizedQuizQuestion[],
): QuizAnswerLabels {
  return questions.reduce<QuizAnswerLabels>((labels, question) => {
    const selected = answers[question.id];
    const option = question.options.find((item) => item.id === selected);
    if (option) labels[question.id] = option.label;
    return labels;
  }, {});
}

export function getQuizResult(answers: QuizAnswers, t: Dictionary) {
  void answers;
  return t.quiz.results.ready;
}

export function buildQuizWhatsAppMessage(
  labels: QuizAnswerLabels,
  t: Dictionary,
) {
  const lines = (Object.keys(t.quiz.labels) as QuizQuestionId[]).map((id) => {
    const label = t.quiz.labels[id];
    return `${label}: ${labels[id] ?? t.quiz.notInformed}`;
  });

  return [t.quiz.whatsappIntro, "", ...lines, "", t.quiz.whatsappOutro].join(
    "\n",
  );
}
