"use client"

import { motion } from "framer-motion"
import { certifications, type Certification } from "@/data/resume"
import { Badge } from "@/components/ui/Badge"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"
import { cn } from "@/lib/cn"

// ─── Status Config ───────────────────────────────────────────────────────────

type CertStatus = Certification["status"]

const statusConfig: Record<
  CertStatus,
  {
    borderClass: string
    glowStyle: React.CSSProperties
    badgeLabel: string
    badgeVariant: "success" | "accent" | "muted"
  }
> = {
  active: {
    borderClass: "border-[rgba(99,102,241,0.4)]",
    glowStyle: {
      boxShadow: "0 0 24px rgba(99,102,241,0.12), 0 0 60px rgba(99,102,241,0.04)",
    },
    badgeLabel: "CERTIFIED",
    badgeVariant: "success",
  },
  "in-progress": {
    borderClass: "border-[rgba(255,165,0,0.3)]",
    glowStyle: {
      boxShadow: "0 0 24px rgba(255,165,0,0.08), 0 0 48px rgba(255,165,0,0.03)",
    },
    badgeLabel: "IN PROGRESS",
    badgeVariant: "accent",
  },
  exploring: {
    borderClass: "border-[rgba(255,255,255,0.06)]",
    glowStyle: {},
    badgeLabel: "EXPLORING",
    badgeVariant: "muted",
  },
}

// ─── Cert Card ───────────────────────────────────────────────────────────────

function CertCard({
  cert,
  index,
}: {
  cert: Certification
  index: number
}) {
  const config = statusConfig[cert.status]

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 0.55,
            delay: index * 0.07,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={cn(
        "relative flex flex-col gap-4 rounded-xl p-5",
        "bg-[#0d1117]",
        "border",
        config.borderClass,
        "transition-all duration-500",
        "hover:-translate-y-1",
        cert.status === "active" &&
          "hover:shadow-[0_8px_32px_rgba(99,102,241,0.2),0_0_60px_rgba(99,102,241,0.06)]",
        cert.status === "in-progress" &&
          "hover:shadow-[0_8px_32px_rgba(255,165,0,0.14),0_0_48px_rgba(255,165,0,0.04)]",
        cert.status === "exploring" &&
          "hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)]",
        "group"
      )}
      style={config.glowStyle}
    >
      {/* Subtle corner accent for active certs */}
      {cert.status === "active" && (
        <span
          className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(99,102,241,0.18) 0%, transparent 70%)",
            borderRadius: "0 0.75rem 0 0",
          }}
        />
      )}

      {/* Issuer brand dot + status badge row */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="shrink-0 w-2.5 h-2.5 rounded-full"
            style={{ background: cert.badgeColor, boxShadow: `0 0 6px ${cert.badgeColor}66` }}
            aria-hidden="true"
          />
          <span
            className={cn(
              "font-mono text-[10px] tracking-wider truncate",
              cert.status === "exploring" ? "text-[#475569]" : "text-[#64748b]"
            )}
          >
            {cert.issuer}
          </span>
        </div>
        <Badge
          variant={config.badgeVariant}
          size="sm"
          className={cn(
            "shrink-0 uppercase tracking-widest",
            cert.status === "in-progress" &&
              "bg-[rgba(255,165,0,0.1)] border-[rgba(255,165,0,0.3)] text-[#fb923c]"
          )}
        >
          {config.badgeLabel}
        </Badge>
      </div>

      {/* Cert name */}
      <h3
        className={cn(
          "font-bold text-base leading-snug transition-colors duration-300",
          cert.status === "active"
            ? "text-[#f1f5f9] group-hover:text-[#a5b4fc]"
            : cert.status === "in-progress"
              ? "text-[#cbd5e1] group-hover:text-[#fb923c]"
              : "text-[#475569]"
        )}
      >
        {cert.name}
      </h3>

      {/* Year (active only) */}
      {cert.status === "active" && cert.year && (
        <p className="text-[#475569] font-mono text-xs mt-auto">
          Certified {cert.year}
        </p>
      )}

      {/* Progress indicator (in-progress) */}
      {cert.status === "in-progress" && (
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[#475569] font-mono text-[10px]">In progress</span>
          </div>
          <div className="h-0.5 rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-[#fb923c]"
              initial={{ width: 0 }}
              whileInView={{ width: "50%" }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            />
          </div>
        </div>
      )}

      {/* Exploring label */}
      {cert.status === "exploring" && (
        <p className="text-[#334155] font-mono text-[10px] mt-auto">
          On the roadmap
        </p>
      )}
    </motion.article>
  )
}

// ─── Main Section ────────────────────────────────────────────────────────────

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-24 sm:py-32 bg-[#030712]"
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 bg-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-14"
        >
          <SectionHeader
            label="Credentials & Learning"
            title="Always Shipping, Always Learning"
            subtitle="Formal certifications and continuous learning goals — because production never stops evolving."
          />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {certifications.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} />
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center font-mono text-xs text-[#334155]"
        >
          Certifications are a checkpoint, not a destination.
        </motion.p>
      </div>
    </section>
  )
}

export default Certifications
