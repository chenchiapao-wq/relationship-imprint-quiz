import { Flower2 } from "lucide-react";
import { ButtonLink } from "../components/ButtonLink";
import { SectionHeader } from "../components/SectionHeader";

const books = [
  {
    title: "量子轉念的效應",
    image: "/images/books/quantum-shift-effect-1.png",
    tagline: "逆轉生命印記，重返覺醒人生。",
    description: [
      "從想法、感受與情緒如何牽動生命狀態談起，帶領讀者回到內在印記的源頭。",
      "轉念，不只是表面的正向思考，而是一條看見潛意識印記、重新理解生命經驗的重要路徑。",
      "跨越宗教、心理學與內在探索觀點，引導讀者回到更安定、更清明的內在位置。"
    ]
  },
  {
    title: "量子轉念的效應 2",
    image: "/images/books/quantum-shift-effect-2.png",
    tagline: "翱翔於量子心靈、多維時空、全息意識場。",
    description: [
      "以意識為核心，延伸探討量子心靈、多維時空與全息意識場的內在探索觀點。",
      "書中提醒讀者：「轉念」不只是換個想法，而是透過信念鬆動與重新領悟，改變自己理解過去、面對現在與選擇未來的方式。"
    ]
  },
  {
    title: "量子轉念的效應 3",
    image: "/images/books/quantum-shift-effect-3.png",
    tagline: "啟動高維意識量子場。",
    description: [
      "「知道了」不等於「經驗到了」。",
      "當一個人願意從更高層次理解自己的思惟與信念，才有機會重新校準正在創造的人生實相。",
      "本書為《啟動高維意識量子場》（2021 年）之修訂改版。"
    ]
  },
  {
    title: "量子轉念的效應 4",
    image: "/images/books/quantum-shift-effect-4.png",
    tagline: "穿越前世印記輪迴，開啟靈魂覺醒新維度。",
    description: [
      "收錄 15 則真實個案故事：透過潛意識回溯的引導過程，理解情感困境、身體感受、人際衝突背後可能存在的印記。",
      "解答 17 個常見的靈性問題：回應「命運是決定好的嗎？」、「每個人都能看到前世嗎？」、「為什麼總是吸引爛人？」等疑惑。",
      "完整呈現「量子轉念引導技術」實作邏輯：以清晰步驟與實作案例，說明這套技術如何協助人看見內在模式。"
    ]
  }
];

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
              <article className="book-card" key={book.title}>
                <div className="book-cover-frame">
                  <img src={book.image} alt={`《${book.title}》書封`} loading="lazy" />
                </div>
                <div className="book-copy">
                  <p className="book-kicker">陳嘉堡 著</p>
                  <h3>《{book.title}》</h3>
                  <p className="book-tagline">{book.tagline}</p>
                  {book.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
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
