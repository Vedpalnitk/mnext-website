"use client";

import { useState, useEffect, useCallback, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
    setSent(false);
  }, []);

  useEffect(() => {
    window.addEventListener("open-contact", handleOpen);
    return () => window.removeEventListener("open-contact", handleOpen);
  }, [handleOpen]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      }
    } catch {
      // fallback: open mailto
      const subject = encodeURIComponent(`Inquiry from ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\n\n${data.message}`
      );
      window.open(`mailto:info@mnext.co.in?subject=${subject}&body=${body}`);
    } finally {
      setSending(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-edge bg-surface shadow-2xl shadow-black/40"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-edge px-6 py-4">
              <h3 className="font-display text-lg font-bold">Get in Touch</h3>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-subtle transition-colors hover:bg-panel hover:text-white"
                aria-label="Close"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              {sent ? (
                <motion.div
                  className="py-8 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-accent/10">
                    <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="mb-1 font-display text-lg font-bold">Message Sent</h4>
                  <p className="text-sm text-subtle">
                    We&apos;ll get back to you shortly at info@mnext.co.in
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-6 rounded-full bg-accent px-6 py-2 text-sm font-semibold text-base transition-colors hover:bg-accent-dim"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-subtle">
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-lg border border-edge bg-panel px-3.5 py-2.5 text-sm text-white placeholder:text-faint outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-subtle">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full rounded-lg border border-edge bg-panel px-3.5 py-2.5 text-sm text-white placeholder:text-faint outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="mb-1.5 block text-xs font-medium text-subtle">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="Your company (optional)"
                      className="w-full rounded-lg border border-edge bg-panel px-3.5 py-2.5 text-sm text-white placeholder:text-faint outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-subtle">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full resize-none rounded-lg border border-edge bg-panel px-3.5 py-2.5 text-sm text-white placeholder:text-faint outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full rounded-lg bg-accent py-2.5 text-sm font-semibold text-base transition-all hover:bg-accent-dim disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-center text-xs text-faint">
                    Your message will be sent to info@mnext.co.in
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
