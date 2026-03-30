import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Theme = 'light' | 'dark'

interface ThemeState {
  mode: Theme
}

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('portfolio-theme') as Theme | null
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'dark'
}

const initialState: ThemeState = {
  mode: getInitialTheme(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
      localStorage.setItem('portfolio-theme', state.mode)
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.mode = action.payload
      localStorage.setItem('portfolio-theme', state.mode)
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
