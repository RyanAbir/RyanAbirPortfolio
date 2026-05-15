"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, SITE_NAME } from "../lib/constants";

const desktopNavLinks = NAV_LINKS.filter((link) => link.href !== "#contact");

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const clearHideTimer = () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };

    const handleScroll = () => {
      clearHideTimer();

      if (window.scrollY < 120) {
        setIsVisible(true);
        return;
      }

      setIsVisible(true);

      hideTimerRef.current = setTimeout(() => {
        if (window.scrollY >= 120 && !isMenuOpen) {
          setIsVisible(false);
        }
      }, 5000);
    };

    if (isMenuOpen) {
      clearHideTimer();
    } else {
      const initialCheck = setTimeout(handleScroll, 0);
      hideTimerRef.current = initialCheck;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearHideTimer();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const shouldShowHeader = isVisible || isMenuOpen;

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/72 backdrop-blur-xl transition-all duration-300 ease-out ${
          shouldShowHeader
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <nav className="page-shell flex min-h-20 items-center justify-between">
          <Link
            aria-label="Go to homepage"
            className="inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight text-white sm:gap-3"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              alt="Ryan Abir Logo"
              className="h-10 w-auto object-contain drop-shadow-[0_0_14px_rgba(34,211,238,0.16)] sm:h-11"
              height={44}
              priority
              src="/logo/logo.png"
              width={26}
            />
            <span className="hidden min-[360px]:inline">{SITE_NAME}</span>
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
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-slate-200 md:hidden"
            onClick={() => {
              setIsVisible(true);
              setIsMenuOpen((current) => !current);
            }}
            type="button"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
            </span>
          </button>
        </nav>

        {isMenuOpen ? (
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
                  onClick={() => {
                    setIsVisible(true);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>
      <div aria-hidden="true" className="h-20" />
    </>
  );
}
