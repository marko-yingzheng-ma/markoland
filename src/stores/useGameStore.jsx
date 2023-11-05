import { Vector3 } from 'three'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

const useGameStore = create(
  subscribeWithSelector((set) => ({
    homebase: new Vector3(0, 0, 0),

    updateHomeBase: (position) => {
      console.log(position);
      set(() => {
        return { homebase: position }
      })
    }
  }))
)

export { useGameStore }