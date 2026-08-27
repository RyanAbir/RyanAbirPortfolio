import { projects, type Project, type ProjectStatus } from "../data/projects";

const pillClass: Record<ProjectStatus, string> = {
  Featured: "pill featured",
  Live: "pill live",
  Completed: "pill done",
  "In Progress": "pill done",
};

function hostOf(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function Preview({ project }: { project: Project }) {
  const url = hostOf(project.links.liveDemo);

  let body: React.ReactNode;
  switch (project.title) {
    case "JobFit Copilot":
      body = (
        <>
          <div className="pv-row">
            <div className="pv-kpi">
              <div className="l">Fit score</div>
              <div className="v a">87%</div>
            </div>
            <div className="pv-kpi">
              <div className="l">Matched</div>
              <div className="v">12</div>
            </div>
            <div className="pv-kpi">
              <div className="l">Missing</div>
              <div className="v">3</div>
            </div>
          </div>
          <div className="pv-line m" />
          <div className="pv-line s" />
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <span className="pv-badge">resume keyword</span>
            <span className="pv-badge">red flag</span>
            <span className="pv-badge">email draft</span>
          </div>
        </>
      );
      break;
    case "SaaS Billing Starter":
      body = (
        <>
          <div className="pv-row">
            <div className="pv-kpi">
              <div className="l">Plan</div>
              <div className="v a">Pro</div>
            </div>
            <div className="pv-kpi">
              <div className="l">MRR</div>
              <div className="v">$4.9k</div>
            </div>
          </div>
          <div className="pv-bars">
            <b style={{ height: "40%" }} />
            <b style={{ height: "58%" }} />
            <b style={{ height: "50%" }} />
            <b style={{ height: "72%" }} />
            <b className="a" style={{ height: "96%" }} />
            <b style={{ height: "80%" }} />
          </div>
        </>
      );
      break;
    case "Family Finance Management":
      body = (
        <>
          <div className="pv-row">
            <div className="pv-kpi">
              <div className="l">Net income</div>
              <div className="v a">+18%</div>
            </div>
            <div className="pv-kpi">
              <div className="l">Properties</div>
              <div className="v">6</div>
            </div>
          </div>
          <div className="pv-list">
            <div className="pv-item">
              <span className="sw" style={{ background: "var(--accent)" }} />
              <div className="tx">
                <div className="a" />
                <div className="b" />
              </div>
            </div>
            <div className="pv-item">
              <span className="sw" style={{ background: "var(--ok)" }} />
              <div className="tx">
                <div className="a" style={{ width: "48%" }} />
                <div className="b" />
              </div>
            </div>
          </div>
        </>
      );
      break;
    default:
      body = (
        <>
          <div className="pv-row">
            <div className="pv-kpi" style={{ borderColor: "var(--accent)" }}>
              <div className="l">Note</div>
              <div className="v">Rich text</div>
            </div>
            <div className="pv-kpi">
              <div className="l">Notes</div>
              <div className="v a">128</div>
            </div>
          </div>
          <div className="pv-swatches">
            <span style={{ background: "var(--accent)" }} />
            <span style={{ background: "var(--ok)" }} />
            <span style={{ background: "#E2B23C" }} />
            <span
              style={{
                background: "var(--ink-3)",
                border: "1px solid var(--line-2)",
              }}
            />
          </div>
        </>
      );
  }

  return (
    <div className="frame">
      <div className="bar">
        <i />
        <i />
        <i />
        <span className="url">{url}</span>
      </div>
      <div className="fbody">{body}</div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="block" id="work">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="eyebrow">
              <span className="n">03</span> Selected work
            </span>
            <h2>Products, not demos.</h2>
          </div>
          <p>
            Each of these is a full product flow — auth, data, and a real
            interface someone can use. 2024–2026.
          </p>
        </div>

        {projects.map((project, i) => (
          <article className="work-row reveal" key={project.title}>
            <div className="work-idx">{String(i + 1).padStart(2, "0")}</div>
            <div className="work-main">
              <h3>
                {project.title}{" "}
                <span className={pillClass[project.status]}>
                  {project.status}
                </span>
              </h3>
              <div className="meta">{project.type}</div>
              <p className="desc">{project.description}</p>
              <div className="stack">
                {project.tech.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="work-links">
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo <span className="arw">→</span>
                </a>
                <span className="sep">·</span>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <Preview project={project} />
          </article>
        ))}
      </div>
    </section>
  );
}
