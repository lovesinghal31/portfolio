"use client"

import { useSyncExternalStore, useCallback } from "react"

export function useReducedMotion(): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      const matchMedia = window.matchMedia("(prefers-reduced-motion: reduce)")
      matchMedia.addEventListener("change", callback)
      return () => matchMedia.removeEventListener("change", callback)
    },
    []
  )

  const getSnapshot = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const getServerSnapshot = () => false

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
