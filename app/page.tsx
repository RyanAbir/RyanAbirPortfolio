import { SITE_FOCUS, SITE_NAME, SITE_ROLE } from "../lib/constants";

const futureSections = ["About", "Skills", "Projects", "Services", "Contact"];

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-6xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-10">
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

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {futureSections.map((section) => (
          <div
            className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
            key={section}
          >
            <p className="text-sm font-medium text-slate-300">{section}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">
              Coming soon
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
