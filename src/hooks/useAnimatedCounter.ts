import { useState, useEffect, useRef } from 'react'

interface UseAnimatedCounterOptions {
  end: number
  duration?: number
  delay?: number
  easing?: 'linear' | 'easeOut' | 'easeInOut'
}

export function useAnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  easing = 'easeOut',
}: UseAnimatedCounterOptions) {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const frameRef = useRef<number>(0)

  const easingFunctions = {
    linear: (t: number) => t,
    easeOut: (t: number) => 1 - Math.pow(1 - t, 3),
    easeInOut: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  }

  useEffect(() => {
    if (!isActive) return

    const startTime = performance.now() + delay
    const easeFn = easingFunctions[easing]

    const animate = (currentTime: number) => {
      if (currentTime < startTime) {
        frameRef.current = requestAnimationFrame(animate)
        return
      }

      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeFn(progress)

      setCount(Math.floor(easedProgress * end))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [isActive, end, duration, delay, easing])

  return { count, start: () => setIsActive(true), reset: () => { setIsActive(false); setCount(0) } }
}
