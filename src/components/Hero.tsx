"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      gridRef.current.style.maskImage = `radial-gradient(ellipse 40% 40% at ${x}% ${y}%, black 30%, transparent 100%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end px-8 md:px-16 pb-20 overflow-hidden">
      {/* Grid */}
      <div
        ref={gridRef}
        className="grid-bg absolute inset-0 transition-all duration-100"
        style={{
          maskImage:
            "radial-gradient(ellipse 50% 50% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Blobs */}
      <div className="animate-blob absolute w-[500px] h-[500px] rounded-full bg-accent opacity-[0.12] blur-[90px] -top-24 right-[5%]" />
      <div className="animate-blob-delay absolute w-[350px] h-[350px] rounded-full bg-accent2 opacity-[0.12] blur-[80px] top-[20%] -left-[5%]" />

      {/* Content */}
      <div className="relative z-10">
        <p
          className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent mb-6"
          style={{ animation: "fadeUp 0.8s 0.2s both" }}
        >
          Available for work
        </p>

        <h1
          className="font-display font-black leading-[0.92] tracking-tight mb-8"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8.5rem)",
            animation: "fadeUp 0.9s 0.35s both",
          }}
        >
          Crafting digital
          <br />
          <em className="text-gradient not-italic">experiences</em>
          <br />
          that matter.
        </h1>

        <div
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          style={{ animation: "fadeUp 0.9s 0.5s both" }}
        >
          <p className="text-muted font-light text-lg max-w-md leading-relaxed">
            Full-stack developer based in{" "}
            <span className="text-[var(--text)]">Your City</span>. I build
            performant, accessible, and beautifully crafted web applications.
          </p>

          <div className="flex items-center gap-6 shrink-0">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-widest text-bg bg-accent px-6 py-3 rounded-full hover:bg-accent/90 transition-all hover:scale-[1.03]"
            >
              View Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="font-mono text-[0.7rem] uppercase tracking-widest text-muted hover:text-accent transition-colors border border-white/10 px-6 py-3 rounded-full hover:border-accent/30"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 md:right-16 flex items-center gap-3"
        style={{ animation: "fadeIn 1s 1s both" }}
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-muted to-transparent" />
      </div>

      {/* Floating tags */}
      <div
        className="absolute top-1/3 right-8 md:right-16 flex flex-col gap-3 hidden lg:flex"
        style={{ animation: "fadeIn 1s 0.8s both" }}
      >
        {["React", "Next.js", "TypeScript", "Node.js"].map((tag) => (
          <span
            key={tag}
            className="font-mono text-[0.65rem] uppercase tracking-widest text-muted border border-white/5 bg-surface/50 px-3 py-1.5 rounded-full backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
