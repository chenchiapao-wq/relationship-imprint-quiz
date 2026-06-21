import { Check, LoaderCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SectionHeader } from "../components/SectionHeader";
import { disclaimer } from "../data/siteContent";
import { quizQuestions } from "../data/quiz";
import type { QuizAnswer } from "../types";
import { trackEvent } from "../utils/analytics";
import { calculateResult } from "../utils/calculateResult";
import {
  clearQuizStorage,
  loadAnswers,
  loadStep,
  saveAnswers,
  saveResult,
  saveStep
} from "../utils/storage";

type QuizMode = "intro" | "resume" | "question" | "midpoint" | "loading" | "error";

export function QuizPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<QuizMode>("intro");
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const storedAnswers = loadAnswers();
    const storedStep = loadStep();

    if (storedAnswers.length > 0 && storedAnswers.length < quizQuestions.length) {
      setAnswers(storedAnswers);
      setCurrentIndex(Math.min(storedStep, quizQuestions.length - 1));
      setMode("resume");
    }
  }, []);

  const currentQuestion = quizQuestions[currentIndex];
  const currentAnswer = useMemo(
    () => answers.find((answer) => answer.questionId === currentQuestion?.id),
    [answers, currentQuestion?.id]
  );
  const progress = Math.round(((currentIndex + 1) / quizQuestions.length) * 100);

  function startFresh() {
    clearQuizStorage();
    setAnswers([]);
    setCurrentIndex(0);
    saveStep(0);
    setMode("question");
    trackEvent("quiz_start");
  }

  function continueQuiz() {
    setMode("question");
    trackEvent("quiz_resume", { currentIndex });
  }

  function chooseOption(optionId: string) {
    const nextAnswers = [
      ...answers.filter((answer) => answer.questionId !== currentQuestion.id),
      { questionId: currentQuestion.id, optionId }
    ].sort((a, b) => a.questionId - b.questionId);

    setAnswers(nextAnswers);
    saveAnswers(nextAnswers);
    trackEvent("question_answered", { questionId: currentQuestion.id, optionId });
  }

  function goPrevious() {
    const nextIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(nextIndex);
    saveStep(nextIndex);
  }

  function goNext() {
    if (!currentAnswer) return;

    if (currentIndex === 7) {
      setMode("midpoint");
      saveStep(8);
      return;
    }

    if (currentIndex === quizQuestions.length - 1) {
      finishQuiz();
      return;
    }

    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    saveStep(nextIndex);
  }

  function finishQuiz() {
    const result = calculateResult(answers);
    if (!result) {
      setMode("error");
      return;
    }

    saveResult(result);
    trackEvent("quiz_completed", {
      mainType: result.mainType.code,
      mainDimension: result.mainDimension.key
    });
    setMode("loading");
    window.setTimeout(() => navigate("/result"), 1800);
  }

  if (mode === "intro") {
    return (
      <section className="quiz-page section-band">
        <div className="container quiz-shell intro-shell">
          <SectionHeader
            eyebrow="3 至 5 分鐘"
            title="感情潛意識印記測驗"
            description="找出你在關係中最容易被觸發的舊模式。"
            align="center"
          />
          <p>
            這份測驗不是要判斷誰對誰錯，而是幫助你看見自己在感情關係中最容易被觸發的潛意識模式。
            當你越理解自己的反應從哪裡來，就越有機會從舊模式中走出來。
          </p>
          <div className="quiz-meta">
            <span>共 16 題</span>
            <span>沒有標準答案</span>
            <span>請選最接近的直覺反應</span>
          </div>
          <button className="button button-primary" type="button" onClick={startFresh}>
            <span>開始測驗</span>
          </button>
          <p className="small-note">{disclaimer}</p>
        </div>
      </section>
    );
  }

  if (mode === "resume") {
    return (
      <section className="quiz-page section-band">
        <div className="container quiz-shell intro-shell">
          <SectionHeader
            eyebrow="尚未完成"
            title="你上次的測驗尚未完成，是否繼續？"
            description="你可以從上次停下來的地方接著回答，也可以重新開始。"
            align="center"
          />
          <div className="inline-actions centered">
            <button className="button button-primary" type="button" onClick={continueQuiz}>
              <span>繼續測驗</span>
            </button>
            <button className="button button-ghost" type="button" onClick={startFresh}>
              <span>重新開始</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (mode === "midpoint") {
    return (
      <section className="quiz-page section-band">
        <div className="container quiz-shell intro-shell">
          <SectionHeader
            eyebrow="50% 完成"
            title="你已經完成一半。"
            description="接下來的題目，會更靠近你在關係中的深層反應。請繼續用直覺回答。"
            align="center"
          />
          <button
            className="button button-primary"
            type="button"
            onClick={() => {
              setCurrentIndex(8);
              setMode("question");
            }}
          >
            <span>繼續測驗</span>
          </button>
        </div>
      </section>
    );
  }

  if (mode === "loading") {
    return (
      <section className="quiz-page section-band">
        <div className="container quiz-shell loading-shell">
          <LoaderCircle className="spin" size={38} aria-hidden="true" />
          <h1>正在整理你的關係印記結果……</h1>
          <p>情緒觸發模式分析中</p>
          <p>關係慣性整理中</p>
          <p>潛意識維度計算中</p>
        </div>
      </section>
    );
  }

  if (mode === "error") {
    return (
      <section className="quiz-page section-band">
        <div className="container quiz-shell intro-shell">
          <SectionHeader
            eyebrow="發生一點狀況"
            title="結果整理時發生一點狀況，請重新送出測驗。"
            align="center"
          />
          <button className="button button-primary" type="button" onClick={() => setMode("question")}>
            <span>重新計算結果</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="quiz-page section-band">
      <div className="container quiz-shell question-shell">
        <div className="progress-row">
          <span>第 {currentIndex + 1} / {quizQuestions.length} 題</span>
          <span>{progress}% 完成</span>
        </div>
        <div className="progress-track" aria-hidden="true">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <h1>{currentQuestion.title}</h1>
        <div className="option-list">
          {currentQuestion.options.map((option) => {
            const isSelected = currentAnswer?.optionId === option.id;
            return (
              <button
                className={`option-card ${isSelected ? "selected" : ""}`}
                key={option.id}
                type="button"
                onClick={() => chooseOption(option.id)}
              >
                <span className="option-label">{option.label}</span>
                <span>{option.text}</span>
                {isSelected && <Check size={18} aria-hidden="true" />}
              </button>
            );
          })}
        </div>

        <div className="quiz-controls">
          <button className="button button-ghost" type="button" onClick={goPrevious} disabled={currentIndex === 0}>
            <span>上一題</span>
          </button>
          <button className="button button-primary" type="button" onClick={goNext} disabled={!currentAnswer}>
            <span>{currentIndex === quizQuestions.length - 1 ? "送出結果" : "下一題"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
