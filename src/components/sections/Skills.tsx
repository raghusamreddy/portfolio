"use client"

import { useState, useRef, useCallback } from "react"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion"
import { skills, type Skill, type SkillDomain } from "@/data/resume"
import { SkillTag } from "@/components/ui/SkillTag"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { staggerFast, scaleIn, viewportOnce } from "@/lib/motion"
import { cn } from "@/lib/cn"

type FilterDomain = SkillDomain | "all"

const FILTER_TABS: { label: string; value: FilterDomain }[] = [
  { label: "All", value: "all" },
  { label: "Cloud", value: "cloud" },
  { label: "Orchestration", value: "orchestration" },
  { label: "CI/CD", value: "cicd" },
  { label: "Observability", value: "observability" },
  { label: "IaC", value: "iac" },
  { label: "Scripting", value: "scripting" },
  { label: "Messaging", value: "messaging" },
  { label: "Databases", value: "databases" },
]

const TIER_LEGEND = [
  { label: "Expert", color: "#f5f5f7" },
  { label: "Senior", color: "#86868b" },
  { label: "Proficient", color: "#6e6e73" },
] as const

interface TooltipState {
  skill: Skill
  anchorRect: DOMRect
}

function SkillTooltip({ tooltip }: { tooltip: TooltipState }) {
  const tierLabel =
    tooltip.skill.tier.charAt(0).toUpperCase() + tooltip.skill.tier.slice(1)
  const tierColor =
    tooltip.skill.tier === "expert"
      ? "#f5f5f7"
      : tooltip.skill.tier === "senior"
        ? "#86868b"
        : "#6e6e73"

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "absolute z-50 pointer-events-none",
        "bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg px-3 py-2",
        "shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
        "min-w-[180px] max-w-[240px]"
      )}
      style={{
        top: tooltip.anchorRect.bottom + 8,
        left: tooltip.anchorRect.left + tooltip.anchorRect.width / 2,
        transform: "translateX(-50%)",
        position: "fixed",
      }}
    >
      <p className="text-[var(--color-text-primary)] font-bold text-sm leading-tight mb-1.5">
        {tooltip.skill.name}
      </p>
      <div className="flex items-center gap-2 mb-1.5">
        <span
          className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded"
          style={{ color: tierColor, background: `${tierColor}1a`, border: `1px solid ${tierColor}40` }}
        >
          {tierLabel}
        </span>
        <span className="text-[var(--color-text-muted)] font-mono text-[10px]">
          {tooltip.skill.years}y exp
        </span>
      </div>
      <p className="text-[var(--color-text-muted)] text-xs leading-snug">{tooltip.skill.context}</p>
    </motion.div>
  )
}

function TooltipTag({
  skill,
  onShowTooltip,
  onHideTooltip,
}: {
  skill: Skill
  onShowTooltip: (state: TooltipState) => void
  onHideTooltip: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseEnter = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      onShowTooltip({ skill, anchorRect: rect })
    }
  }, [skill, onShowTooltip])

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onHideTooltip}
    >
      <SkillTag name={skill.name} tier={skill.tier} />
    </motion.div>
  )
}

export function Skills() {
  const [activeDomain, setActiveDomain] = useState<FilterDomain>("all")
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)

  const sectionRef = useRef<HTMLElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.5 })
  const springY = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.5 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = ((e.clientX - cx) / rect.width) * 6
      const dy = ((e.clientY - cy) / rect.height) * 6
      rawX.set(dx)
      rawY.set(dy)
    },
    [rawX, rawY]
  )

  const handleMouseLeave = useCallback(() => {
    rawX.set(0)
    rawY.set(0)
  }, [rawX, rawY])

  const filteredSkills =
    activeDomain === "all"
      ? skills
      : skills.filter((s) => s.domain === activeDomain)

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 sm:py-32 bg-[var(--color-background)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 bg-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
          className="mb-10"
        >
          <SectionHeader
            label="Technical Arsenal"
            title="The Stack That Powers Production"
            subtitle="12+ years of real-world production experience across the modern cloud-native stack."
          />
        </motion.div>

        {/* Domain filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filter skills by domain"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              role="tab"
              aria-selected={activeDomain === tab.value}
              onClick={() => setActiveDomain(tab.value)}
              className={cn(
                "px-3 py-1.5 rounded-full border text-xs tracking-wide transition-all duration-200",
                activeDomain === tab.value
                  ? "bg-[var(--color-accent-muted)] border-[var(--color-border-accent)] text-[var(--color-text-primary)]"
                  : "bg-transparent border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-accent)] hover:text-[var(--color-text-secondary)]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tag cloud with parallax */}
        <motion.div style={{ x: springX, y: springY }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              variants={staggerFast}
              className="flex flex-wrap gap-3 items-center"
            >
              {filteredSkills.map((skill) => (
                <TooltipTag
                  key={skill.name}
                  skill={skill}
                  onShowTooltip={setTooltip}
                  onHideTooltip={() => setTooltip(null)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Tier legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-5 mt-8 pt-6 border-t border-[var(--color-border)]"
        >
          {TIER_LEGEND.map(({ label, color }) => (
            <span key={label} className="flex items-center gap-1.5 text-xs">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: color }}
                aria-hidden="true"
              />
              <span style={{ color }}>{label}</span>
            </span>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {tooltip && <SkillTooltip tooltip={tooltip} />}
      </AnimatePresence>
    </section>
  )
}

export default Skills
