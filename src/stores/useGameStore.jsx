import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

const initialState = {
  isActive: false,
  isInteractionReady: false,
  activeResumeSection: ''
}

const useGameStore = create(
  subscribeWithSelector((set, get) => ({
    ...initialState,
    activate: () => {
      set((state) => {
        if (!state.isActive) {
          return { isActive: true }
        }

        return {}
      })
    },

    toggleInteraction: () => {
      set((state) => {
        return { isInteractionReady: !state.isInteractionReady }
      })
    },

    activateResume: (activeSection) => {
      get().toggleInteraction()

      set(() => {
        return { activeResumeSection: activeSection }
      })
    },

    resetResume: () => {
      get().toggleInteraction()

      set(() => ({ activeResumeSections: null }))
    }
  }))
)

export { useGameStore }