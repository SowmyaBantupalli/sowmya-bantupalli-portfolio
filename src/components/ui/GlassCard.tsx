import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  glowColor?: string
  onClick?: () => void
  as?: 'div' | 'article' | 'section'
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  glowColor,
  onClick,
  as = 'div',
}: GlassCardProps) {
  const Tag = as

  return (
    <motion.div
      className={cn(
        'relative rounded-2xl overflow-hidden',
        'bg-dark-800/50 dark:bg-dark-800/60 backdrop-blur-sm',
        'border border-dark-700/50 dark:border-dark-600/30',
        hover && 'transition-all duration-300 cursor-default',
        className
      )}
      whileHover={
        hover
          ? {
              y: -4,
              borderColor: glowColor ? `${glowColor}40` : 'rgba(99,102,241,0.3)',
              boxShadow: glow
                ? `0 20px 60px -10px ${glowColor || 'rgba(99,102,241,0.3)'}`
                : '0 20px 40px -10px rgba(0,0,0,0.4)',
            }
          : undefined
      }
      onClick={onClick}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
      <Tag className="relative z-10 h-full">{children}</Tag>
    </motion.div>
  )
}
