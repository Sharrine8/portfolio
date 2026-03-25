"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { clsx } from "clsx";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

const socials = [
  { label: "GitHub", href: "https://github.com/sharrine8" },
  { label: "LinkedIn", href: "https://linkedin.com/in/christia-anderson" },
];

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">
        {label}
      </label>
      {children}
      {error && (
        <p className="font-mono text-[0.6rem] text-red-400 mt-0.5">{error}</p>
      )}
    </div>
  );
}

const inputClass =
  "bg-white/[0.03] border border-white/8 rounded-lg px-4 py-3 text-sm text-[var(--text)] font-light placeholder:text-muted/50 focus:outline-none focus:border-accent/40 focus:bg-white/[0.05] transition-all duration-200 resize-none";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-8 md:px-16 relative overflow-hidden">
      {/* Blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent2 opacity-[0.06] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent mb-4">
            04 — Contact
          </p>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight tracking-tight mb-8">
            Let's build
            <br />
            <em className="italic text-gradient">something.</em>
          </h2>
          <p className="text-muted font-light leading-relaxed mb-10 max-w-sm">
            Have a project in mind, a question, or just want to say hi? My inbox
            is always open. I'll get back to you within 24 hours.
          </p>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-widest text-muted hover:text-accent transition-colors w-fit"
              >
                <span className="w-6 h-px bg-white/10 group-hover:bg-accent group-hover:w-10 transition-all duration-300" />
                {s.label}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-card border border-white/5 rounded-2xl p-8 card-border">
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 text-2xl">
                ✦
              </div>
              <h3 className="font-display font-bold text-2xl mb-3">Message sent!</h3>
              <p className="text-muted font-light text-sm mb-8">
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="font-mono text-[0.65rem] uppercase tracking-widest text-muted border border-white/10 px-5 py-2 rounded-full hover:border-accent/30 hover:text-accent transition-all"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Name" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    placeholder="Your Name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Subject" error={errors.subject?.message}>
                <input
                  {...register("subject")}
                  placeholder="What's this about?"
                  className={inputClass}
                />
              </Field>

              <Field label="Message" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={inputClass}
                />
              </Field>

              {status === "error" && (
                <p className="font-mono text-[0.65rem] text-red-400 border border-red-400/20 bg-red-400/5 rounded-lg px-4 py-3">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className={clsx(
                  "inline-flex items-center justify-center gap-3 font-mono text-[0.7rem] uppercase tracking-widest rounded-full py-3.5 px-8 transition-all duration-200",
                  status === "loading"
                    ? "bg-accent/60 text-bg cursor-not-allowed"
                    : "bg-accent text-bg hover:bg-accent/90 hover:scale-[1.02]"
                )}
              >
                {status === "loading" ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>Send Message →</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
