import { projects, type Project, type ProjectStatus } from "../data/projects";

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
  "In Progress": "border-amber-300/20 bg-amber-300/10 text-amber-200",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-panel flex h-full flex-col rounded-lg p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-cyan-300">{project.type}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            {project.title}
          </h3>
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-400">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-300"
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-white">Highlights</p>
        <ul className="mt-3 space-y-2">
          {project.highlights.map((highlight) => (
            <li className="flex gap-3 text-sm text-slate-400" key={highlight}>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
        <a
          aria-label={`View live demo for ${project.title}`}
          className="inline-flex items-center justify-center rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          href={project.links.liveDemo}
        >
          Live Demo
        </a>
        <a
          aria-label={`View GitHub repository for ${project.title}`}
          className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.07]"
          href={project.links.github}
        >
          GitHub
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section-shell" id="projects">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Selected builds across MERN, Flutter, SaaS, and AI.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-400">
          A focused set of portfolio projects showing secure product flows,
          mobile-first execution, and SaaS-ready AI concepts.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
