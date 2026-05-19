"use client"
import { cn } from "@/lib/cn"

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center mx-auto", className)}>
      {label && (
        <p className="text-[var(--color-text-secondary)] text-[10px] font-mono font-semibold tracking-[0.25em] uppercase mb-4">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] text-[var(--color-text-primary)] leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed", centered && "max-w-2xl mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
