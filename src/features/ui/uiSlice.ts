import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  mobileMenuOpen: boolean
  activeSection: string
  contactFormStatus: 'idle' | 'loading' | 'success' | 'error'
}

const initialState: UIState = {
  mobileMenuOpen: false,
  activeSection: 'hero',
  contactFormStatus: 'idle',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false
    },
    setActiveSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload
    },
    setContactFormStatus(state, action: PayloadAction<UIState['contactFormStatus']>) {
      state.contactFormStatus = action.payload
    },
  },
})

export const { toggleMobileMenu, closeMobileMenu, setActiveSection, setContactFormStatus } =
  uiSlice.actions
export default uiSlice.reducer
