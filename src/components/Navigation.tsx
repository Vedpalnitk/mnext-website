"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "AI Agents", href: "#agents" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base/70 backdrop-blur-2xl border-b border-edge"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.84rem] text-subtle transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
            className="rounded-full bg-accent px-5 py-2 text-[0.84rem] font-semibold text-base transition-all hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/15"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-subtle md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-edge bg-surface/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-subtle transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); window.dispatchEvent(new Event("open-contact")); }}
              className="mt-2 rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-base"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
