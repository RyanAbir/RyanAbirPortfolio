export type SkillGroup = {
  category:
    | "Frontend"
    | "Backend"
    | "Database & ORM"
    | "SaaS & Payments"
    | "Auth & Security"
    | "Tools & Deployment"
    | "Focus";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Next.js API Routes",
      "Server Actions",
      "Authentication",
    ],
  },
  {
    category: "Database & ORM",
    skills: ["PostgreSQL", "Neon", "Prisma", "MongoDB", "Firebase", "Firestore"],
  },
  {
    category: "SaaS & Payments",
    skills: [
      "Stripe Checkout",
      "Stripe Billing",
      "Stripe Webhooks",
      "Customer Portal",
      "Subscription Management",
      "Plan-Based Gating",
    ],
  },
  {
    category: "Auth & Security",
    skills: [
      "Clerk",
      "JWT Auth",
      "Firebase Auth",
      "Protected Routes",
      "Environment Variables",
    ],
  },
  {
    category: "Tools & Deployment",
    skills: ["Git", "GitHub", "Vercel", "Postman", "npm", "pnpm"],
  },
  {
    category: "Focus",
    skills: [
      "SaaS Applications",
      "AI-Powered Apps",
      "Billing Systems",
      "Clean Architecture",
      "Technical Assessment Workflow",
      "Production-Ready Apps",
    ],
  },
];
