import Logo from "./Logo";
import { NAV_LINKS, RESUME_URL, SITE_NAME } from "../lib/constants";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="wrap">
        <a className="brand" href="#top" aria-label={`${SITE_NAME} — home`}>
          <Logo />
          <b>{SITE_NAME}</b>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-ghost"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
