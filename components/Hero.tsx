import { SITE_NAME, SITE_ROLE } from "../lib/constants";

const techHighlights = [
  "React",
  "Node.js",
  "MongoDB",
  "Flutter",
  "Firebase",
  "AI Integration",
] as const;

export default function Hero() {
  return (
    <section
      className="section-shell relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden"
      id="hero"
    >
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="grid w-full items-center gap-12 py-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            Available for freelance, remote roles & startup collaborations
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Building SaaS & AI-Powered Applications
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {SITE_ROLE}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I build modern web and mobile applications using React, Node.js,
            MongoDB, Flutter, Firebase, and AI integrations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-200"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.07]"
              href="#contact"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {techHighlights.map((tech) => (
              <span
                className="rounded-md border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-300"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-panel relative rounded-lg p-6 sm:p-8">
          <div className="absolute right-6 top-6 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.8)]" />
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Developer Profile
          </p>
          <div className="mt-10">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              {SITE_NAME}
            </h2>
            <p className="mt-3 text-lg text-slate-300">Full Stack Developer</p>
          </div>
          <div className="mt-8 rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <p className="text-sm text-slate-400">Specialized in</p>
            <p className="mt-3 text-xl font-semibold text-white">
              MERN • Flutter • SaaS • AI
            </p>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-5">
            <span className="text-sm text-slate-300">Status</span>
            <span className="text-sm font-semibold text-emerald-200">
              Open to opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
