export type ProjectStatus = "Completed" | "In Progress";

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
    title: "SecureNotes",
    type: "Full Stack MERN App",
    status: "Completed",
    description:
      "A secure notes web application with user authentication, protected dashboard, CRUD functionality, and user-specific data management.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Authentication", "Vercel"],
    highlights: [
      "User authentication",
      "Protected dashboard",
      "Notes CRUD",
      "Secure user data",
    ],
    links: {
      liveDemo: "#",
      github: "#",
    },
  },
  {
    title: "Personal Finance Management App",
    type: "Flutter + Firebase App",
    status: "Completed",
    description:
      "A cross-platform personal finance management app for tracking expenses, viewing analytics, and syncing data with Firebase.",
    tech: ["Flutter", "Dart", "Firebase", "Firestore"],
    highlights: [
      "Expense tracking",
      "Dashboard analytics",
      "Cloud sync",
      "Cross-platform mobile support",
    ],
    links: {
      liveDemo: "#",
      github: "#",
    },
  },
  {
    title: "AI Finance Assistant",
    type: "SaaS + AI Project",
    status: "In Progress",
    description:
      "An AI-powered finance dashboard concept with expense insights, monthly summaries, budget recommendations, and premium SaaS-ready features.",
    tech: ["Next.js", "TypeScript", "AI Integration", "Firebase", "Stripe"],
    highlights: [
      "AI spending insights",
      "Monthly financial summary",
      "Budget recommendations",
      "SaaS-ready premium features",
    ],
    links: {
      liveDemo: "#",
      github: "#",
    },
  },
];
