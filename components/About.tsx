const coreFocus = [
  "Full-Stack Development",
  "AI-Assisted Engineering",
  "AI SaaS",
  "CRM & ERP",
  "SaaS Products",
  "Business Automation",
  "System Architecture",
  "API Integration",
  "Workflow & Permission Systems",
  "Financial Controls",
  "Product Engineering",
];

const principles = [
  {
    k: "/ 01",
    title: "Product-first",
    body: "Understand the business problem and the workflow before choosing the technical solution.",
  },
  {
    k: "/ 02",
    title: "Full lifecycle",
    body: "Requirements, architecture, build, testing, deployment, and monitoring — not just the code.",
  },
  {
    k: "/ 03",
    title: "AI-accelerated",
    body: "AI coding tools and LLM APIs layered on engineering fundamentals — fast, not fragile.",
  },
  {
    k: "/ 04",
    title: "Production-grade",
    body: "Reliable, maintainable, secure, and scalable — built for the realities of running in production.",
  },
];

export default function About() {
  return (
    <section className="band block" id="about">
      <div className="wrap">
        <div className="shead reveal" style={{ marginBottom: 0 }}>
          <div>
            <span className="eyebrow">
              <span className="n">02</span> About
            </span>
            <h2>From business problem to production system.</h2>
          </div>
          <p className="sub">
            Full-stack engineer specialising in CRM, ERP, and SaaS platforms —
            using AI as an accelerator, not a replacement for engineering
            fundamentals.
          </p>
        </div>

        <div className="about-grid reveal">
          <p className="lead">
            My strongest work is turning complex business processes into
            practical, production-grade software systems.
          </p>
          <div className="about-body">
            <p>
              I&apos;m a full-stack software engineer focused on scalable
              business software — <strong>CRM, ERP, SaaS platforms, and
              workflow-driven applications</strong> — leveraging AI-assisted
              development to accelerate delivery and solve complex technical
              problems.
            </p>
            <p>
              I&apos;m fluent in JavaScript/TypeScript and Python, and
              comfortable across the whole stack: React, Next.js, Node, Express,
              FastAPI, Django, Prisma, SQLAlchemy, PostgreSQL, Firebase,
              Supabase, Redis, and REST APIs — from frontend interfaces to
              backend services, databases, auth, cloud infrastructure,
              deployment, and architecture.
            </p>
            <p>
              I use AI as an <strong>engineering accelerator, not a replacement
              for fundamentals</strong> — combining AI coding tools, LLM APIs,
              and agent-assisted development with solid engineering principles to
              move quickly across unfamiliar codebases and new technologies
              without being locked to one ecosystem.
            </p>
            <p>
              My focus is the parts where business rules and data integrity
              matter most: role-based access control, approval and financial
              workflows, auditability, controlled state transitions, and
              third-party integrations — with real attention to edge cases,
              security boundaries, and the operational realities of production.
            </p>
            <p>
              I start from the business problem, challenge assumptions, and
              design systems that stay reliable and maintainable as the
              organisation grows. The goal isn&apos;t just software that works —
              it&apos;s software that solves the right problem and scales with
              the business.
            </p>
          </div>
        </div>

        <div className="focus reveal">
          <div className="lbl">Core focus</div>
          <div className="focus-chips">
            {coreFocus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="appr reveal" style={{ marginTop: 56 }}>
          {principles.map((p) => (
            <div className="card" key={p.title}>
              <div className="k">{p.k}</div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
