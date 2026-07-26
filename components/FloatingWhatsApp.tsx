"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  MessageCircle,
  RotateCcw,
  X,
} from "lucide-react";
import { business } from "@/data/business";
import {
  getQuizAnswerLabels,
  getQuizOptionEmoji,
  getQuizQuestionEmoji,
  type LocalizedQuizQuestion,
  type QuizAnswers,
  type QuizQuestionId,
} from "@/data/quiz";
import { useTranslations } from "@/i18n/useTranslations";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppButton } from "./WhatsAppButton";

function formatAssistantMessage(
  questions: readonly LocalizedQuizQuestion[],
  answers: QuizAnswers,
  intro: string,
  outro: string,
) {
  const labels = getQuizAnswerLabels(answers, questions);
  const details = questions.map((question) => {
    const label = question.question.replace(/[?.!]+$/, "").toLocaleUpperCase("pt-BR");
    const value = labels[question.id] ?? "Não informado";

    return `${getQuizQuestionEmoji(question.id)} *${label}*\n${value}`;
  });

  return [intro, "", "📋 *DADOS DO AGENDAMENTO*", ...details, "", outro].join(
    "\n",
  );
}

export function FloatingWhatsApp() {
  const { t } = useTranslations();
  const questions = t.quiz.questions as readonly LocalizedQuizQuestion[];
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [completed, setCompleted] = useState(false);
  const [assistantVisible, setAssistantVisible] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelTitleRef = useRef<HTMLHeadingElement>(null);
  const currentQuestion = questions[step];
  const labels = useMemo(
    () => getQuizAnswerLabels(answers, questions),
    [answers, questions],
  );
  const progress = completed
    ? 100
    : Math.round(((step + 1) / questions.length) * 100);
  const message = useMemo(
    () =>
      formatAssistantMessage(
        questions,
        answers,
        t.assistant.whatsappIntro,
        t.assistant.whatsappOutro,
      ),
    [answers, questions, t.assistant.whatsappIntro, t.assistant.whatsappOutro],
  );

  const openAssistant = () => {
    setOpen(true);
    trackEvent("assistant_open", {
      section: "floating_assistant",
      assistant_step: completed ? "resumo" : step + 1,
    });
  };

  const closeAssistant = () => {
    setOpen(false);
    window.requestAnimationFrame(() =>
      launcherRef.current?.focus({ preventScroll: true }),
    );
  };

  const selectAnswer = (answerId: string, answerLabel: string) => {
    if (!currentQuestion) return;

    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: answerId,
    };

    setAnswers(nextAnswers);
    trackEvent("assistant_answer", {
      section: "floating_assistant",
      assistant_step: step + 1,
      assistant_answer: answerLabel,
    });

    if (step === questions.length - 1) {
      setCompleted(true);
      trackEvent("assistant_complete", {
        section: "floating_assistant",
        answered_questions: questions.length,
      });
      return;
    }

    setStep((current) => Math.min(current + 1, questions.length - 1));
  };

  const goBack = () => {
    if (completed) {
      setCompleted(false);
      setStep(questions.length - 1);
      return;
    }

    setStep((current) => Math.max(0, current - 1));
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setCompleted(false);
  };

  useEffect(() => {
    if (open) {
      window.requestAnimationFrame(() =>
        panelTitleRef.current?.focus({ preventScroll: true }),
      );
    }
  }, [open]);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) {
      setAssistantVisible(window.scrollY > 0);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAssistantVisible(
          !entry.isIntersecting && entry.boundingClientRect.bottom <= 0,
        );
      },
      { threshold: 0 },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) closeAssistant();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!assistantVisible && !open) return null;

  return (
    <aside className="scheduling-assistant" aria-label={t.assistant.landmarkLabel}>
      {open ? (
        <section
          id="scheduling-assistant-panel"
          className="scheduling-assistant__panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="scheduling-assistant-title"
        >
          <header className="scheduling-assistant__header">
            <img
              className="scheduling-assistant__avatar"
              src={business.assets.assistantAvatar}
              alt=""
              width={58}
              height={58}
            />
            <div>
              <h2
                id="scheduling-assistant-title"
                ref={panelTitleRef}
                tabIndex={-1}
              >
                {t.assistant.title}
              </h2>
              <p>
                <span aria-hidden="true" />
                {t.assistant.subtitle}
              </p>
            </div>
            <button
              type="button"
              className="scheduling-assistant__close"
              onClick={closeAssistant}
              aria-label={t.assistant.close}
            >
              <X aria-hidden="true" />
            </button>
          </header>

          <div className="scheduling-assistant__notice">
            <MessageCircle aria-hidden="true" />
            <span>{t.assistant.notice}</span>
          </div>

          <div className="scheduling-assistant__body">
            <div className="scheduling-assistant__message">
              <img
                src={business.assets.assistantAvatar}
                alt=""
                width={34}
                height={34}
              />
              <p>{t.assistant.greeting}</p>
            </div>

            <div className="scheduling-assistant__progress" aria-hidden="true">
              <span style={{ width: `${progress}%` }} />
            </div>

            {completed ? (
              <div className="scheduling-assistant__result">
                <span className="scheduling-assistant__success" aria-hidden="true">
                  <Check />
                </span>
                <div>
                  <span>{t.assistant.resultEyebrow}</span>
                  <h3>{t.assistant.resultTitle}</h3>
                  <p>{t.assistant.resultText}</p>
                </div>

                <dl>
                  {questions.map((question) => (
                    <div key={question.id}>
                      <dt>
                        <span aria-hidden="true">
                          {getQuizQuestionEmoji(question.id)}
                        </span>
                        {question.question.replace(/[?.!]+$/, "")}
                      </dt>
                      <dd>
                        {labels[question.id as QuizQuestionId] ??
                          t.quiz.notInformed}
                      </dd>
                    </div>
                  ))}
                </dl>

                <WhatsAppButton
                  origin="assistant"
                  section="floating_assistant"
                  ctaId="assistant-whatsapp"
                  className="scheduling-assistant__whatsapp"
                  message={message}
                  trackingPayload={{ answered_questions: questions.length }}
                >
                  {t.assistant.send}
                </WhatsAppButton>

                <div className="scheduling-assistant__result-actions">
                  <button type="button" onClick={goBack}>
                    <ArrowLeft aria-hidden="true" />
                    {t.assistant.back}
                  </button>
                  <button type="button" onClick={restart}>
                    <RotateCcw aria-hidden="true" />
                    {t.assistant.restart}
                  </button>
                </div>
              </div>
            ) : (
              <div className="scheduling-assistant__question" key={currentQuestion.id}>
                <div className="scheduling-assistant__step">
                  {t.assistant.step
                    .replace("{current}", String(step + 1))
                    .replace("{total}", String(questions.length))}
                </div>
                <h3>
                  <span aria-hidden="true">
                    {getQuizQuestionEmoji(currentQuestion.id)}
                  </span>
                  {currentQuestion.question}
                </h3>

                <div
                  className="scheduling-assistant__options"
                  role="group"
                  aria-label={currentQuestion.question}
                >
                  {currentQuestion.options.map((option) => (
                    <button
                      type="button"
                      key={option.id}
                      onClick={() => selectAnswer(option.id, option.label)}
                    >
                      <span aria-hidden="true">{getQuizOptionEmoji(option.id)}</span>
                      <strong>{option.label}</strong>
                      <ChevronRight aria-hidden="true" />
                    </button>
                  ))}
                </div>

                {step > 0 ? (
                  <button
                    type="button"
                    className="scheduling-assistant__back"
                    onClick={goBack}
                  >
                    <ArrowLeft aria-hidden="true" />
                    {t.assistant.back}
                  </button>
                ) : (
                  <p className="scheduling-assistant__helper">
                    {t.assistant.helper}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      ) : (
        <div className="scheduling-assistant__controls">
          {assistantVisible ? (
            <WhatsAppButton
              origin="floating"
              section="floating_scheduling"
              ctaId="floating-direct-scheduling"
              className="scheduling-assistant__direct-wa"
              message={t.assistant.directWhatsappMessage}
              ariaLabel={t.assistant.directWhatsappAria}
            >
              {t.assistant.directWhatsapp}
            </WhatsAppButton>
          ) : null}

          <button
            ref={launcherRef}
            type="button"
            className="scheduling-assistant__launcher"
            onClick={openAssistant}
            aria-expanded="false"
            aria-controls="scheduling-assistant-panel"
            aria-label={t.assistant.open}
          >
            <span className="scheduling-assistant__launcher-avatar">
              <img
                src={business.assets.assistantAvatar}
                alt=""
                width={52}
                height={52}
              />
            </span>
            <span className="scheduling-assistant__launcher-copy">
              <strong>{t.assistant.launcherTitle}</strong>
              <small>{t.assistant.launcherSubtitle}</small>
            </span>
          </button>
        </div>
      )}
    </aside>
  );
}
