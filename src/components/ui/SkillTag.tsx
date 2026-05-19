"use client"
import { cn } from "@/lib/cn"
import type { SkillTier } from "@/data/resume"

interface SkillTagProps {
  name: string
  tier: SkillTier
  onClick?: () => void
  isActive?: boolean
  className?: string
}

const tierStyles: Record<SkillTier, string> = {
  expert:
    "text-base font-bold bg-[var(--color-accent-muted)] border-[var(--color-border-accent)] text-[var(--color-text-primary)] hover:bg-[rgba(var(--tw-color-accent-muted))] hover:border-[var(--color-accent)]",
  senior:
    "text-sm font-semibold bg-[var(--color-accent-muted)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-accent-muted)] hover:border-[var(--color-border-accent)]",
  proficient:
    "text-xs font-medium bg-[var(--color-accent-muted)] border-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-[var(--color-accent-muted)] hover:border-[var(--color-border)]",
}

export function SkillTag({ name, tier, onClick, isActive, className }: SkillTagProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full border font-mono transition-all duration-200 cursor-default",
        tierStyles[tier],
        isActive && "ring-1 ring-white/30 ring-offset-1 ring-offset-black",
        onClick && "cursor-pointer",
        className
      )}
    >
      {name}
    </button>
  )
}
