"use client";

import { motion } from "motion/react";

/* ---------- icon components ---------- */

function WealthIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
      <rect x="2" y="2" width="44" height="44" rx="12" className="fill-accent/[0.08]" />
      <path
        d="M14 32V24M20 32V20M26 32V26M32 32V18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        className="text-accent"
      />
      <path
        d="M14 20L20 16L26 22L34 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent/60"
      />
      <circle cx="34" cy="14" r="2" className="fill-accent" />
    </svg>
  );
}

function TravelIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
      <rect x="2" y="2" width="44" height="44" rx="12" className="fill-sky-500/[0.08]" />
      <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="2" className="text-sky-400" />
      <ellipse cx="24" cy="24" rx="5" ry="11" stroke="currentColor" strokeWidth="1.6" className="text-sky-400/60" />
      <line x1="13" y1="24" x2="35" y2="24" stroke="currentColor" strokeWidth="1.4" className="text-sky-400/40" />
      <line x1="24" y1="13" x2="24" y2="35" stroke="currentColor" strokeWidth="1.4" className="text-sky-400/40" />
    </svg>
  );
}

function MediaIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
      <rect x="2" y="2" width="44" height="44" rx="12" className="fill-violet-500/[0.08]" />
      <circle cx="24" cy="24" r="4" className="fill-violet-400" />
      <path
        d="M24 14a10 10 0 0 1 0 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-violet-400/70"
      />
      <path
        d="M24 10a14 14 0 0 1 0 28"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="text-violet-400/40"
      />
      <path
        d="M24 14a10 10 0 0 0 0 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-violet-400/50"
      />
    </svg>
  );
}

/* ---------- data ---------- */

const verticals = [
  {
    title: "Wealth Management",
    description:
      "AI-powered portfolio management platforms, investment analytics dashboards, and fintech solutions that empower advisors and investors with intelligent, data-driven decision-making.",
    Icon: WealthIcon,
    tags: ["Portfolio Analytics", "Investment Dashboards", "Risk Modeling", "Regulatory Compliance"],
    accent: "accent",
  },
  {
    title: "Travel & Tourism",
    description:
      "Property management systems, booking platforms, and hospitality technology that streamline operations and elevate guest experiences across the travel ecosystem.",
    Icon: TravelIcon,
    tags: ["Property Management", "Booking Engines", "Channel Management", "Guest Experience"],
    accent: "sky-400",
  },
  {
    title: "Media & Intelligence",
    description:
      "Social media analytics, content intelligence platforms, and media monitoring solutions that turn vast streams of digital content into actionable strategic insights.",
    Icon: MediaIcon,
    tags: ["Social Analytics", "Content Intelligence", "Media Monitoring", "Sentiment Analysis"],
    accent: "violet-400",
  },
];

/* ---------- component ---------- */

export function Verticals() {
  return (
    <section id="services" className="relative py-28 px-6 lg:py-36">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-edge-light to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            What We Build
          </span>
          <h2 className="mx-auto max-w-xl font-display text-4xl font-bold md:text-5xl">
            Industry Expertise
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-subtle">
            Deep domain knowledge paired with modern engineering — delivering
            platforms purpose-built for each industry&apos;s unique challenges.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {verticals.map((v, i) => (
            <motion.div
              key={v.title}
              className="glass-card group flex flex-col p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <v.Icon />

              <h3 className="mt-6 font-display text-xl font-bold">{v.title}</h3>
              <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-subtle">
                {v.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {v.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-edge-light bg-edge/30 px-3 py-1 text-xs text-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
