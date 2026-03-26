"use client";

import { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  github?: string;
  featured?: boolean;
  year: string;
  images?: string[];
}

const projects: Project[] = [
  {
    title: "News Explorer",
    description:
      "A responsive web application that allows users to search for news articles, save them to their account, and view their saved articles.",
    tags: [
      "React",
      "Vite",
      "JavaScript",
      "HTML/CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Context API",
    ],
    href: "https://sharrine8.github.io/final-project_frontend/",
    github: "https://github.com/Sharrine8/final-project_frontend",
    featured: true,
    year: "2025",
    images: [
      "/news-explorer-1.png",
      "/news-explorer-2.png",
      "/news-explorer-3.png",
      "/news-explorer-4.png",
    ],
  },
  // {
  //   title: "What to Wear",
  //   description:
  //     "A responsive web application that allows users to search for news articles, save them to their account, and view their saved articles.",
  //   tags: [
  //     "React",
  //     "Vite",
  //     "JavaScript",
  //     "HTML/CSS",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "JWT Auth",
  //     "GCP",
  //     "NginX",
  //   ],
  //   href: "https://sharrine8.github.io/se_project_react/",
  //   github: "https://github.com/Sharrine8/se_project_frontend",
  //   featured: true,
  //   year: "2025",
  //   images: [
  //     "/news-explorer-1.png",
  //     "/news-explorer-2.png",
  //     "/news-explorer-3.png",
  //     "/news-explorer-4.png",
  //   ],
  // },
  {
    title: "Friendsgiving - Code Jam Winner 2",
    description:
      "A Friendsgiving event planning app built collaboratively using Git branching, pull requests, and merge conflict resolution. Users can create an event with a name, date, time, and location, then build a custom menu for their gathering. Data is persisted using browser local storage so event details carry over between pages.",
    tags: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Vite",
      "Local Storage",
      "4-day hackathon",
    ],
    href: "https://sharrine8.github.io/code-jam_react/",
    github: "https://github.com/Sharrine8/code-jam_react",
    featured: true,
    year: "2024",
    images: [
      "/friendsgiving-1.png",
      "/friendsgiving-2.png",
      "/friendsgiving-3.png",
      "/friendsgiving-4.png",
      "/friendsgiving-5.png",
    ],
  },
  {
    title: "Golden Oak - Code Jam Winner 1",
    description:
      "A seasonal recipe app built collaboratively using Git branching, pull requests, and merge conflict resolution. Featuring curated breakfast, dinner, and dessert collections. Includes animated display menus, a recipe modal for viewing details, and a responsive hamburger menu for mobile screens.",
    tags: ["HTML/CSS", "JavaScript", "BEM", "OOP", "4-day hackathon"],
    href: "https://sharrine8.github.io/code-jam_golden-oak/",
    github: "https://github.com/Sharrine8/code-jam_golden-oak",
    featured: true,
    year: "2024",
    images: [
      "/golden-oak-1.png",
      "/golden-oak-2.png",
      "/golden-oak-3.png",
      "/golden-oak-4.png",
      "/golden-oak-5.png",
    ],
  },
];

function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  function prev(e: React.MouseEvent) {
    e.stopPropagation();
    setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function next(e: React.MouseEvent) {
    e.stopPropagation();
    setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <>
      <div
        className="relative w-full aspect-video overflow-hidden border-b border-white/5 cursor-zoom-in group/gallery"
        onClick={() => setLightbox(true)}
      >
        <Image
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          fill
          className="object-cover object-top transition-all duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover/gallery:opacity-100 transition-opacity pointer-events-none" />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 border border-white/10 text-white text-xs flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-black/80 z-10"
            >
              ←
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 border border-white/10 text-white text-xs flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity hover:bg-black/80 z-10"
            >
              →
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrent(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? "bg-accent w-3" : "bg-white/40 w-1.5"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <span className="absolute top-3 right-3 font-mono text-[0.6rem] uppercase tracking-widest text-white border border-white/20 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full opacity-0 group-hover/gallery:opacity-100 transition-opacity z-10">
          {current + 1} / {images.length}
        </span>
      </div>

      {lightbox &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-8 cursor-zoom-out"
            onClick={() => setLightbox(false)}
          >
            <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden">
              <Image
                src={images[current]}
                alt={`${title} screenshot ${current + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-black/80 transition-colors z-10"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-black/80 transition-colors z-10"
                >
                  →
                </button>
              </>
            )}

            <button
              className="absolute top-6 right-6 font-mono text-[0.65rem] uppercase tracking-widest text-muted border border-white/10 px-4 py-2 rounded-full hover:text-accent hover:border-accent/30 transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(false);
              }}
            >
              Close ✕
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="group relative bg-card border border-white/5 rounded-2xl overflow-hidden card-border hover:-translate-y-1 transition-all duration-300 flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {project.images && project.images.length > 0 ? (
        <ImageGallery images={project.images} title={project.title} />
      ) : (
        <div className="relative w-full aspect-video bg-surface2 border-b border-white/5 flex items-center justify-center">
          <span className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">
            Screenshot coming soon
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
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
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.6rem] uppercase tracking-widest text-muted hover:text-accent transition-colors border border-white/10 hover:border-accent/30 px-2.5 py-1 rounded-full"
              >
                GitHub ↗
              </a>
            )}
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.6rem] uppercase tracking-widest text-bg bg-accent hover:bg-accent/90 transition-colors px-2.5 py-1 rounded-full"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>

        <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-muted font-light leading-relaxed text-sm flex-1 mb-6">
          {project.description}
        </p>

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
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
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
            href="https://github.com/Sharrine8"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.7rem] uppercase tracking-widest text-muted hover:text-accent transition-colors border border-white/10 hover:border-accent/30 px-5 py-2.5 rounded-full shrink-0 self-start md:self-auto"
          >
            All on GitHub ↗
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
