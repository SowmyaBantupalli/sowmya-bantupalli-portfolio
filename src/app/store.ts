import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '@/features/theme/themeSlice'
import projectsReducer from '@/features/projects/projectsSlice'
import uiReducer from '@/features/ui/uiSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
