"use client";

import { useState, useEffect } from "react";
import { clsx } from "clsx";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-500",
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <a
        href="#"
        className="font-display text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
      >
        CA<span className="text-accent">.</span>
      </a>

      <nav className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-[0.7rem] uppercase tracking-widest text-muted hover:text-accent transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-bg bg-accent px-4 py-2 rounded-full hover:bg-accent/90 transition-colors"
      >
        Resume ↗
      </a>
    </header>
  );
}
