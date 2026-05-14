import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";

const placeholderSections = [
  {
    id: "contact",
    title: "Contact",
    description: "Availability, email, and collaboration details placeholder.",
  },
] as const;

export default function Home() {
  return (
    <div className="page-shell">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />

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
