import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

// Minimal Slot implementation to avoid adding Radix dependency for now.
interface SlotProps extends React.HTMLAttributes<HTMLElement> { children: React.ReactElement }
const Slot = React.forwardRef<HTMLElement, SlotProps>(function Slot({ children, ...props }, ref) {
  return React.cloneElement(children as React.ReactElement, { ...props, ref } as Record<string, unknown>)
})

// Button component (shadcn style) — edit variants or sizes as needed
// Content edits: Mostly used for CTAs across the site.
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, children, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot ref={ref as unknown as React.ForwardedRef<HTMLElement>} className={cn(buttonVariants({ variant, size, className }))} {...props}>
          {children as React.ReactElement}
        </Slot>
      )
    }
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { buttonVariants }
