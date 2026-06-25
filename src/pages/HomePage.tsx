import { Check, Flower2 } from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { SectionHeader } from "../components/SectionHeader";
import { contrastRows, painPoints, processSteps, typePreview } from "../data/siteContent";

export function HomePage() {
  return (
    <>
      <section className="hero section-band">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Relationship Imprint</p>
            <h1>你在感情裡反覆受傷，也許不是因為你不夠好。</h1>
            <p className="hero-lead">
              而是潛意識裡有一個舊模式，正在關係中被觸發。
            </p>
            <div className="hero-actions">
              <ButtonLink to="/quiz" eventName="hero_cta_click">開始探索我的關係印記</ButtonLink>
              <span>約 3 至 5 分鐘，找出你在關係中最容易被觸發的潛意識模式。</span>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/images/hero/relationship-imprint-hero.jpg" alt="關係印記探索插畫" />
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <SectionHeader
            eyebrow="被說中的開始"
            title="你是否也常在關係裡出現這些狀況？"
            description="這些反應不代表你很糟，也不代表你沒救。它們可能正在提醒你：某個舊模式被觸發了。"
          />
          <div className="pain-grid">
            {painPoints.map((item) => (
              <article className="soft-card" key={item}>
                <Check size={18} aria-hidden="true" />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band split-band">
        <div className="container two-column">
          <div>
            <SectionHeader
              eyebrow="重新理解問題"
              title="很多關係衝突，表面是溝通問題，深層是潛意識印記被觸發。"
            />
            <p>
              當對方的一句話、一個眼神、一種冷淡，碰觸到你潛意識裡尚未被看見的印記時，
              你可能會瞬間進入舊有反應模式。
            </p>
            <p>
              原本只是一次互動，卻變成情緒爆發、冷戰、指責、討好、逃避或攻擊。
            </p>
          </div>
          <div className="process-list" aria-label="關係事件觸發流程">
            {processSteps.map((step, index) => (
              <div className="process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <SectionHeader
            eyebrow="量子轉念觀點"
            title="量子轉念，看見的不是誰對誰錯，而是事件背後被觸發的內在模式。"
            align="center"
          />
          <div className="contrast-table">
            {contrastRows.map(([notThis, butThis]) => (
              <div className="contrast-row" key={notThis}>
                <p>{notThis}</p>
                <p>{butThis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band quiz-invite">
        <div className="container invite-box">
          <Flower2 size={34} strokeWidth={1.4} aria-hidden="true" />
          <SectionHeader
            eyebrow="3 至 5 分鐘"
            title="你的感情潛意識印記是哪一型？"
            description="透過 16 題探索測驗，從你的情緒觸發、衝突反應與關係慣性中，看見你目前最需要理解的內在模式。"
            align="center"
          />
          <div className="quiz-meta">
            <span>16 題</span>
            <span>8 大類型</span>
            <span>4 大維度</span>
          </div>
          <ButtonLink to="/quiz" eventName="home_quiz_card_click">開始免費測驗</ButtonLink>
        </div>
      </section>

      <section className="section-band">
        <div className="container">
          <SectionHeader
            eyebrow="八大類型"
            title="你可能屬於哪一種關係印記類型？"
            align="center"
          />
          <div className="type-grid">
            {typePreview.map((type) => (
              <article className="type-card" key={type.code}>
                <span>{type.code}</span>
                <h3>{type.name}</h3>
                <p>{type.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band split-band">
        <div className="container two-column founder-block">
          <div className="portrait-card">
            <img src="/images/people/chen-chia-pao-white-half.png" alt="陳嘉堡老師" loading="lazy" />
          </div>
          <div>
            <SectionHeader eyebrow="Creator" title="關於量子轉念引導技術" />
            <p>
              量子轉念引導技術，由陳嘉堡老師創立。核心在於透過潛意識印記、情緒觸發點與信念模式的探索，
              協助人看見自己在關係、情緒與人生困境中反覆運作的內在模式，並從新的理解中重新選擇。
            </p>
            <div className="inline-actions">
              <ButtonLink to="/quantum-shift" variant="ghost">了解量子轉念</ButtonLink>
              <ButtonLink to="/about" variant="ghost">認識陳嘉堡老師</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band final-cta">
        <div className="container final-cta-inner">
          <h2>你不需要先找到所有答案，你可以先看見自己的模式。</h2>
          <ButtonLink to="/quiz" variant="light" eventName="bottom_cta_click">開始探索我的關係印記</ButtonLink>
        </div>
      </section>
    </>
  );
}
