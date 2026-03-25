"use client";
import Image from "next/image";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "5+", label: "Technologies Used" },
  { value: "∞", label: "Lines of Code" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-8 md:px-16 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent mb-4">
            01 — About
          </p>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight tracking-tight mb-8">
            Building with
            <br />
            <em className="italic text-gradient">purpose.</em>
          </h2>
          <div className="space-y-5 text-muted font-light leading-relaxed">
            <p>
              Hi, I'm{" "}
              <span className="text-[var(--text)] font-medium">Christia Anderson</span> —
              a full-stack developer passionate about crafting digital products
              that are not only functional but genuinely delightful to use.
            </p>
            <p>
              I specialize in building scalable web applications with modern
              technologies. Whether it's architecting a robust backend or
              perfecting pixel-level UI details, I care deeply about the full
              picture.
            </p>
            <p>
              When I'm not coding, you'll find me exploring design systems,
              contributing to open source, or hunting for the perfect espresso.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Open to Work", "Remote Friendly", "Based in Houston"].map(
              (tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.65rem] uppercase tracking-widest text-accent border border-accent/20 bg-accent/5 px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right: Stats + Image placeholder */}
        <div className="flex flex-col gap-8">
          {/* Profile image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface2 border border-white/5 card-border">
            <Image
              src="/profile.jpeg"
              alt="Christia Anderson"
              fill
              className="object-cover grayscale contrast-125 opacity-90"
            />
            {/* Decorative corner */}
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-accent/30" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-accent/30" />
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-card border border-white/5 rounded-xl p-5 card-border"
              >
                <div className="font-display font-black text-3xl text-accent mb-1">
                  {s.value}
                </div>
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
