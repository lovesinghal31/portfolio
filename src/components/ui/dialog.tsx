"use client"
import * as React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

interface DialogProps {
  open: boolean
  onOpenChange(open: boolean): void
  children: React.ReactNode
}

const DialogContext = React.createContext<DialogProps | null>(null)

export function DialogRoot({ open, onOpenChange, children }: DialogProps) {
  return <DialogContext.Provider value={{ open, onOpenChange, children }}>{children}</DialogContext.Provider>
}

export function useDialog() {
  const ctx = React.useContext(DialogContext)
  if (!ctx) throw new Error('Dialog components must be used within <DialogRoot>')
  return ctx
}

export function DialogTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactElement<any> }) {
  const { onOpenChange } = useDialog()
  if (asChild) {
    return React.cloneElement(children, {
      onClick: (e: any) => {
        children.props?.onClick?.(e)
        onOpenChange(true)
      }
    })
  }
  return <button onClick={() => onOpenChange(true)}>{children}</button>
}

export function DialogContent({ className, children, title }: { className?: string; children: React.ReactNode; title?: string }) {
  const { open, onOpenChange } = useDialog()
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={() => onOpenChange(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, y: 40, scale: .95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: .97 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className={cn('relative w-full max-w-lg rounded-xl border bg-background shadow-xl p-6 overflow-hidden', className)}
          >
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-accent"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold mb-2 pr-8">{children}</h2>
}

export function DialogDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
}
