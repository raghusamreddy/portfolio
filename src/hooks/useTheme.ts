"use client"

import { useState, useEffect, useCallback } from "react"

type Theme = "dark" | "light"

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("dark")

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") as Theme
    setThemeState(current || "dark")
  }, [])

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"
    setThemeState(next)
    document.documentElement.setAttribute("data-theme", next)
    localStorage.setItem("theme", next)
  }, [])

  return { theme, setTheme, toggleTheme }
}
