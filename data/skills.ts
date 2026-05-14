export type SkillGroup = {
  category: "Frontend" | "Backend" | "Mobile" | "Tools" | "Focus";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart", "Firebase", "Firestore"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Postman"],
  },
  {
    category: "Focus",
    skills: [
      "SaaS Applications",
      "AI Integration",
      "Stripe Payments",
      "Clean Architecture",
    ],
  },
];
