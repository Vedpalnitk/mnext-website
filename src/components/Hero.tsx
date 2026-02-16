"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-grid">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[130px]" />

      {/* Decorative orbiting dots */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-3 w-3 rounded-full bg-accent/30"
          style={{ animation: "orbit 20s linear infinite" }}
        />
        <div
          className="h-2 w-2 rounded-full bg-sky-400/20"
          style={{ animation: "orbit-reverse 25s linear infinite" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-8 inline-block rounded-full border border-accent/25 bg-accent/[0.06] px-5 py-1.5 text-sm font-medium text-accent">
            Technology Consulting &amp; Product Engineering
          </span>
        </motion.div>

        <motion.h1
          className="mx-auto mb-8 max-w-4xl font-display text-[clamp(2.6rem,7vw,6rem)] font-bold leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Engineering{" "}
          <span className="text-gradient">What&apos;s Next</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-subtle md:text-xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          We build intelligent digital platforms that transform industries
          &mdash; from wealth management to media intelligence, powered by
          autonomous AI agents.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="#services"
            className="rounded-full bg-accent px-8 py-3.5 font-semibold text-base transition-all hover:bg-accent-dim hover:shadow-xl hover:shadow-accent/20"
          >
            Explore Our Work
          </a>
          <button
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
            className="rounded-full border border-edge-light px-8 py-3.5 text-white/90 transition-all hover:border-accent/40 hover:bg-accent/[0.04]"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-base to-transparent" />
    </section>
  );
}
