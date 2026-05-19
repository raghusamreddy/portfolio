"use client"
import { cn } from "@/lib/cn"

interface BadgeProps {
  children: React.ReactNode
  variant?: "accent" | "success" | "muted" | "outline"
  size?: "sm" | "md"
  className?: string
}

export function Badge({
  children,
  variant = "accent",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono tracking-wide rounded-full border",
        size === "sm" && "text-[10px] px-2 py-0.5",
        size === "md" && "text-xs px-3 py-1",
        variant === "accent" &&
          "bg-[var(--color-accent-muted)] border-[var(--color-border-accent)] text-[var(--color-text-primary)]",
        variant === "success" &&
          "bg-[rgba(48,209,88,0.1)] border-[rgba(48,209,88,0.25)] text-[#30d158]",
        variant === "muted" &&
          "bg-[var(--color-accent-muted)] border-[var(--color-border)] text-[var(--color-text-muted)]",
        variant === "outline" &&
          "bg-transparent border-[var(--color-border-accent)] text-[var(--color-text-secondary)]",
        className
      )}
    >
      {children}
    </span>
  )
}
