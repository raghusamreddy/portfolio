export interface HighlightSegment {
  text: string
  color: string // empty string means default color
}

export function highlightLine(text: string): HighlightSegment[] {
  if (text.length === 0) {
    return [{ text: "", color: "" }]
  }

  // Create a colors array — one entry per character, initially empty (default)
  const colors: string[] = new Array(text.length).fill("")

  // Helper: mark a range with a color (first match wins — skip already colored)
  function markRange(start: number, end: number, color: string) {
    for (let i = start; i < end && i < text.length; i++) {
      if (colors[i] === "") {
        colors[i] = color
      }
    }
  }

  // Helper: apply all matches of a regex with a given color
  function applyRegex(regex: RegExp, color: string) {
    regex.lastIndex = 0
    let match: RegExpExecArray | null
    let safety = 0
    while ((match = regex.exec(text)) !== null) {
      if (match[0].length === 0) {
        // Prevent infinite loop on zero-width match
        regex.lastIndex++
        continue
      }
      markRange(match.index, match.index + match[0].length, color)
      safety++
      if (safety > 10000) break
    }
  }

  // ─── Rule 1: Green — Success words ──────────────────────────────────────────
  const greenRegex =
    /\b(Running|ok|passing|healthy|deployed|complete|success|Ready|Up|active|ACTIVE|created)\b|Creation complete|Apply complete/g
  applyRegex(greenRegex, "#30d158")

  // ─── Rule 2: Red — Error words ──────────────────────────────────────────────
  const redRegex =
    /\b(error|failed|Error|FAILED|denied|unreachable)\b|Permission denied/g
  applyRegex(redRegex, "#ff453a")

  // ─── Rule 3: Yellow — Warnings ─────────────────────────────────────────────
  const yellowRegex =
    /\b(warning|pending|Pending|changed|modified)\b|Enter a value/g
  applyRegex(yellowRegex, "#ffd60a")

  // ─── Rule 4: Cyan — Paths, URLs, resource IDs ──────────────────────────────
  const cyanRegex =
    /(?:\/[\w./-]+)|(?:https?:\/\/[^\s]+)|(?:\b(?:i-[0-9a-f]+|sg-[0-9a-f]+|vpc-[0-9a-f]+|subnet-[0-9a-f]+|sgrule-[0-9a-z]+|vol-[0-9a-f]+|ami-[0-9a-f]+|arn:[^\s,]+)\b)/g
  applyRegex(cyanRegex, "#64d2ff")

  // ─── Rule 5: Purple — Numbers with units, IPs, versions ────────────────────
  const purpleRegex =
    /\b\d+\.\d+\.\d+\.\d+\b|\bv\d+\.\d+(?:\.\d+)?(?:-[a-zA-Z0-9.]+)?\b|\b\d+(?:\.\d+)?(?:%|MiB|GiB|Mi|Gi|Ki|MB|GB|KB|TB|ms|m|s|d|h)\b/g
  applyRegex(purpleRegex, "#bf5af2")

  // ─── Rule 6: Orange — Section headers (lines starting with all-caps words) ─
  const orangeRegex =
    /^(?:TASK|PLAY|CONTAINER|NAME|REPOSITORY|PID|INSTANCES|PLAY RECAP|NAMESPACE)\b.*$/gm
  applyRegex(orangeRegex, "#ff9f0a")

  // ─── Rule 7: Bright white — Checkmarks and + at start of lines ─────────────
  const whiteRegex = /✓|^\+/gm
  applyRegex(whiteRegex, "#ffffff")

  // ─── Merge consecutive characters with same color into segments ─────────────
  const segments: HighlightSegment[] = []
  let currentColor = colors[0]
  let currentText = text[0]

  for (let i = 1; i < text.length; i++) {
    if (colors[i] === currentColor) {
      currentText += text[i]
    } else {
      segments.push({ text: currentText, color: currentColor })
      currentColor = colors[i]
      currentText = text[i]
    }
  }
  // Push the final segment
  segments.push({ text: currentText, color: currentColor })

  return segments
}
