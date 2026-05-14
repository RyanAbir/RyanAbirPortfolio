export type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "AI" | "Architecture";
};

export const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "Flutter", category: "Mobile" },
  { name: "Dart", category: "Mobile" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "AI Integrations", category: "AI" },
  { name: "SaaS Architecture", category: "Architecture" },
];
