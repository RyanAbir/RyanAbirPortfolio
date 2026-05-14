import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section className="section-shell" id="skills">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A focused stack for shipping complete digital products.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-400">
          Grouped capabilities across frontend, backend, mobile development,
          delivery tools, and product-focused engineering.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article className="glass-panel rounded-lg p-6" key={group.category}>
            <h3 className="text-lg font-semibold text-white">
              {group.category}
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-300"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
