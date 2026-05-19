"use client"

import React, { useRef, useState } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
  type Transition,
} from "framer-motion"
import { cn } from "@/lib/cn"
import { viewportOnce } from "@/lib/motion"
import { Badge } from "@/components/ui/Badge"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { experience, type Experience } from "@/data/resume"

// ─── Helpers ─────────────────────────────────────────────────────────────────

function extractStartYear(period: string): string {
  const match = period.match(/\d{4}/)
  return match ? match[0] : ""
}

// Parse a percentage value string like "50%" → 50 (capped at 100)
function parsePercent(value: string): number {
  const n = parseFloat(value.replace(/[^0-9.]/g, ""))
  return isNaN(n) ? 30 : Math.min(n, 100)
}

// Highlight numbers/percentages in achievement text
function HighlightedAchievement({ text }: { text: string }) {
  const parts = text.split(/(\d+[\w%+→]+|\d+)/g)
  return (
    <span>
      {parts.map((part, i) => {
        const isMetric = /^\d/.test(part)
        return isMetric ? (
          <span key={i} className="text-[var(--color-text-primary)] font-semibold">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      })}
    </span>
  )
}

// ─── Slide variants (left / right) ───────────────────────────────────────────

const easeCustom: [number, number, number, number] = [0.22, 1, 0.36, 1]
const easeIn: [number, number, number, number] = [0.4, 0, 0.6, 1]

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeCustom } as Transition,
  },
}

const slideRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeCustom } as Transition,
  },
}

const expandVariant: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.45, ease: easeCustom } as Transition,
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: easeIn } as Transition,
  },
}

const dotSpring: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 350, damping: 22, delay: 0.15 } as Transition,
  },
}

// ─── Metric Card ─────────────────────────────────────────────────────────────

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-2 rounded-lg bg-[var(--color-accent-muted)] border border-[var(--color-border)] min-w-[80px]">
      <span className="text-[var(--color-text-primary)] font-mono text-sm font-bold leading-tight">
        {value}
      </span>
      <span className="text-[var(--color-text-muted)] font-mono text-[9px] tracking-wide uppercase mt-0.5 text-center leading-tight">
        {label}
      </span>
    </div>
  )
}

// ─── Expanded Content ─────────────────────────────────────────────────────────

function ExpandedContent({ exp }: { exp: Experience }) {
  // Pick top 4 achievements
  const topAchievements = exp.achievements.slice(0, 4)

  // Impact bar width from first metric that looks like a percentage
  const firstPercent = exp.metrics.find((m) =>
    m.value.includes("%")
  )
  const impactWidth = firstPercent ? parsePercent(firstPercent.value) : 40

  return (
    <motion.div
      variants={expandVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="overflow-hidden"
    >
      <div className="pt-4 space-y-4">
        {/* Achievements */}
        <ul className="space-y-2.5">
          {topAchievements.map((ach, i) => (
            <li key={i} className="flex gap-2.5 items-start">
              <span
                className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-text-secondary)]"
                aria-hidden="true"
              />
              <span className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                <HighlightedAchievement text={ach} />
              </span>
            </li>
          ))}
        </ul>

        {/* Metrics row */}
        {exp.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {exp.metrics.map((m, i) => (
              <MetricCard key={i} label={m.label} value={m.value} />
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2 py-0.5 rounded font-mono text-[10px] bg-[var(--color-accent-muted)] border border-[var(--color-border)] text-[var(--color-text-muted)] tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact bar */}
        <div className="pt-1">
          <div className="h-0.5 w-full rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #f5f5f7, #86868b)",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${impactWidth}%` }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </div>
          {firstPercent && (
            <p className="mt-1 text-[9px] font-mono text-[#6e6e73] tracking-wide uppercase">
              Impact: {firstPercent.value} {firstPercent.label}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Single Timeline Card ─────────────────────────────────────────────────────

interface CardProps {
  exp: Experience
  index: number
  isLeft: boolean
  isExpanded: boolean
  onToggle: () => void
}

function TimelineCard({ exp, index, isLeft, isExpanded, onToggle }: CardProps) {
  const variant = isLeft ? slideLeft : slideRight

  return (
    <motion.article
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      onClick={onToggle}
      className={cn(
        "group relative cursor-pointer rounded-xl border transition-all duration-300",
        isExpanded
          ? "bg-[var(--color-surface-2)] border-[var(--color-border-accent)] shadow-[0_0_30px_rgba(0,0,0,0.03),0_4px_24px_rgba(0,0,0,0.08)]"
          : "bg-[var(--color-surface-2)]/50 border-[var(--color-border)] hover:border-[var(--color-border-accent)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
      )}
      style={{ willChange: "transform" }}
    >
      <div className="p-5 sm:p-6">
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {/* Company + badge */}
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-[var(--color-text-primary)] font-bold text-base sm:text-lg leading-tight truncate">
                {exp.company}
              </h3>
              {exp.current && (
                <Badge variant="accent" size="sm">
                  CURRENT
                </Badge>
              )}
            </div>

            {/* Role */}
            <p className="text-[var(--color-text-primary)] text-sm font-semibold mb-1.5 leading-tight">
              {exp.role}
            </p>

            {/* Duration + location */}
            <p className="font-mono text-[11px] text-[var(--color-text-muted)] tracking-wide">
              {exp.period} · {exp.location}
            </p>
          </div>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 mt-0.5 text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-colors duration-200"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Expanded section */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <ExpandedContent key={`${exp.company}-${index}`} exp={exp} />
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

// ─── Animated Spine Line ─────────────────────────────────────────────────────

function SpineLine() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  })
  const rawHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const height = useSpring(rawHeight, { stiffness: 60, damping: 20 })

  return (
    <div
      ref={ref}
      className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px overflow-hidden hidden md:block"
      aria-hidden="true"
    >
      {/* Track */}
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)]" />
      {/* Animated fill */}
      <motion.div
        className="absolute top-0 left-0 w-full origin-top"
        style={{
          height,
          background: "linear-gradient(to bottom, #f5f5f7, #86868b, rgba(255,255,255,0.1))",
        }}
      />
    </div>
  )
}

// ─── Mobile spine ─────────────────────────────────────────────────────────────

function MobileSpineLine() {
  return (
    <div
      className="absolute left-4 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.08)] md:hidden"
      aria-hidden="true"
    />
  )
}

// ─── Year Dot ─────────────────────────────────────────────────────────────────

function SpineDot({
  year,
  isLeft,
  isCurrent,
}: {
  year: string
  isLeft: boolean
  isCurrent: boolean
}) {
  return (
    <motion.div
      variants={dotSpring}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center",
        isLeft ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Outer ring */}
      <div
        className={cn(
          "flex items-center justify-center rounded-full border-2",
          isCurrent
            ? "w-4 h-4 bg-[#f5f5f7] border-white shadow-[0_0_12px_rgba(255,255,255,0.3)]"
            : "w-3 h-3 bg-black border-[#86868b]"
        )}
      />
      {/* Year label */}
      <span
        className={cn(
          "font-mono text-[10px] text-[#86868b] tracking-widest absolute whitespace-nowrap",
          isLeft ? "right-5" : "left-5"
        )}
      >
        {year}
      </span>
    </motion.div>
  )
}

// ─── Mobile dot ───────────────────────────────────────────────────────────────

function MobileDot({ isCurrent }: { isCurrent: boolean }) {
  return (
    <motion.div
      variants={dotSpring}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={cn(
        "absolute left-4 top-6 -translate-x-1/2 z-10 md:hidden",
        isCurrent
          ? "w-3.5 h-3.5 rounded-full bg-[#f5f5f7] border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          : "w-2.5 h-2.5 rounded-full bg-black border-2 border-[#86868b]"
      )}
      aria-hidden="true"
    />
  )
}

// ─── Main Timeline Row ────────────────────────────────────────────────────────

interface TimelineRowProps {
  exp: Experience
  index: number
  isExpanded: boolean
  onToggle: () => void
}

function TimelineRow({ exp, index, isExpanded, onToggle }: TimelineRowProps) {
  const isLeft = index % 2 === 0
  const year = extractStartYear(exp.period)

  return (
    <div className="relative mb-8 last:mb-0">
      {/* ── Mobile layout (single-column, spine on left) ── */}
      <div className="md:hidden relative pl-10">
        <MobileDot isCurrent={exp.current} />
        <TimelineCard
          exp={exp}
          index={index}
          isLeft={false}
          isExpanded={isExpanded}
          onToggle={onToggle}
        />
      </div>

      {/* ── Desktop layout (alternating left / right) ── */}
      <div className="hidden md:grid md:grid-cols-[1fr_60px_1fr]">
        {/* Left column: card when isLeft=true, empty otherwise */}
        <div className={cn("flex", isLeft ? "justify-end pr-8" : "")}>
          {isLeft && (
            <div className="w-full max-w-110">
              <TimelineCard
                exp={exp}
                index={index}
                isLeft={true}
                isExpanded={isExpanded}
                onToggle={onToggle}
              />
            </div>
          )}
        </div>

        {/* Center column: spine dot */}
        <div className="relative flex items-start justify-center pt-6">
          <SpineDot year={year} isLeft={isLeft} isCurrent={exp.current} />
        </div>

        {/* Right column: card when isLeft=false, empty otherwise */}
        <div className={cn("flex", !isLeft ? "justify-start pl-8" : "")}>
          {!isLeft && (
            <div className="w-full max-w-110">
              <TimelineCard
                exp={exp}
                index={index}
                isLeft={false}
                isExpanded={isExpanded}
                onToggle={onToggle}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)

  // SAP Labs (index 0) expanded by default
  const [expandedCompany, setExpandedCompany] = useState<string>(
    experience[0].company
  )

  function handleToggle(company: string) {
    setExpandedCompany((prev) => (prev === company ? "" : company))
  }

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-[var(--color-background)] overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Radial glow behind spine */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-96 pointer-events-none hidden md:block"
        style={{
          background:
            "radial-gradient(ellipse 200px 100% at 50% 40%, rgba(255,255,255,0.02) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <SectionHeader
            label="Career Journey"
            title="12 Years of Infrastructure at Scale"
            centered
          />
        </motion.div>

        {/* Timeline body */}
        <div className="relative">
          {/* Animated vertical spine (desktop) */}
          <SpineLine />

          {/* Static mobile spine */}
          <MobileSpineLine />

          {/* Rows */}
          <div className="relative space-y-2">
            {experience.map((exp, index) => (
              <TimelineRow
                key={`${exp.company}-${index}`}
                exp={exp}
                index={index}
                isExpanded={expandedCompany === exp.company}
                onToggle={() => handleToggle(exp.company)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
