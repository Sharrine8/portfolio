export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-8 md:px-16 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">
          © {year} Your Name. All rights reserved.
        </p>
        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">
          Built with{" "}
          <span className="text-accent">Next.js</span> &{" "}
          <span className="text-accent">Resend</span>
        </p>
        <a
          href="#"
          className="font-mono text-[0.65rem] uppercase tracking-widest text-muted hover:text-accent transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
