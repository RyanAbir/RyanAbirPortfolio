export type ProjectStatus = "Completed" | "In Progress" | "Featured" | "Live";

export type Project = {
  title: string;
  type: string;
  status: ProjectStatus;
  description: string;
  tech: string[];
  highlights: string[];
  links: {
    liveDemo: string;
    github: string;
  };
};

export const projects: Project[] = [
  {
    title: "SaaS Billing Starter",
    type: "SaaS Billing System",
    status: "Live",
    description:
      "Production-style subscription billing starter built with Next.js App Router, Clerk, Stripe Billing, Prisma, Neon PostgreSQL, and Vercel. It demonstrates a complete SaaS billing lifecycle including authentication, checkout, webhook-based subscription sync, billing portal management, scheduled cancellation handling, duplicate subscription prevention, and server-side plan-based feature gating.",
    tech: [
      "Next.js",
      "TypeScript",
      "Stripe Billing",
      "Clerk",
      "Prisma",
      "Neon",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
      "Webhooks",
    ],
    highlights: [
      "Stripe Checkout subscription flow",
      "Webhook-based subscription status sync",
      "Stripe Customer Portal billing management",
      "Scheduled cancellation state handling",
      "Duplicate subscription prevention",
      "Free vs Pro server-side feature gating",
      "Prisma + Neon PostgreSQL persistence",
      "Live Vercel deployment",
    ],
    links: {
      liveDemo: "https://saas-billing-starter-one.vercel.app",
      github: "https://github.com/RyanAbir/saas-billing-starter",
    },
  },
  {
    title: "Family Finance Management",
    type: "SaaS + AI Dashboard",
    status: "Featured",
    description:
      "AI-powered family finance and property management SaaS dashboard with role-based authentication, property income tracking, family member management, AI financial insights, and Firebase backend.",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Gemini AI", "Recharts"],
    highlights: [
      "AI financial insights",
      "Role-based access control",
      "Family member assignment system",
      "Property income and expense tracking",
      "Responsive SaaS dashboard",
    ],
    links: {
      liveDemo: "https://family-fin-management.vercel.app/",
      github: "https://github.com/RyanAbir/family-fin-management",
    },
  },
  {
    title: "SecureNotes",
    type: "Full Stack MERN App",
    status: "Completed",
    description:
      "Modern multi-format note-taking application with rich text editing, checklist workflows, image notes, colorful categories, JWT authentication, and responsive SaaS-style UI.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Render", "Vercel"],
    highlights: [
      "Rich text note editor",
      "Checklist/todo notes",
      "Image note support",
      "Modal note editing",
      "Search & filters",
      "Mobile responsive layout",
      "Secure JWT authentication",
      "Color categorized notes",
    ],
    links: {
      liveDemo: "https://securenotes-app.vercel.app",
      github: "https://github.com/RyanAbir/securenotes-app",
    },
  },
];
