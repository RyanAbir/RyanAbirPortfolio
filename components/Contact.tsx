import { ATS_RESUME_URL, RESUME_URL } from "../lib/constants";

type ContactMethod = {
  label: string;
  value: string;
  href: string;
  openInNewTab?: boolean;
};

const email = "info.ryanabir@gmail.com";

const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
  },
  {
    label: "GitHub",
    value: "View profile",
    href: "https://github.com/RyanAbir",
    openInNewTab: true,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/ryanabir/",
    openInNewTab: true,
  },
  {
    label: "WhatsApp",
    value: "Message directly",
    href: "https://wa.me/8801715682373",
    openInNewTab: true,
  },
  {
    label: "Modern Resume",
    value: "View modern resume",
    href: RESUME_URL,
    openInNewTab: true,
  },
  {
    label: "ATS Resume",
    value: "View ATS resume",
    href: ATS_RESUME_URL,
    openInNewTab: true,
  },
];

const availabilityDetails = [
  {
    label: "Status",
    value: "Available for freelance & remote opportunities",
  },
  {
    label: "Focus",
    value: "Full Stack Web Apps, Flutter Apps, SaaS & AI Integrations",
  },
  {
    label: "Location",
    value: "Dhaka, Bangladesh / Remote",
  },
] as const;

export default function Contact() {
  return (
    <section className="section-shell pb-20" id="contact">
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
            Open to freelance projects, remote roles, startup collaborations,
            and SaaS/AI-powered product opportunities.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              aria-label="Email Ryan Abir"
              className="btn-primary px-5 py-3 shadow-lg shadow-cyan-950/30"
              href={`mailto:${email}`}
            >
              Email Me
            </a>
            <a
              aria-label="View Ryan Abir modern resume"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.07]"
              href={RESUME_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Modern Resume
            </a>
            <a
              aria-label="View Ryan Abir ATS resume"
              className="inline-flex items-center justify-center rounded-md border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-cyan-300/40 hover:bg-white/[0.04] hover:text-white"
              href={ATS_RESUME_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              View ATS Resume
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {contactMethods.map((method) => (
              <a
                aria-label={`${method.label}: ${method.value}`}
                className="rounded-lg border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-300/30 hover:bg-white/[0.04]"
                href={method.href}
                key={method.label}
                rel={method.openInNewTab ? "noopener noreferrer" : undefined}
                target={method.openInNewTab ? "_blank" : undefined}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {method.label}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-200">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>

        <aside className="glass-panel rounded-lg p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.8)]" />
            <p className="text-sm font-semibold text-emerald-200">
              Open to opportunities
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {availabilityDetails.map((detail) => (
              <div
                className="rounded-lg border border-white/10 bg-slate-950/60 p-5"
                key={detail.label}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {detail.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
