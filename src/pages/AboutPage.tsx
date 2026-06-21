import { BookOpen, Flower2 } from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { SectionHeader } from "../components/SectionHeader";

const books = ["量子轉念的效應", "量子轉念的效應 2", "量子轉念的效應 3", "量子轉念的效應 4"];

export function AboutPage() {
  return (
    <>
      <section className="page-hero section-band">
        <div className="container two-column founder-hero">
          <div>
            <p className="eyebrow">Founder</p>
            <h1>關於陳嘉堡老師</h1>
            <p>量子轉念引導技術系統創始人。</p>
          </div>
          <div className="portrait-placeholder" aria-hidden="true">
            <Flower2 size={98} strokeWidth={1} />
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container narrow content-flow">
          <SectionHeader title="量子轉念引導技術系統創始人" />
          <p>
            陳嘉堡老師長期投入潛意識印記、情緒觸發、關係模式與生命轉念的研究與引導。
            透過量子轉念引導技術，協助個案看見痛苦背後真正的內在模式，重新理解自己與關係。
          </p>

          <SectionHeader eyebrow="創立初衷" title="為什麼創立量子轉念？" />
          <p>
            我發現，很多人不是不知道道理，而是當潛意識印記被觸發時，根本無法靠理性控制反應。
            所以真正的改變，不只是理解表面事件，而是看見事件背後的印記與信念模式。
          </p>

          <blockquote>
            當人看見自己如何被舊模式推著走，就有機會從自動反應，回到重新選擇。
          </blockquote>
        </div>
      </section>

      <section className="section-band split-band">
        <div className="container">
          <SectionHeader eyebrow="Books" title="著作與專業成果" align="center" />
          <div className="book-grid">
            {books.map((book) => (
              <article className="book-card" key={book}>
                <BookOpen size={24} strokeWidth={1.5} aria-hidden="true" />
                <h3>{book}</h3>
                <p>從潛意識印記、轉念歷程與生命案例中，理解人如何重新拿回選擇權。</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band final-cta">
        <div className="container final-cta-inner">
          <h2>從理解自己開始，探索你的關係印記。</h2>
          <ButtonLink to="/quiz" variant="light" eventName="about_quiz_cta_click">開始免費測驗</ButtonLink>
        </div>
      </section>
    </>
  );
}
