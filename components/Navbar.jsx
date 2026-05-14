export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <a className="text-lg font-semibold tracking-tight text-white" href="/">
          Ryan Abir
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a className="transition hover:text-white" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-white" href="#skills">
            Skills
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
