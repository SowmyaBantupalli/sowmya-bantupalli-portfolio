import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circle' | 'rect'
}

export function Skeleton({ className, variant = 'rect' }: SkeletonProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-dark-700/60',
        variant === 'circle' && 'rounded-full',
        variant === 'text' && 'rounded-md',
        variant === 'rect' && 'rounded-xl',
        className
      )}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
    </div>
  )
}

export function ProjectCardSkeleton() {
  return (
    <div className="rounded-2xl border border-dark-700/50 bg-dark-800/50 p-6 space-y-4">
      <Skeleton className="h-48 w-full" />
      <Skeleton variant="text" className="h-6 w-3/4" />
      <Skeleton variant="text" className="h-4 w-full" />
      <Skeleton variant="text" className="h-4 w-5/6" />
      <div className="flex gap-2">
        <Skeleton variant="text" className="h-6 w-16 rounded-full" />
        <Skeleton variant="text" className="h-6 w-20 rounded-full" />
        <Skeleton variant="text" className="h-6 w-14 rounded-full" />
      </div>
    </div>
  )
}
