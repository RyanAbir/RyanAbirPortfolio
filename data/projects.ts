export type ProjectStatus = "Completed" | "In Progress" | "Featured";

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
  {
    title: "Personal Finance Management App",
    type: "Flutter + Firebase App",
    status: "Completed",
    description:
      "A cross-platform mobile application for tracking personal expenses, providing intuitive dashboard analytics, and seamless data synchronization via Firebase.",
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
];
