
import { Physics } from "@react-three/rapier";
import { MainScene } from "./components/MainScene";
import { Avatar } from "./components/Avatar";
import { useControls } from "leva";
import { Environment, useKeyboardControls, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { useGameStore } from "./stores/useGameStore";
import { useFrame } from "@react-three/fiber";
import { Controls } from "./utils/constants";
import TextPage from "./components/TextPage";
import { defaultResume } from './models';
import Bounds from "./components/bounds";

function App() {
  const isActive = useGameStore((state) => state.isActive)
  const activate = useGameStore((state) => state.activate)
  const [subscribeKeys, getKeys] = useKeyboardControls()

  const environmentMapTexture = useTexture('/environmentMaps/space.jpg')
  environmentMapTexture.mapping = THREE.EquirectangularReflectionMapping
  environmentMapTexture.generateMipmaps = false;
  environmentMapTexture.minFilter = THREE.NearestFilter

  const { isResumeActive } = useControls({ isResumeActive: false })

  useFrame(() => {
    const keysPressed = getKeys()
    const areKeysPressed = Object.keys(Controls).some(key => keysPressed[key])

    if (!isActive && areKeysPressed) {
      activate()
    }
  })

  return (
    <Physics colliders={false}>
      <Environment
        background
        map={environmentMapTexture}
      />

      <Bounds />

      <TextPage
        isActive={isResumeActive}
        sections={defaultResume.sections}
        position={[-114, -4, 8]}
        // position={[50, -30, 10]}
        size={[150, 50, 50]}
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
