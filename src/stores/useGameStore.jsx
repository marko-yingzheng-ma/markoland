import { Vector3 } from 'three'
import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

const useGameStore = create(
  subscribeWithSelector((set) => ({

  }))
)

export { useGameStore }