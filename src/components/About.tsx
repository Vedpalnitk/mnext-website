"use client";

import { motion } from "motion/react";

const stats = [
  { value: "3+", label: "Industry Verticals" },
  { value: "10+", label: "Products Shipped" },
  { value: "AI", label: "Agent Platform" },
  { value: "E2E", label: "Full-Stack Delivery" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              About Us
            </span>
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              Built for the <span className="text-gradient">Future</span>
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-subtle">
              Mnext Consulting Services is a technology consulting firm
              specialising in building intelligent, scalable digital platforms.
              We partner with enterprises to design and deliver products that
              redefine their industries.
            </p>
            <p className="leading-relaxed text-subtle/80">
              From AI-powered fintech solutions to hospitality platforms and
              media intelligence systems, we bring deep domain expertise and
              cutting-edge engineering to every engagement. Our modular AI agent
              platform enables businesses to deploy autonomous intelligence
              across any workflow.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="glass-card p-7 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="mb-2 font-display text-3xl font-bold text-accent md:text-4xl">
                  {s.value}
                </div>
                <div className="text-sm text-subtle">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
