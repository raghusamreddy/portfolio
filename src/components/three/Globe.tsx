"use client"

import { useEffect, useRef, useCallback } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  label: string
  tier: "core" | "primary" | "secondary"
  pulsePhase: number
}

const TECH_NODES: { label: string; tier: "core" | "primary" | "secondary" }[] = [
  { label: "K8s", tier: "core" },
  { label: "AWS", tier: "core" },
  { label: "Terraform", tier: "core" },
  { label: "Docker", tier: "primary" },
  { label: "ArgoCD", tier: "primary" },
  { label: "Prometheus", tier: "primary" },
  { label: "Grafana", tier: "primary" },
  { label: "Istio", tier: "secondary" },
  { label: "Helm", tier: "secondary" },
  { label: "Azure", tier: "primary" },
  { label: "Python", tier: "secondary" },
  { label: "Jenkins", tier: "secondary" },
  { label: "Splunk", tier: "secondary" },
  { label: "ELK", tier: "secondary" },
]

const COLORS_DARK = {
  core: { fill: "rgba(245,245,247,0.95)", glow: "rgba(255,255,255,0.2)", ring: "rgba(255,255,255,0.4)" },
  primary: { fill: "rgba(134,134,139,0.9)", glow: "rgba(255,255,255,0.1)", ring: "rgba(255,255,255,0.25)" },
  secondary: { fill: "rgba(110,110,115,0.6)", glow: "rgba(255,255,255,0.05)", ring: "rgba(255,255,255,0.12)" },
}

const COLORS_LIGHT = {
  core: { fill: "rgba(29,29,31,0.95)", glow: "rgba(0,0,0,0.1)", ring: "rgba(0,0,0,0.3)" },
  primary: { fill: "rgba(110,110,115,0.9)", glow: "rgba(0,0,0,0.06)", ring: "rgba(0,0,0,0.2)" },
  secondary: { fill: "rgba(134,134,139,0.7)", glow: "rgba(0,0,0,0.03)", ring: "rgba(0,0,0,0.1)" },
}

function getThemeColors() {
  const theme = document.documentElement.getAttribute("data-theme")
  return theme === "light" ? COLORS_LIGHT : COLORS_DARK
}

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animRef = useRef<number>(0)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const timeRef = useRef(0)

  const initNodes = useCallback((width: number, height: number) => {
    const cx = width / 2
    const cy = height / 2
    const maxRadius = Math.min(width, height) * 0.38

    nodesRef.current = TECH_NODES.map((tech, i) => {
      const angle = (i / TECH_NODES.length) * Math.PI * 2 + Math.random() * 0.4
      const dist = tech.tier === "core"
        ? maxRadius * (0.15 + Math.random() * 0.2)
        : tech.tier === "primary"
          ? maxRadius * (0.4 + Math.random() * 0.25)
          : maxRadius * (0.65 + Math.random() * 0.25)

      return {
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: tech.tier === "core" ? 28 : tech.tier === "primary" ? 20 : 14,
        label: tech.label,
        tier: tech.tier,
        pulsePhase: Math.random() * Math.PI * 2,
      }
    })
  }, [])

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let disposed = false

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      const w = container.clientWidth
      const h = container.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (nodesRef.current.length === 0) {
        initNodes(w, h)
      }
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleLeave = () => { mouseRef.current = { x: -1000, y: -1000 } }
    canvas.addEventListener("mousemove", handleMouse)
    canvas.addEventListener("mouseleave", handleLeave)

    const draw = () => {
      if (disposed) return
      animRef.current = requestAnimationFrame(draw)
      timeRef.current += 0.016

      const w = container.clientWidth
      const h = container.clientHeight
      const cx = w / 2
      const cy = h / 2
      const nodes = nodesRef.current
      const t = timeRef.current
      const mouse = mouseRef.current
      const COLORS = getThemeColors()
      const isLight = document.documentElement.getAttribute("data-theme") === "light"

      ctx.clearRect(0, 0, w, h)

      // Update positions with gentle orbit
      for (const node of nodes) {
        const dx = node.x - cx
        const dy = node.y - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const angle = Math.atan2(dy, dx)

        const orbitalSpeed = node.tier === "core" ? 0.08 : node.tier === "primary" ? 0.05 : 0.03
        node.x = cx + Math.cos(angle + orbitalSpeed * 0.016) * dist
        node.y = cy + Math.sin(angle + orbitalSpeed * 0.016) * dist

        // Mouse repulsion
        const mdx = node.x - mouse.x
        const mdy = node.y - mouse.y
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mDist < 100) {
          const force = (100 - mDist) / 100 * 2
          node.x += (mdx / mDist) * force
          node.y += (mdy / mDist) * force
        }

        // Keep in bounds
        const maxDist = Math.min(w, h) * 0.42
        if (dist > maxDist) {
          node.x = cx + (dx / dist) * maxDist
          node.y = cy + (dy / dist) * maxDist
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxConn = (a.tier === "core" || b.tier === "core") ? 180 : 130

          if (dist < maxConn) {
            const alpha = (1 - dist / maxConn) * 0.3

            const pulsePos = ((t * 0.5 + i * 0.3) % 1)
            const px = a.x + (b.x - a.x) * pulsePos
            const py = a.y + (b.y - a.y) * pulsePos

            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = isLight ? `rgba(0,0,0,${alpha * 0.3})` : `rgba(255,255,255,${alpha * 0.4})`
            ctx.lineWidth = 0.5
            ctx.stroke()

            if (alpha > 0.15) {
              ctx.beginPath()
              ctx.arc(px, py, 1.5, 0, Math.PI * 2)
              ctx.fillStyle = isLight ? `rgba(0,0,0,${alpha * 0.8})` : `rgba(255,255,255,${alpha * 1.2})`
              ctx.fill()
            }
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const colors = COLORS[node.tier]
        const pulse = Math.sin(t * 2 + node.pulsePhase) * 0.1 + 0.9
        const r = node.radius * pulse

        // Outer glow
        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 2)
        grad.addColorStop(0, colors.glow)
        grad.addColorStop(1, "transparent")
        ctx.beginPath()
        ctx.arc(node.x, node.y, r * 2, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        // Node circle
        ctx.beginPath()
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
        ctx.fillStyle = isLight ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.85)"
        ctx.fill()
        ctx.strokeStyle = colors.ring
        ctx.lineWidth = 1
        ctx.stroke()

        // Label
        ctx.font = `${node.tier === "core" ? "600 10px" : node.tier === "primary" ? "500 9px" : "400 8px"} -apple-system, system-ui, sans-serif`
        ctx.fillStyle = colors.fill
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(node.label, node.x, node.y)
      }

      // Center glow
      const centerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50)
      centerGrad.addColorStop(0, isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.04)")
      centerGrad.addColorStop(1, "transparent")
      ctx.beginPath()
      ctx.arc(cx, cy, 50, 0, Math.PI * 2)
      ctx.fillStyle = centerGrad
      ctx.fill()
    }

    draw()

    return () => {
      disposed = true
      cancelAnimationFrame(animRef.current)
      ro.disconnect()
      canvas.removeEventListener("mousemove", handleMouse)
      canvas.removeEventListener("mouseleave", handleLeave)
    }
  }, [initNodes])

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
