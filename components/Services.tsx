type Service = {
  label: string;
  title: string;
  description: string;
  includes: string[];
};

const services: Service[] = [
  {
    label: "Web",
    title: "Full Stack Web App Development",
    description:
      "Custom MERN stack web applications with authentication, dashboards, APIs, and database integration.",
    includes: [
      "React frontend",
      "Node.js/Express backend",
      "MongoDB database",
      "Authentication",
      "Dashboard features",
    ],
  },
  {
    label: "Mobile",
    title: "Flutter Mobile App Development",
    description:
      "Cross-platform mobile apps using Flutter, Firebase, and Firestore for modern business and startup needs.",
    includes: [
      "Flutter UI",
      "Firebase backend",
      "Firestore database",
      "Authentication",
      "Cross-platform support",
    ],
  },
  {
    label: "SaaS + AI",
    title: "SaaS & AI Feature Integration",
    description:
      "SaaS-ready product features and AI-powered integrations for smarter web and mobile applications.",
    includes: [
      "AI summaries",
      "Smart insights",
      "Premium feature structure",
      "Subscription-ready architecture",
      "Scalable product thinking",
    ],
  },
  {
    label: "Admin",
    title: "Dashboard & Admin Panel Development",
    description:
      "Clean and responsive dashboards for managing users, data, analytics, and internal business workflows.",
    includes: [
      "Admin UI",
      "CRUD management",
      "Data visualization layout",
      "Role-based access concept",
      "Responsive design",
    ],
  },
];

export default function Services() {
  return (
    <section className="section-shell" id="services">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Services
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Development support for practical product builds.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-400">
          Focused engineering services for web apps, mobile apps, dashboards,
          and SaaS-ready features.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <article className="glass-panel rounded-lg p-6" key={service.title}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-cyan-300">
                  {service.label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>
              </div>
              <span className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Service
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              {service.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <div
                  className="rounded-lg border border-white/10 bg-slate-950/60 p-3"
                  key={item}
                >
                  <p className="text-sm text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
