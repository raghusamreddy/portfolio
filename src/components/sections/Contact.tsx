"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { personal } from "@/data/resume"
import { Button } from "@/components/ui/Button"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { viewportOnce } from "@/lib/motion"
import { cn } from "@/lib/cn"

const socialLinks = [
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    display: personal.email,
    icon: "M",
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    display: "linkedin.com/in/raghusamreddy",
    icon: "in",
  },
  {
    label: "GitHub",
    href: personal.github,
    display: "github.com/raghusamreddy",
    icon: "gh",
  },
]

interface FormState {
  name: string
  email: string
  message: string
}

const inputClass = cn(
  "w-full rounded-xl px-4 py-3",
  "bg-[var(--color-accent-muted)]",
  "border border-[var(--color-border)]",
  "text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)]",
  "text-sm",
  "transition-all duration-300",
  "focus:border-[var(--color-border-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-border)] focus:bg-[var(--color-accent-muted)]"
)

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSent(true)
    }, 500)
  }

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[var(--color-background)]"
    >
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 50%, transparent)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left column */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader
              label="Get In Touch"
              title="Let's Build Something Together"
              subtitle="Whether you're looking for a senior DevOps engineer, want to discuss infrastructure challenges, or explore platform reliability — I'm open to conversations that matter."
            />

            {/* Social links */}
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                  >
                    <span
                      className={cn(
                        "inline-flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-mono font-bold",
                        "bg-[var(--color-accent-muted)] border border-[var(--color-border)] text-[var(--color-text-secondary)]",
                        "group-hover:bg-[var(--color-accent-muted)] group-hover:border-[var(--color-border-accent)] transition-all duration-300"
                      )}
                    >
                      {link.icon}
                    </span>
                    <span className="font-mono text-xs sm:text-sm">{link.display}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Resume download */}
            <div className="pt-2">
              <Button variant="ghost" href="/Raghu_Samreddy_Resume.pdf" size="md">
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Right column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card p-7 sm:p-8">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center gap-4 py-14 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[rgba(48,209,88,0.1)] border border-[rgba(48,209,88,0.2)] flex items-center justify-center">
                      <span className="text-[#30d158] text-2xl">✓</span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Message Sent</h3>
                    <p className="text-[var(--color-text-muted)] text-sm max-w-xs">
                      Thanks for reaching out. I'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-name"
                        className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)]"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-email"
                        className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)]"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-message"
                        className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)]"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me about your infrastructure challenge..."
                        value={form.message}
                        onChange={handleChange}
                        className={cn(inputClass, "resize-none")}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={submitting}
                      className="mt-2 w-full"
                    >
                      {submitting ? "Sending…" : "Send Message"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
