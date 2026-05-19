"use client"

import { motion } from "framer-motion"
import { caseStudies, type CaseStudy } from "@/data/resume"
import { Badge } from "@/components/ui/Badge"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"
import { cn } from "@/lib/cn"

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "relative flex flex-col gap-5 rounded-2xl p-6 sm:p-7",
        "bg-[var(--color-surface)]",
        "border border-[var(--color-border)]",
        "hover:border-[var(--color-border-accent)]",
        "hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]",
        "transition-all duration-400",
        "group overflow-hidden"
      )}
    >
      {/* Top accent gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }}
      />

      {/* Header */}
      <div className="flex items-start gap-3">
        <Badge variant="success" size="sm" className="mt-0.5 shrink-0 uppercase tracking-widest">
          SHIPPED
        </Badge>
        <div className="min-w-0">
          <h3 className="text-[var(--color-text-primary)] font-bold text-lg leading-snug group-hover:text-[var(--color-accent-light)] transition-colors duration-300">
            {study.title}
          </h3>
          <p className="mt-1 text-[var(--color-text-muted)] font-mono text-xs tracking-wide">
            {study.subtitle}
          </p>
        </div>
      </div>

      {/* PROBLEM / SOLUTION / OUTCOME */}
      <div className="flex flex-col gap-4">
        {[
          { label: "PROBLEM", content: study.problem, color: "var(--color-text-secondary)" },
          { label: "SOLUTION", content: study.solution, color: "var(--color-text-primary)" },
          { label: "OUTCOME", content: study.outcome, color: "#30d158" },
        ].map(({ label, content, color }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <span
              className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase"
              style={{ color }}
            >
              {label}
            </span>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{content}</p>
          </div>
        ))}
      </div>

      {/* Metrics */}
      {study.metrics.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {study.metrics.map((m) => (
            <span
              key={m.label}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5",
                "bg-[var(--color-accent-muted)] border border-[var(--color-border)]",
                "text-[var(--color-text-primary)] font-mono text-xs font-medium"
              )}
            >
              <span className="font-bold">{m.value}</span>
              <span className="text-[var(--color-text-muted)]">{m.label}</span>
            </span>
          ))}
        </div>
      )}

      {/* Tech tags */}
      {study.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--color-border)]">
          {study.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-[var(--color-text-muted)] bg-[var(--color-accent-muted)] border border-[var(--color-border)] rounded-full px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  )
}

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="relative py-24 sm:py-32 bg-[var(--color-background)]"
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-14"
        >
          <SectionHeader
            label="Production Engineering"
            title="Real Problems. Real Solutions. Real Impact."
            subtitle="Engineering post-mortems from production systems at scale — every number is real."
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.title} study={study} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
