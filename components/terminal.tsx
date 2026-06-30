"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface TerminalProps {
  commands?: { prompt: string; output: string }[]
  className?: string
  title?: string
}

const defaultCommands = [
  {
    prompt: "whoami",
    output: "love-singhal — backend engineer",
  },
  {
    prompt: "cat stack.yml",
    output: "runtime: Node.js | TypeScript\nframeworks: Next.js, NestJS, Express\ndata: PostgreSQL, Redis, MongoDB\ninfra: Docker, GitHub Actions",
  },
  {
    prompt: "git log --oneline -3",
    output: "a1b2c3d feat: implement real-time message queue\n9e8f7g6 refactor: optimize database connection pooling\n5h4i3j2 fix: resolve WebSocket reconnection edge case",
  },
]

export function Terminal({
  commands = defaultCommands,
  className,
  title = "terminal",
}: TerminalProps) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [phase, setPhase] = useState<"prompt" | "output">("prompt")
  const [currentCommand, setCurrentCommand] = useState(0)
  const totalLines = commands.length * 2
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (currentCommand >= commands.length) return

    const cmd = commands[currentCommand]

    if (phase === "prompt") {
      intervalRef.current = setInterval(() => {
        setCurrentChar((prev) => {
          if (prev >= cmd.prompt.length) {
            clearInterval(intervalRef.current!)
            setTimeout(() => {
              setPhase("output")
              setCurrentChar(0)
            }, 300)
            return prev
          }
          return prev + 1
        })
      }, 50)
    } else {
      // Show output instantly, then move to next command
      setTimeout(() => {
        setVisibleLines((prev) => prev + 1)
        setPhase("prompt")
        setCurrentChar(0)
        setCurrentCommand((prev) => prev + 1)
      }, 400)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [currentCommand, phase, commands])

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-[#0d1117] font-mono text-sm",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#f85149]/80" />
          <div className="h-3 w-3 rounded-full bg-[#d29922]/80" />
          <div className="h-3 w-3 rounded-full bg-[#3fb950]/80" />
        </div>
        <span className="ml-2 text-xs text-muted-foreground">{title}</span>
      </div>

      {/* Terminal body */}
      <div className="p-4 text-[13px] leading-relaxed">
        {commands.map((cmd, i) => {
          if (i > currentCommand) return null
          const isCurrentCmd = i === currentCommand

          return (
            <div key={i} className="mb-3 last:mb-0">
              {/* Prompt line */}
              <div className="flex gap-2">
                <span className="text-[#3fb950] select-none">❯</span>
                <span className="text-[#e6edf3]">
                  {isCurrentCmd && phase === "prompt"
                    ? cmd.prompt.slice(0, currentChar)
                    : cmd.prompt}
                  {isCurrentCmd && phase === "prompt" && (
                    <span className="inline-block w-2 h-4 ml-0.5 bg-[#e6edf3] animate-pulse align-middle" />
                  )}
                </span>
              </div>

              {/* Output */}
              {(!isCurrentCmd || phase === "output" || i < currentCommand) && (
                <div className="mt-1 pl-5 text-muted-foreground whitespace-pre-line">
                  {cmd.output}
                </div>
              )}
            </div>
          )
        })}

        {/* Final cursor */}
        {currentCommand >= commands.length && (
          <div className="flex gap-2 mt-3">
            <span className="text-[#3fb950] select-none">❯</span>
            <span className="inline-block w-2 h-4 bg-[#e6edf3] animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}
