"use client";

import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="relative py-28 px-6 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-edge-light to-transparent" />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-accent/[0.06] blur-[140px]" />

      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
          Ready to build{" "}
          <span className="text-gradient">what&apos;s next</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-subtle">
          Let&apos;s talk about how we can help you design, build, and ship
          intelligent digital platforms that move your business forward.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
            className="rounded-full bg-accent px-10 py-4 text-base font-semibold text-base transition-all hover:bg-accent-dim hover:shadow-xl hover:shadow-accent/20"
          >
            Get in Touch
          </button>
          <a
            href="mailto:info@mnext.co.in"
            className="text-sm text-subtle transition-colors hover:text-accent"
          >
            or email us at info@mnext.co.in
          </a>
        </div>
      </motion.div>
    </section>
  );
}
