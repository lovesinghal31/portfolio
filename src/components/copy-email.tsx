"use client"
import { useState } from 'react'
import { Button } from './ui/button'
import { Check, Copy } from 'lucide-react'

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }
  return (
    <Button onClick={handleCopy} variant="outline" className="gap-2 text-sm" aria-live="polite">
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? 'Copied!' : 'Copy Email'}
    </Button>
  )
}
