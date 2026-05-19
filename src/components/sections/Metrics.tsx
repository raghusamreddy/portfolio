"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { metrics, type Metric } from "@/data/resume"
import { useCounter } from "@/hooks/useCounter"

interface MetricCardProps {
  metric: Metric
  isActive: boolean
  index: number
}

function MetricCard({ metric, isActive, index }: MetricCardProps) {
  const numericTarget = parseFloat(metric.value)
  const isDecimal = metric.value.includes(".")
  const rawCount = useCounter(
    isDecimal ? Math.round(numericTarget * 10) : numericTarget,
    1800,
    isActive
  )

  const displayValue = isDecimal
    ? (rawCount / 10).toFixed(1)
    : String(rawCount)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center justify-center gap-2 py-10 px-4"
    >
      {/* Separator line between cards */}
      {index > 0 && (
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.08)] to-transparent hidden sm:block" />
      )}

      {/* Value */}
      <div className="flex items-baseline gap-0.5">
        {metric.prefix && (
          <span className="text-[var(--color-text-secondary)] text-xl font-bold font-mono">{metric.prefix}</span>
        )}
        <span className="text-[var(--color-text-primary)] font-black font-mono leading-none text-[clamp(2rem,4vw,3.2rem)]">
          {displayValue}
        </span>
        {metric.suffix && (
          <span className="text-[var(--color-text-secondary)] text-lg font-bold font-mono">{metric.suffix}</span>
        )}
      </div>

      {/* Label */}
      <span className="text-[var(--color-text-muted)] text-[11px] font-mono tracking-wider text-center uppercase">
        {metric.label}
      </span>
    </motion.div>
  )
}

export default function Metrics() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="metrics"
      ref={ref}
      className="relative w-full bg-[var(--color-surface)] overflow-hidden section-glow"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)" }}
      />

      <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-5">
        {metrics.map((metric, i) => (
          <MetricCard key={metric.label} metric={metric} isActive={isInView} index={i} />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)" }}
      />
    </section>
  )
}
