"use client";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "REST & GraphQL APIs", level: 85 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    category: "Tooling",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "CI/CD", level: 75 },
      { name: "Vercel / AWS", level: 80 },
      { name: "Figma", level: 70 },
    ],
  },
];

const marqueeItems = [
  "React", "Next.js", "TypeScript", "Tailwind", "Node.js",
  "PostgreSQL", "Prisma", "Docker", "GraphQL", "Vercel",
  "Figma", "Git", "AWS", "REST APIs", "MongoDB",
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Marquee */}
      <div className="border-y border-white/5 py-5 mb-24 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-6">
              <span className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">
                {item}
              </span>
              <span className="text-accent/40 text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-8 md:px-16 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent mb-4">
            03 — Skills
          </p>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight tracking-tight">
            Tools of
            <br />
            <em className="italic text-gradient">the trade.</em>
          </h2>
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-accent mb-6 pb-3 border-b border-white/5">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-light text-sm text-[var(--text)]">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[0.6rem] text-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-px bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-accent2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
