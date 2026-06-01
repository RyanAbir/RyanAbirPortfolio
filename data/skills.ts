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
      "Next.js App Router",
      "TypeScript",
      "JavaScript",
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
      "REST APIs",
      "Next.js API Routes",
      "Server Actions",
      "Authentication",
      "AI API Integration",
      "Full-Stack Product Flow",
    ],
  },
  {
    category: "Database & Cloud",
    skills: [
      "PostgreSQL",
      "Neon",
      "Prisma",
      "MongoDB",
      "Firebase",
      "Firestore",
      "Supabase Auth",
      "Supabase Database",
      "Application Tracking",
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
      "Gemini AI",
      "Gemini API",
      "AI Dashboards",
      "Structured AI Output",
      "Prompt Engineering",
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
