export type SkillGroup = {
  category:
    | "Languages"
    | "Frontend"
    | "Backend & APIs"
    | "Database & Cloud"
    | "SaaS & Payments"
    | "AI & Product Engineering"
    | "Tools & Deployment";
  skills: string[];
  featured?: boolean;
  note?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    featured: true,
    note: "AI-assisted",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C",
      "C++",
      "Java",
      "C#",
      "Go",
      "Rust",
      "PHP",
      "SQL",
      "HTML",
      "CSS",
      "Bash",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "SaaS Dashboard",
      "Responsive UI",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Django",
      "REST APIs",
      "Next.js API Routes",
      "Server Actions",
      "Auth & RBAC",
      "AI API Integration",
    ],
  },
  {
    category: "Database & Cloud",
    skills: [
      "PostgreSQL",
      "Neon",
      "Prisma",
      "SQLAlchemy",
      "MongoDB",
      "Redis",
      "Firebase",
      "Firestore",
      "Supabase",
    ],
  },
  {
    category: "SaaS & Payments",
    skills: [
      "Stripe Billing",
      "Stripe Checkout",
      "Webhooks",
      "Customer Portal",
      "Subscription Logic",
      "Plan-Based Gating",
    ],
  },
  {
    category: "AI & Product Engineering",
    skills: [
      "LLM APIs",
      "Gemini API",
      "Agent-Assisted Dev",
      "Structured AI Output",
      "Prompt Design",
      "Business Automation",
      "Clean Architecture",
    ],
  },
  {
    category: "Tools & Deployment",
    skills: ["Git", "GitHub", "Vercel", "Postman", "npm", "pnpm"],
  },
];
