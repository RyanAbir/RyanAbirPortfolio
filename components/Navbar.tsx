"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE_NAME } from "../lib/constants";

const desktopNavLinks = NAV_LINKS.filter((link) => link.href !== "#contact");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/72 backdrop-blur-xl">
      <nav className="page-shell flex min-h-20 items-center justify-between">
        <Link
          aria-label="Go to Ryan Abir homepage"
          className="inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-white"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          <Image
            alt="Ryan Abir Logo"
            className="h-10 w-10 rounded-md border border-white/10 object-contain shadow-[0_0_24px_rgba(34,211,238,0.18)]"
            height={40}
            priority
            src="/logo/logo.png"
            width={40}
          />
          <span>{SITE_NAME}</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {desktopNavLinks.map((link) => (
            <a
              className="transition hover:text-white"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn-primary px-4 py-2"
            href="#contact"
          >
            Contact
          </a>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-slate-200 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-4 rounded-full bg-current" />
            <span className="block h-0.5 w-4 rounded-full bg-current" />
            <span className="block h-0.5 w-4 rounded-full bg-current" />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="page-shell pb-4 md:hidden">
          <div
            className="glass-panel grid gap-1 rounded-lg p-2"
            id="mobile-navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                className="rounded-md px-3 py-3 text-sm text-slate-300 transition hover:bg-white/[0.04] hover:text-white"
                href={link.href}
                key={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
