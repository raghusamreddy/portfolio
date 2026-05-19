"use client"

import { motion } from "framer-motion"
import { fadeIn, viewportOnce } from "@/lib/motion"

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn}
      className="relative bg-[var(--color-background)] border-t border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between sm:gap-0">
          <span className="text-[var(--color-text-primary)] font-semibold text-sm tracking-tight">
            Raghu Samreddy
          </span>

          <p className="italic text-[var(--color-text-muted)] text-xs text-center">
            &ldquo;Reliability is a feature, not a guarantee.&rdquo;
          </p>

          <p className="text-[var(--color-text-muted)] text-xs">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
