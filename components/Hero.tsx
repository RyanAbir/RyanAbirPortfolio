import Logo from "./Logo";
import { SITE_NAME } from "../lib/constants";

const specs: { term: string; value: React.ReactNode }[] = [
  { term: "Role", value: "Full-Stack Engineer" },
  { term: "Languages", value: "TypeScript · Python" },
  { term: "Backend", value: "Node · FastAPI · Django" },
  { term: "Focus", value: "CRM · ERP · SaaS" },
  { term: "Shipped", value: "4 live products" },
  { term: "Status", value: <span className="ok">● Available</span> },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="wrap">
        <div>
          <span className="eyebrow reveal">
            <span className="n">01</span> Full-Stack Software Engineer — Dhaka, BD
          </span>
          <h1 className="reveal">
            I build the software a business <span className="hl">runs on.</span>
          </h1>
          <p className="lede reveal">
            Scalable CRM, ERP, and SaaS platforms and workflow-driven apps —
            engineered full-stack, delivered fast with AI-assisted development,
            grounded in fundamentals.
          </p>
          <div className="hero-cta reveal">
            <a className="btn btn-solid" href="#work">
              View selected work
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="status reveal">
            <span className="dot" /> Open to freelance, remote roles &amp;
            startup collaborations
          </div>
        </div>

        <aside className="spec reveal" aria-label={`${SITE_NAME} profile summary`}>
          <div className="mk">
            <Logo />
            <span className="tag">// profile</span>
          </div>
          <dl>
            {specs.map((spec) => (
              <div className="row" key={spec.term}>
                <dt>{spec.term}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
