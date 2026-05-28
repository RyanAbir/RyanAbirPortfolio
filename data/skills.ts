export type SkillGroup = {
  category:
    | "Frontend"
    | "Backend & APIs"
    | "Database & Cloud"
    | "SaaS & Payments"
    | "AI & Product Engineering"
    | "Tools & Deployment"
    ;
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
    category: "Backend & APIs",
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
    category: "Database & Cloud",
    skills: ["PostgreSQL", "Neon", "Prisma", "MongoDB", "Firebase", "Firestore"],
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
      "Gemini AI",
      "AI Dashboards",
      "SaaS Applications",
      "Clean Architecture",
      "Technical Assessments",
      "Product Workflows",
    ],
  },
  {
    category: "Tools & Deployment",
    skills: ["Git", "GitHub", "Vercel", "Postman", "npm", "pnpm"],
  },
];
