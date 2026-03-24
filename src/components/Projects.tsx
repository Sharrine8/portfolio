"use client";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  github?: string;
  featured?: boolean;
  year: string;
}

const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A full-stack SaaS platform for team collaboration with real-time features, role-based access control, and a beautiful dashboard.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    href: "#",
    github: "#",
    featured: true,
    year: "2024",
  },
  {
    title: "Project Beta",
    description:
      "An e-commerce solution with custom CMS, payment integrations, and a blazing-fast storefront built on modern web standards.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    href: "#",
    github: "#",
    featured: true,
    year: "2024",
  },
  {
    title: "Project Gamma",
    description:
      "Open-source CLI tool that automates repetitive developer workflows, saving hours of manual configuration time.",
    tags: ["TypeScript", "Node.js", "CLI"],
    href: "#",
    github: "#",
    year: "2023",
  },
  {
    title: "Project Delta",
    description:
      "Data visualization dashboard that transforms raw CSV data into interactive, shareable charts and reports.",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    href: "#",
    year: "2023",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="group relative bg-card border border-white/5 rounded-2xl p-6 card-border hover:-translate-y-1 transition-all duration-300 flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.6rem] uppercase tracking-widest text-muted border border-white/5 px-2 py-1 rounded-md">
            {project.year}
          </span>
          {project.featured && (
            <span className="font-mono text-[0.6rem] uppercase tracking-widest text-accent border border-accent/20 bg-accent/5 px-2 py-1 rounded-md">
              Featured
            </span>
          )}
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors text-sm"
              aria-label="GitHub"
            >
              ⌥
            </a>
          )}
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors text-sm"
            aria-label="Live site"
          >
            ↗
          </a>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-accent transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-muted font-light leading-relaxed text-sm flex-1 mb-6">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[0.6rem] uppercase tracking-widest text-muted/70 bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-accent2/[0.03] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent mb-4">
              02 — Projects
            </p>
            <h2 className="font-display font-black text-5xl md:text-6xl leading-tight tracking-tight">
              Selected
              <br />
              <em className="italic text-gradient">work.</em>
            </h2>
          </div>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.7rem] uppercase tracking-widest text-muted hover:text-accent transition-colors border border-white/10 hover:border-accent/30 px-5 py-2.5 rounded-full shrink-0 self-start md:self-auto"
          >
            All on GitHub ↗
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
