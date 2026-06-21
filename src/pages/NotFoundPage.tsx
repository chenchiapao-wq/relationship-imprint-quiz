import { ButtonLink } from "../components/ButtonLink";

export function NotFoundPage() {
  return (
    <section className="section-band page-hero">
      <div className="container narrow not-found">
        <p className="eyebrow">404</p>
        <h1>你來到了一個尚未被看見的頁面。</h1>
        <p>也許，可以先回到自己。</p>
        <div className="inline-actions centered">
          <ButtonLink to="/" variant="ghost">回首頁</ButtonLink>
          <ButtonLink to="/quiz">開始測驗</ButtonLink>
        </div>
      </div>
    </section>
  );
}
