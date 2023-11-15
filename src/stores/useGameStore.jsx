import { Vector3 } from 'three'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

const useGameStore = create(
  subscribeWithSelector((set) => ({
    isActive: false,

    activate: () => {
      set((state) => {
        if (!state.isActive) {
          return { isActive: true }
        }

        return {}
      })
    }
  }))
)

export { useGameStore }