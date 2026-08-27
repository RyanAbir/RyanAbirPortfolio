const items = [
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "Django",
  "Prisma",
  "SQLAlchemy",
  "PostgreSQL",
  "Redis",
  "Supabase",
  "Firebase",
  "REST APIs",
  "RBAC & Workflows",
  "System Architecture",
];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track" id="ticker">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
