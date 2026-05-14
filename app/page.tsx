import { SITE_FOCUS, SITE_NAME, SITE_ROLE } from "../lib/constants";

const placeholderSections = [
  {
    id: "about",
    title: "About",
    description: "Founder story, background, and working philosophy placeholder.",
  },
  {
    id: "skills",
    title: "Skills",
    description: "Technical stack and engineering strengths placeholder.",
  },
  {
    id: "projects",
    title: "Projects",
    description: "Selected SaaS, AI, MERN, and Flutter work placeholder.",
  },
  {
    id: "services",
    title: "Services",
    description: "Product engineering and development services placeholder.",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Availability, email, and collaboration details placeholder.",
  },
] as const;

export default function Home() {
  return (
    <div className="page-shell">
      <section
        className="section-shell flex min-h-[calc(100vh-5rem)] items-center"
        id="hero"
      >
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            {SITE_FOCUS}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {SITE_NAME}
          </h1>
          <p className="mt-5 text-xl leading-8 text-slate-300">{SITE_ROLE}</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
            Hero placeholder for a modern, minimal developer portfolio. Full
            sections will be added in the next build phase.
          </p>
        </div>
      </section>

      <div className="grid gap-5 pb-20 md:grid-cols-2">
        {placeholderSections.map((section) => (
          <section
            className="section-shell glass-panel rounded-lg p-6"
            id={section.id}
            key={section.id}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Coming soon
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              {section.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {section.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
