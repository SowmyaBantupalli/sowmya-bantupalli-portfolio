import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'glass'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-brand-500 to-accent-violet text-white shadow-glow hover:shadow-glow-violet hover:from-brand-600 hover:to-violet-600 border border-brand-400/30',
  secondary:
    'bg-dark-800 dark:bg-dark-700 text-dark-100 hover:bg-dark-700 dark:hover:bg-dark-600 border border-dark-600',
  ghost:
    'bg-transparent text-dark-300 hover:bg-dark-800/50 hover:text-white dark:text-dark-300 dark:hover:bg-dark-700/50',
  outline:
    'bg-transparent border border-brand-500/50 text-brand-400 hover:bg-brand-500/10 hover:border-brand-400',
  glass:
    'bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2',
  xl: 'px-8 py-4 text-lg gap-3',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      as = 'button',
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none'

    const Component = motion[as === 'a' ? 'a' : 'button'] as React.ElementType

    const componentProps =
      as === 'a'
        ? { href, target, rel }
        : { ref, type: 'button', disabled: disabled || isLoading, ...props }

    return (
      <Component
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        {...componentProps}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </Component>
    )
  }
)

Button.displayName = 'Button'
