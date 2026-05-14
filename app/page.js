import { projects } from "../data/projects";
import { skills } from "../data/skills";

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-6xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-10">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
          SaaS & AI-powered applications
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Ryan Abir
        </h1>
        <p className="mt-5 text-xl text-slate-300">
          Full Stack MERN & Flutter Developer building clean, scalable products
          for modern teams.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Featured Projects
          </p>
          <ul className="mt-5 space-y-4">
            {projects.map((project) => (
              <li key={project.title}>
                <h2 className="font-semibold text-white">{project.title}</h2>
                <p className="mt-1 text-sm text-slate-400">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Core Skills
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                className="rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-sm text-slate-300"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
