import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

const initialWorld = {
  isActive: false,
  isInteractionReady: false,
  activeResumeSection: null
}

const initialInterfaceState = {
  closeButtonState: {
    isShowing: false,
    callback: null
  }
}

const useGameStore = create(
  subscribeWithSelector((set, get) => ({
    ...initialWorld,
    ...initialInterfaceState,

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

    showCloseButton: (onClose) => {
      set((state) => {
        return {
          closeButtonState: {
            ...state.closeButtonState,
            isShowing: true,
            callback: onClose
          }
        }
      })
    },

    hideCloseButton: () => {
      set((state) => {
        return {
          closeButtonState: {
            ...state.closeButtonState,
            isShowing: false,
            callback: null
          }
        }
      })
    },

    activateResume: (activeSection, onClose) => {
      get().toggleInteraction()
      get().showCloseButton(onClose)

      set(() => {
        return { activeResumeSection: activeSection }
      })
    },

    resetResume: () => {
      get().toggleInteraction()
      get().hideCloseButton()

      set(() => ({ activeResumeSection: null }))
    }
  }))
)

export { useGameStore }