const strengths = [
  "Full-stack SaaS products",
  "AI-integrated workflows",
  "Authentication systems",
  "Dashboards and analytics",
  "Database-backed architecture",
  "Product-focused execution",
] as const;

export default function About() {
  return (
    <section className="section-shell" id="about">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Building practical SaaS products with AI integrations.
          </h2>
        </div>

        <div className="glass-panel rounded-lg p-6 sm:p-8">
          <p className="text-base leading-8 text-slate-300">
            Ryan Abir is a Full-Stack AI SaaS Developer focused on building
            practical SaaS-style products with authentication, dashboards,
            database-backed workflows, and applied AI integrations. Recent work
            includes JobFit Copilot, an AI-powered job application assistant
            that combines authentication, database storage, AI analysis,
            dashboard metrics, and application tracking in one full-stack
            product.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div
                className="rounded-lg border border-white/10 bg-slate-950/60 p-4"
                key={strength}
              >
                <p className="text-sm font-medium text-slate-200">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
