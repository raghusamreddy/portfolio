"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import { personal } from "@/data/resume"
import { Button } from "@/components/ui/Button"

const NetworkViz = dynamic(() => import("@/components/three/Globe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 rounded-full opacity-20" style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)" }} />
    </div>
  ),
})

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
}

const titleVariants = {
  enter: { opacity: 0, y: 24, filter: "blur(4px)" },
  center: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease } },
  exit: { opacity: 0, y: -20, filter: "blur(4px)", transition: { duration: 0.3, ease: "easeIn" as const } },
}

function RotatingTitle() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % personal.titles.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative h-10 sm:h-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={personal.titles[index]}
          variants={titleVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex items-center gradient-text text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
        >
          {personal.titles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function StatusPill() {
  return (
    <motion.div variants={fadeUp} className="flex items-center gap-3">
      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-accent-muted)] px-4 py-1.5 text-xs font-mono text-[var(--color-text-muted)]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#30d158] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#30d158]" />
        </span>
        {personal.location} · Available for opportunities
      </span>
    </motion.div>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <span className="text-[var(--color-text-muted)] text-[10px] font-mono tracking-[0.2em] uppercase">scroll</span>
      <motion.div
        className="w-px h-8 bg-gradient-to-b from-[rgba(255,255,255,0.4)] to-transparent"
        animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.8, 0.3] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-stretch overflow-hidden bg-[var(--color-background)]"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Radial gradient vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 30% 50%, transparent 30%, var(--color-background) 100%)" }}
      />

      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15) 50%, transparent)" }}
      />

      {/* Left column — Content */}
      <div className="relative z-10 flex-[0_0_100%] md:flex-[0_0_55%] flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-28 pb-24 md:py-0">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 max-w-2xl"
        >
          {/* Terminal prompt */}
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <span className="font-mono text-xs text-[var(--color-text-secondary)] tracking-wide">$</span>
            <span className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest">whoami</span>
            <span className="w-1.5 h-4 bg-[var(--color-text-primary)] animate-[cursor-blink_1s_infinite] ml-1" />
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(2.8rem,7vw,5rem)] font-black leading-[0.9] tracking-[-0.04em] text-[var(--color-text-primary)]"
          >
            {personal.name}
          </motion.h1>

          {/* Rotating title */}
          <motion.div variants={fadeUp}>
            <RotatingTitle />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed max-w-lg"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
            <Button variant="primary" size="lg" href="#timeline">
              Explore Journey
            </Button>
            <Button variant="ghost" size="lg" href="/Raghu_Samreddy_Resume.pdf">
              Download CV
            </Button>
          </motion.div>

          {/* Status pill */}
          <StatusPill />
        </motion.div>
      </div>

      {/* Right column — Network Visualization */}
      <div
        className="hidden md:flex flex-[0_0_45%] relative items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)" }}
        />
        <div className="relative w-[460px] h-[460px] lg:w-[540px] lg:h-[540px]">
          <NetworkViz />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
