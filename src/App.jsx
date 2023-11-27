
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
import Bounds from "./components/Bounds";
import { images } from '@/assets'
import { ResumeSections, ResumeSectionNames } from './utils/constants';
import { useEffect } from "react";

function App() {
  const [_, getKeys] = useKeyboardControls()
  const isActive = useGameStore((state) => state.isActive)
  const activate = useGameStore((state) => state.activate)

  const activeResumeSection = useGameStore((state) => state.activeResumeSection)
  const activateResume = useGameStore((state) => state.activateResume)
  const resetResume = useGameStore((state) => state.resetResume)

  const environmentMapTexture = useTexture(images.environment)
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

  const onDigletteClicked = (sectionName) => {
    activateResume(sectionName)
  }

  return (
    <Physics colliders={false}>
      <Environment
        background
        map={environmentMapTexture}
      />

      <Bounds />

      <TextPage
        isActive={activeResumeSection === ResumeSectionNames.ABOUT}
        sections={ResumeSections[ResumeSectionNames.ABOUT]}
        defaultPosition={[-114, -4, 8]}
        position={[-114, -4, 8]}
        size={[150, 50, 50]}
      />
      <TextPage
        isActive={activeResumeSection === ResumeSectionNames.WORK}
        sections={ResumeSections[ResumeSectionNames.WORK]}
        defaultPosition={[-114, -4, 8]}
        position={[-114, -4, 8]}
        size={[150, 50, 50]}
      />
      <TextPage
        isActive={activeResumeSection === ResumeSectionNames.SKILLS}
        sections={ResumeSections[ResumeSectionNames.SKILLS]}
        defaultPosition={[-114, -4, 8]}
        position={[-114, -4, 8]}
        size={[150, 50, 50]}
      />
      <TextPage
        isActive={activeResumeSection === ResumeSectionNames.EDUCATION}
        sections={ResumeSections[ResumeSectionNames.EDUCATION]}
        defaultPosition={[-114, -4, 8]}
        position={[-114, -4, 8]}
        size={[150, 50, 50]}
      />

      <MainScene onDigletteClicked={onDigletteClicked} />
      <Avatar getKeysPressed={getKeys} />

    </Physics>
  )
}

export default App
