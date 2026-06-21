import { ButtonLink } from "../components/ButtonLink";
import { SectionHeader } from "../components/SectionHeader";
import { processSteps, quantumDoesList, quantumNotList } from "../data/siteContent";

export function QuantumShiftPage() {
  return (
    <>
      <section className="page-hero section-band">
        <div className="container narrow">
          <p className="eyebrow">Quantum Shift</p>
          <h1>什麼是量子轉念？</h1>
          <p>量子轉念不是改變對方，而是讓你看見自己如何被舊印記推著反應。</p>
        </div>
      </section>

      <section className="section-band">
        <div className="container two-column">
          <div>
            <SectionHeader eyebrow="不是什麼" title="量子轉念不是用新的說法壓過舊有情緒。" />
            <div className="list-panel red-line">
              {quantumNotList.map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="真正看見" title="量子轉念協助人回到內在模式的理解。" />
            <div className="list-panel blue-line">
              {quantumDoesList.map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band split-band">
        <div className="container two-column">
          <div>
            <SectionHeader title="為什麼知道道理，卻還是控制不了反應？" />
            <p>
              因為人在被觸發的當下，反應往往不是來自理性，而是來自潛意識裡熟悉的舊模式。
              量子轉念的核心，就是協助人看見這個舊模式如何運作。
            </p>
            <p>
              真正的轉念不是強迫正向，而是看見舊認知如何形成，再從新舊認知的對比中產生重新領悟。
            </p>
          </div>
          <div className="process-list">
            {[...processSteps, "重新看見，才有新的選擇"].map((step, index) => (
              <div className="process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band final-cta">
        <div className="container final-cta-inner">
          <h2>想知道你在關係中最容易被觸發的是什麼？</h2>
          <ButtonLink to="/quiz" variant="light" eventName="quantum_quiz_cta_click">開始感情潛意識印記測驗</ButtonLink>
        </div>
      </section>
    </>
  );
}
