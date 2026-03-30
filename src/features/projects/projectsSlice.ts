import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type ProjectFilter = 'all' | 'react' | 'angular' | 'fullstack'

interface ProjectsState {
  activeFilter: ProjectFilter
  hoveredProject: string | null
}

const initialState: ProjectsState = {
  activeFilter: 'all',
  hoveredProject: null,
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<ProjectFilter>) {
      state.activeFilter = action.payload
    },
    setHoveredProject(state, action: PayloadAction<string | null>) {
      state.hoveredProject = action.payload
    },
  },
})

export const { setFilter, setHoveredProject } = projectsSlice.actions
export default projectsSlice.reducer
