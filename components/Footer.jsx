export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>© {new Date().getFullYear()} Ryan Abir. All rights reserved.</p>
        <p>Full Stack MERN & Flutter Developer</p>
      </div>
    </footer>
  );
}
