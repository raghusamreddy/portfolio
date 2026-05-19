"use client"
import { cn } from "@/lib/cn"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
  href?: string
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40 focus-visible:outline-offset-2 disabled:opacity-50 cursor-pointer"

  const variants = {
    primary: cn(
      "bg-[var(--color-accent)] text-[var(--color-background)]",
      "hover:bg-[var(--color-accent-light)] hover:shadow-[0_0_20px_rgba(0,0,0,0.08)]",
      "active:scale-[0.97]"
    ),
    ghost: cn(
      "bg-transparent border border-[var(--color-border-accent)] text-[var(--color-text-secondary)]",
      "hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]",
      "active:scale-[0.97]"
    ),
    outline: cn(
      "bg-transparent border border-[var(--color-border-accent)] text-[var(--color-text-primary)]",
      "hover:bg-[var(--color-accent-muted)] hover:border-[var(--color-accent)]",
      "active:scale-[0.97]"
    ),
  }

  const sizes = {
    sm: "text-xs px-4 py-1.5",
    md: "text-sm px-5 py-2.5",
    lg: "text-sm px-7 py-3",
  }

  if (href) {
    const isExternal = href.startsWith("http")
    const isDownload = href.endsWith(".pdf")
    return (
      <a
        href={href}
        className={cn(base, variants[variant], sizes[size], className)}
        {...(isExternal && { target: "_blank", rel: "noreferrer" })}
        {...(isDownload && { download: true })}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
