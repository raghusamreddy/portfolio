import { useState, useCallback } from "react"
import { terminalCommands } from "@/data/resume"

export interface TerminalLine {
  type: "command" | "output" | "prompt"
  content: string
}

const INITIAL_LINES: TerminalLine[] = [
  { type: "output", content: "Welcome to raghu.samreddy terminal" },
  { type: "output", content: "Type 'help' to see available commands." },
]

const MAX_HISTORY = 50

export function useTerminal(): {
  lines: TerminalLine[]
  currentInput: string
  setCurrentInput: (v: string) => void
  executeCommand: (cmd: string) => void
  historyIndex: number
  setHistoryIndex: (v: number) => void
  commandHistory: string[]
} {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES)
  const [currentInput, setCurrentInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const executeCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim()

    if (!trimmed) return

    // Add the typed command as a line
    setLines((prev) => [...prev, { type: "command", content: trimmed }])

    // Update history (deduplicate consecutive repeats, cap at 50)
    setCommandHistory((prev) => {
      const updated = [trimmed, ...prev.filter((c, i) => !(i === 0 && c === trimmed))]
      return updated.slice(0, MAX_HISTORY)
    })
    setHistoryIndex(-1)

    const key = trimmed.toLowerCase()

    if (key === "clear") {
      setLines([])
      return
    }

    const output = terminalCommands[key]

    if (output !== undefined) {
      const outputLines: TerminalLine[] = output
        .split("\n")
        .map((line) => ({ type: "output" as const, content: line }))
      setLines((prev) => [...prev, ...outputLines])
    } else {
      setLines((prev) => [
        ...prev,
        {
          type: "output",
          content: `Command not found: '${trimmed}'. Type 'help' for available commands.`,
        },
      ])
    }
  }, [])

  return {
    lines,
    currentInput,
    setCurrentInput,
    executeCommand,
    historyIndex,
    setHistoryIndex,
    commandHistory,
  }
}
