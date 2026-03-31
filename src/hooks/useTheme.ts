import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { toggleTheme, setTheme } from '@/features/theme/themeSlice'

export function useTheme() {
  const dispatch = useAppDispatch()
  const mode = useAppSelector((state) => state.theme.mode)

  useEffect(() => {
    const root = document.documentElement
    if (mode === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
  }, [mode])

  return {
    theme: mode,
    isDark: mode === 'dark',
    toggleTheme: () => dispatch(toggleTheme()),
    setTheme: (t: 'light' | 'dark') => dispatch(setTheme(t)),
  }
}
