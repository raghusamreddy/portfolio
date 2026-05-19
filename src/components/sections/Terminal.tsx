"use client"

import { useEffect, useRef, KeyboardEvent } from "react"
import { motion } from "framer-motion"
import { useTerminal } from "@/hooks/useTerminal"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { terminalCommands } from "@/data/resume"
import { highlightLine } from "@/lib/terminalHighlight"
import { fadeUp, viewportOnce } from "@/lib/motion"

const KNOWN_COMMANDS = Object.keys(terminalCommands)

function HighlightedOutput({ text }: { text: string }) {
  const segments = highlightLine(text)
  return (
    <span className="whitespace-pre-wrap">
      {segments.map((seg, i) => (
        <span
          key={i}
          style={seg.color ? { color: seg.color } : undefined}
          className={!seg.color ? "text-[#94a3b8]" : undefined}
        >
          {seg.text}
        </span>
      ))}
    </span>
  )
}

export default function Terminal() {
  const {
    lines,
    currentInput,
    setCurrentInput,
    executeCommand,
    historyIndex,
    setHistoryIndex,
    commandHistory,
  } = useTerminal()

  const bottomRef = useRef<HTMLDivElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const hasAutoRun = useRef(false)

  useEffect(() => {
    const el = scrollAreaRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines])

  useEffect(() => {
    if (hasAutoRun.current) return
    hasAutoRun.current = true

    const timer = setTimeout(() => {
      executeCommand("help")
    }, 1000)

    return () => clearTimeout(timer)
  }, [executeCommand])

  function focusInput() {
    inputRef.current?.focus()
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      executeCommand(currentInput)
      setCurrentInput("")
      setHistoryIndex(-1)
      return
    }

    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length === 0) return
      const nextIndex = Math.min(historyIndex + 1, commandHistory.length - 1)
      setHistoryIndex(nextIndex)
      setCurrentInput(commandHistory[nextIndex] ?? "")
      return
    }

    if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex <= 0) {
        setHistoryIndex(-1)
        setCurrentInput("")
        return
      }
      const nextIndex = historyIndex - 1
      setHistoryIndex(nextIndex)
      setCurrentInput(commandHistory[nextIndex] ?? "")
      return
    }

    if (e.key === "Tab") {
      e.preventDefault()
      const partial = currentInput.toLowerCase().trim()
      if (!partial) return
      const match = KNOWN_COMMANDS.find((cmd) => cmd.startsWith(partial))
      if (match) {
        setCurrentInput(match)
      }
    }
  }

  return (
    <section
      id="terminal"
      className="relative py-28 sm:py-36 bg-[var(--color-background)]"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 bg-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Featured radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)"
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-12"
        >
          <SectionHeader
            label="Command Center"
            title="raghu@portfolio:~$"
            subtitle="Interactive terminal — explore the stack with real DevOps commands."
          />
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="rounded-2xl overflow-hidden border border-(--color-border-accent)"
          style={{
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.05) inset, 0 25px 50px rgba(0,0,0,0.5)",
          }}
          onClick={focusInput}
        >
          {/* macOS window chrome */}
          <div className="flex items-center gap-2 px-5 py-3.5 bg-(--color-surface-2) border-b border-(--color-border)">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] block" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] block" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] block" />
            <span className="ml-auto mr-auto font-mono text-xs text-(--color-text-muted) tracking-wide select-none">
              raghu@portfolio:~$ zsh
            </span>
          </div>

          {/* Terminal body */}
          <div
            className="relative bg-[#0a0a0c] font-mono text-sm"
            style={{ minHeight: 450, maxHeight: 560 }}
          >
            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              aria-hidden="true"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)",
              }}
            />

            {/* Scrollable output area */}
            <div
              ref={scrollAreaRef}
              className="relative z-20 overflow-y-auto px-5 pt-5 pb-2"
              style={{ maxHeight: 500 }}
              onClick={(e) => {
                e.stopPropagation()
                focusInput()
              }}
            >
              {lines.map((line, i) => (
                <div key={i} className="py-0.5 leading-relaxed">
                  {line.type === "command" ? (
                    <span>
                      <span className="text-[#86868b]">❯ </span>
                      <span className="text-[#f5f5f7] font-medium">{line.content}</span>
                    </span>
                  ) : (
                    <HighlightedOutput text={line.content} />
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input row */}
            <div className="relative z-20 flex items-center gap-1 px-5 py-3 border-t border-[rgba(255,255,255,0.06)]">
              <span className="text-[#f5f5f7] font-bold select-none">❯ </span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none text-[#f5f5f7] flex-1 font-mono text-sm caret-transparent"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label="Terminal input"
              />
              <span
                className="text-[#f5f5f7] font-bold select-none"
                style={{
                  animation: "cursor-blink 1s step-end infinite",
                }}
              >
                |
              </span>
            </div>
          </div>
        </motion.div>

        {/* Hint bar */}
        <p className="mt-4 text-center font-mono text-xs text-[var(--color-text-muted)]">
          Try: <code className="text-[var(--color-text-secondary)]">whoami</code> ·{" "}
          <code className="text-[var(--color-text-secondary)]">experience</code> ·{" "}
          <code className="text-[var(--color-text-secondary)]">projects</code> ·{" "}
          <code className="text-[var(--color-text-secondary)]">skills</code> · Tab to autocomplete
        </p>
      </div>
    </section>
  )
}
