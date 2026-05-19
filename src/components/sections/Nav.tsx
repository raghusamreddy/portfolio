"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/hooks/useTheme"
import { cn } from "@/lib/cn"

const NAV_LINKS = [
  { label: "About", href: "#hero" },
  { label: "Experience", href: "#timeline" },
  { label: "Skills", href: "#skills" },
  { label: "Engineering", href: "#engineering" },
  { label: "Terminal", href: "#terminal" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? cn(
              "backdrop-blur-xl border-b",
              theme === "light"
                ? "bg-[rgba(255,255,255,0.85)] border-[rgba(0,0,0,0.06)] shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                : "bg-[rgba(0,0,0,0.8)] border-[rgba(255,255,255,0.06)] shadow-[0_1px_0_rgba(255,255,255,0.05)]"
            )
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12">
        {/* Brand */}
        <a
          href="#hero"
          className={cn(
            "font-semibold text-sm tracking-tight transition-colors duration-300",
            theme === "light" ? "text-[#1d1d1f] hover:text-black" : "text-[#f5f5f7] hover:text-white"
          )}
        >
          Raghu Samreddy
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-full text-[12px] transition-all duration-300",
                  theme === "light"
                    ? "text-[#6e6e73] hover:text-[#1d1d1f]"
                    : "text-[#86868b] hover:text-[#f5f5f7]"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle + Mobile hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors duration-300",
              theme === "light"
                ? "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.05)]"
                : "text-[#86868b] hover:text-[#f5f5f7] hover:bg-[rgba(255,255,255,0.06)]"
            )}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle navigation menu"
          >
            <span className={cn("w-5 h-[1.5px] rounded-full transition-all duration-300", theme === "light" ? "bg-[#6e6e73]" : "bg-[#86868b]", mobileOpen && "rotate-45 translate-y-[7px]")} />
            <span className={cn("w-5 h-[1.5px] rounded-full transition-all duration-300", theme === "light" ? "bg-[#6e6e73]" : "bg-[#86868b]", mobileOpen && "opacity-0 scale-0")} />
            <span className={cn("w-5 h-[1.5px] rounded-full transition-all duration-300", theme === "light" ? "bg-[#6e6e73]" : "bg-[#86868b]", mobileOpen && "-rotate-45 -translate-y-[7px]")} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "md:hidden backdrop-blur-xl border-b overflow-hidden",
              theme === "light"
                ? "bg-[rgba(255,255,255,0.95)] border-[rgba(0,0,0,0.06)]"
                : "bg-[rgba(0,0,0,0.95)] border-[rgba(255,255,255,0.06)]"
            )}
          >
            <ul className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block px-4 py-2.5 rounded-xl text-sm transition-all duration-300",
                      theme === "light"
                        ? "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.04)]"
                        : "text-[#86868b] hover:text-[#f5f5f7] hover:bg-[rgba(255,255,255,0.04)]"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
