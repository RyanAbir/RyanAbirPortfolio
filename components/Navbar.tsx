import { NAV_LINKS, SITE_NAME } from "../lib/constants";

export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <a className="text-lg font-semibold tracking-tight text-white" href="/">
          {SITE_NAME}
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              className="transition hover:text-white"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
