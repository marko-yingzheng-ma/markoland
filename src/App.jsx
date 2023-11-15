
import { Physics } from "@react-three/rapier";
import { MainScene } from "./models/MainScene";
import { Avatar } from "./models/Avatar";
import { useControls } from "leva";
import { Environment, useKeyboardControls, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { useGameStore } from "./stores/useGameStore";
import { useFrame } from "@react-three/fiber";
import { Controls } from "./utils/constants";


function App() {
  const isActive = useGameStore((state) => state.isActive)
  const activate = useGameStore((state) => state.activate)
  const [subscribeKeys, getKeys] = useKeyboardControls()

  const environmentMapTexture = useTexture('/environmentMaps/space.jpg')
  environmentMapTexture.mapping = THREE.EquirectangularReflectionMapping
  environmentMapTexture.generateMipmaps = false;
  environmentMapTexture.minFilter = THREE.NearestFilter

  useFrame(() => {
    const keysPressed = getKeys()
    const areKeysPressed = Object.keys(Controls).some(key => keysPressed[key])

    if (!isActive && areKeysPressed) {
      activate()
    }
  })

  return (
    <Physics colliders={false} >
      <Environment
        background
        map={environmentMapTexture}
      />
      <MainScene
        isActive={isActive}
      />
      <Avatar
        isActive={isActive}
        getKeysPressed={getKeys}
      />
    </Physics>
  )
}

export default App
