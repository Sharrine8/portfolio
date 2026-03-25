"use client";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML & CSS", tag: "Daily Driver" },
      { name: "JavaScript", tag: "Daily Driver" },
      { name: "React", tag: "Daily Driver" },
      { name: "Context API", tag: "Proficient" },
      { name: "Next.js", tag: "Proficient" },
      { name: "Tailwind CSS", tag: "Proficient" },
      { name: "TypeScript", tag: "Familiar" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", tag: "Proficient" },
      { name: "Express.js", tag: "Proficient" },
      { name: "REST APIs", tag: "Proficient" },
      { name: "MongoDB / NoSQL", tag: "Proficient" },
      { name: "Docker", tag: "Familiar" },
      { name: "Postman", tag: "Proficient" },
      { name: "JWT Authentication", tag: "Proficient" },
    ],
  },
  {
    category: "Tooling & Workflow",
    skills: [
      { name: "Git & GitHub", tag: "Daily Driver" },
      { name: "VS Code", tag: "Daily Driver" },
      { name: "Figma", tag: "Daily Driver" },
      { name: "Vercel", tag: "Familiar" },
      { name: "Scrum / Agile", tag: "Daily Driver" },
      { name: "Vite", tag: "Proficient" },
      { name: "Jira", tag: "Familiar" },
      { name: "NginX", tag: "Familiar" },
      { name: "GCP", tag: "Familiar" },
      { name: "ESLint", tag: "Proficient" },
    ],
  },
];

const tagStyles: Record<string, string> = {
  "Daily Driver": "text-accent border-accent/20 bg-accent/5",
  "Proficient":   "text-accent2 border-accent2/20 bg-accent2/5",
  "Familiar":     "text-muted border-white/10 bg-white/[0.03]",
};

const marqueeItems = [
  "HTML", "CSS", "JavaScript", "React", "Next.js",
  "Tailwind", "TypeScript", "Node.js", "Express.js",
  "MongoDB", "REST APIs", "Docker", "Postman",
  "Git", "Figma", "Vercel", "Scrum", "Vite", "Jira",
  "NginX", "GCP", "JWT Authentication", "ESLint",
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

        {/* Legend */}
        <div className="flex items-center gap-6 mb-12">
          {Object.entries(tagStyles).map(([label, style]) => (
            <span
              key={label}
              className={`font-mono text-[0.6rem] uppercase tracking-widest border px-3 py-1 rounded-full ${style}`}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-accent mb-6 pb-3 border-b border-white/5">
                {group.category}
              </h3>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="font-light text-sm text-[var(--text)]">
                      {skill.name}
                    </span>
                    <span
                      className={`shrink-0 font-mono text-[0.6rem] uppercase tracking-widest border px-2.5 py-1 rounded-full ${tagStyles[skill.tag]}`}
                    >
                      {skill.tag}
                    </span>
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