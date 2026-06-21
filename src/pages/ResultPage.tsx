import { RotateCcw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";
import { SectionHeader } from "../components/SectionHeader";
import { dimensionCopy, dimensionNames, resultCopy, typeNames, typeShortDescriptions } from "../data/results";
import { disclaimer } from "../data/siteContent";
import type { DimensionKey, QuizResult } from "../types";
import { trackEvent } from "../utils/analytics";
import { clearQuizStorage, loadResult } from "../utils/storage";

const dimensionOrder: DimensionKey[] = ["safety", "emotion", "selfWorth", "repetition"];

export function ResultPage() {
  const navigate = useNavigate();
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    const storedResult = loadResult();
    if (!storedResult) {
      navigate("/quiz", { replace: true });
      return;
    }

    setResult(storedResult);
  }, [navigate]);

  const maxDimensionScore = useMemo(() => {
    if (!result) return 1;
    return Math.max(...Object.values(result.allDimensionScores), 1);
  }, [result]);

  if (!result) {
    return null;
  }

  const mainCode = result.mainType.code;
  const mainCopy = resultCopy[mainCode];
  const secondCode = result.secondaryTypes[0].code;
  const thirdCode = result.secondaryTypes[1].code;

  function retake() {
    clearQuizStorage();
    trackEvent("retake_quiz", { from: "result" });
    navigate("/quiz");
  }

  return (
    <>
      <section className="result-hero section-band">
        <div className="container narrow result-summary">
          <p className="eyebrow">Your Result</p>
          <h1>你的主要關係印記是：</h1>
          <div className="result-name">
            {result.isMixedType ? (
              <>
                {typeNames[mainCode]} <span>×</span> {typeNames[secondCode]}
              </>
            ) : (
              typeNames[mainCode]
            )}
          </div>
          <p>{mainCopy.punchline}</p>
        </div>
      </section>

      <section className="section-band">
        <div className="container result-grid">
          <article className="result-card">
            <h2>你的關係慣性</h2>
            <ul>
              {mainCopy.habits.map((habit) => <li key={habit}>{habit}</li>)}
            </ul>
          </article>
          <article className="result-card accent-card">
            <h2>你表面以為的問題可能是：</h2>
            <p>{mainCopy.surfaceProblem}</p>
          </article>
          <article className="result-card accent-card blue">
            <h2>但你真正需要探索的，可能是：</h2>
            <p>{mainCopy.deeperQuestion}</p>
          </article>
        </div>
      </section>

      <section className="section-band split-band">
        <div className="container two-column">
          <div>
            <SectionHeader eyebrow="次要模式" title="你的次要關係模式" />
            <p>
              除了主要的「{typeNames[mainCode]}」，你的測驗結果也顯示出「{typeNames[secondCode]}」
              與「{typeNames[thirdCode]}」的傾向。
            </p>
            <div className="secondary-grid">
              {[secondCode, thirdCode].map((code) => (
                <article className="type-card compact" key={code}>
                  <h3>{typeNames[code]}</h3>
                  <p>{typeShortDescriptions[code]}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="核心維度"
              title={`你最容易被觸發的核心維度：${dimensionNames[result.mainDimension.key]}`}
            />
            <p>{dimensionCopy[result.mainDimension.key]}</p>
            <div className="dimension-bars">
              {dimensionOrder.map((key) => {
                const score = result.allDimensionScores[key];
                const width = Math.round((score / maxDimensionScore) * 100);
                return (
                  <div className="dimension-row" key={key}>
                    <div>
                      <span>{dimensionNames[key]}</span>
                      <span>{score}</span>
                    </div>
                    <div className="progress-track thin">
                      <div className="progress-fill" style={{ width: `${width}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container narrow content-flow">
          <SectionHeader title="從量子轉念來看，這不是單純的感情問題。" />
          <p>
            從量子轉念的觀點來看，關係中的痛苦不只是眼前事件造成的，
            而是眼前事件觸發了潛意識中早已存在的印記。
          </p>
          <blockquote>{mainCopy.reminder}</blockquote>
          <SectionHeader title="你可以從這 3 個問題開始探索自己" />
          <ol className="reflection-list">
            {mainCopy.reflectionQuestions.map((question) => <li key={question}>{question}</li>)}
          </ol>
          <p className="small-note">{disclaimer}</p>
        </div>
      </section>

      <section className="section-band final-cta">
        <div className="container result-actions">
          <ButtonLink to="/quantum-shift" variant="light" eventName="result_quantum_cta_click">進一步了解量子轉念</ButtonLink>
          <button className="button button-light" type="button" onClick={retake}>
            <RotateCcw size={16} aria-hidden="true" />
            <span>重新測驗</span>
          </button>
          <ButtonLink to="/about" variant="light" eventName="result_about_cta_click">認識陳嘉堡老師</ButtonLink>
        </div>
      </section>
    </>
  );
}
