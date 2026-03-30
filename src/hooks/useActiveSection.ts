import { useEffect } from 'react'
import { useAppDispatch } from '@/app/hooks'
import { setActiveSection } from '@/features/ui/uiSlice'

const SECTIONS = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact']

export function useActiveSection() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>()

    SECTIONS.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            dispatch(setActiveSection(sectionId))
          }
        },
        { threshold: 0.4 }
      )

      observer.observe(element)
      observers.set(sectionId, observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [dispatch])
}
