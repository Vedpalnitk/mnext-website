"use client";

import { motion } from "motion/react";

/* ---------- agent icons ---------- */

function VoiceIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
      <path d="M16 4v24M10 10v12M22 10v12M6 14v4M26 14v4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="text-accent" />
    </svg>
  );
}

function TranslateIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
      <path d="M4 8h14M11 4v4M7 8c1 4 4 8 8 10M15 8c-1 4-4 8-8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400" />
      <path d="M20 18l3 8 3-8M20.8 24h4.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-400" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
      <rect x="4" y="6" width="24" height="16" rx="4" stroke="currentColor" strokeWidth="2" className="text-violet-400" />
      <path d="M12 26l-4-4h16l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400/60" />
      <circle cx="11" cy="14" r="1.5" className="fill-violet-400" />
      <circle cx="16" cy="14" r="1.5" className="fill-violet-400" />
      <circle cx="21" cy="14" r="1.5" className="fill-violet-400" />
    </svg>
  );
}

function CommsIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
      <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-amber-400" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" className="text-amber-400" />
      <path d="M8.5 8.5l2.5 2.5M21 21l2.5 2.5M8.5 23.5l2.5-2.5M21 11l2.5-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="text-amber-400/50" />
    </svg>
  );
}

/* ---------- data ---------- */

const agents = [
  {
    name: "Voice AI",
    desc: "Natural speech recognition & synthesis for real-time voice interactions.",
    Icon: VoiceIcon,
  },
  {
    name: "Translation",
    desc: "Real-time multilingual translation across text and speech channels.",
    Icon: TranslateIcon,
  },
  {
    name: "Conversational AI",
    desc: "Context-aware chat intelligence for customer engagement & support.",
    Icon: ChatIcon,
  },
  {
    name: "Communications",
    desc: "Automated multi-channel outreach — email, SMS, and push notifications.",
    Icon: CommsIcon,
  },
];

const traits = [
  {
    title: "Registry-Driven",
    desc: "Dynamic capability routing through a centralized agent registry.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-accent">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Credit-Based Billing",
    desc: "Flexible usage-based pricing that scales with your needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-accent">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v10M9 9.5h4.5a2 2 0 0 1 0 4H9h5a2 2 0 0 1 0 4H9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Enterprise-Grade",
    desc: "Production-ready security, monitoring, and reliability built in.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-accent">
        <path d="M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Independently Deployable",
    desc: "Each agent operates autonomously and can be deployed standalone.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-accent">
        <path d="M12 3l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/* ---------- component ---------- */

export function AIAgents() {
  return (
    <section id="agents" className="relative py-28 px-6 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-edge-light to-transparent" />

      {/* Subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Platform
          </span>
          <h2 className="mx-auto max-w-xl font-display text-4xl font-bold md:text-5xl">
            Autonomous AI Agents
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-subtle">
            Modular, independently deployable AI agents that plug into any
            enterprise workflow. Compose the exact capabilities you need —
            nothing more, nothing less.
          </p>
        </motion.div>

        {/* Agent cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((a, i) => (
            <motion.div
              key={a.name}
              className="glass-card group relative overflow-hidden p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Hub line */}
              <div className="absolute -top-px left-1/2 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-edge bg-surface">
                <a.Icon />
              </div>
              <h3 className="mb-1.5 font-display text-lg font-bold">
                {a.name}
              </h3>
              <p className="text-[0.84rem] leading-relaxed text-subtle">
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hub visual connector */}
        <div className="mx-auto my-10 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/30" />
          <div className="relative flex h-12 w-12 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-accent/20" />
            <div className="absolute inset-0 rounded-full border border-accent/10" style={{ animation: "pulse-ring 2.5s ease-out infinite" }} />
            <div className="h-3 w-3 rounded-full bg-accent" />
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/30" />
        </div>

        {/* Traits */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              className="rounded-xl border border-edge bg-surface/40 p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-edge bg-panel">
                {t.icon}
              </div>
              <h4 className="mb-1 text-sm font-bold">{t.title}</h4>
              <p className="text-[0.8rem] leading-relaxed text-subtle">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
