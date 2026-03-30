import React from 'react'
import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'glass'

interface BadgeProps {
  variant?: BadgeVariant
  size?: 'sm' | 'md'
  children: React.ReactNode
  className?: string
  dot?: boolean
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-dark-700 text-dark-200 border border-dark-600',
  primary: 'bg-brand-500/15 text-brand-300 border border-brand-500/25',
  success: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/25',
  warning: 'bg-amber-500/15 text-amber-300 border border-amber-500/25',
  danger: 'bg-rose-500/15 text-rose-300 border border-rose-500/25',
  info: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/25',
  glass: 'bg-white/5 text-white/80 border border-white/10 backdrop-blur-sm',
}

export function Badge({ variant = 'default', size = 'sm', children, className, dot }: BadgeProps) {
  const sizeStyles = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full',
        sizeStyles,
        variants[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full flex-shrink-0',
            variant === 'success' && 'bg-emerald-400',
            variant === 'warning' && 'bg-amber-400',
            variant === 'danger' && 'bg-rose-400',
            variant === 'primary' && 'bg-brand-400',
            variant === 'info' && 'bg-cyan-400',
            variant === 'default' && 'bg-dark-400'
          )}
        />
      )}
      {children}
    </span>
  )
}
