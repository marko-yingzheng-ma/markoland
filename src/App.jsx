
import { Physics } from "@react-three/rapier";
import { Avatar, MainScene, Bounds, TextPage } from "./components";
import { Environment, useKeyboardControls, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { useGameStore } from "./stores/useGameStore";
import { useFrame, useThree } from "@react-three/fiber";
import { Controls } from "./utils/constants";
import { images } from '@/assets'
import { ResumeSections, ResumeSectionNames } from './utils/constants';
import gsap from "gsap";

function App() {
  const [_, getKeys] = useKeyboardControls()
  const isActive = useGameStore((state) => state.isActive)
  const activate = useGameStore((state) => state.activate)

  const activeResumeSection = useGameStore((state) => state.activeResumeSection)
  const activateResume = useGameStore((state) => state.activateResume)
  const resetResume = useGameStore((state) => state.resetResume)

  const { camera, controls } = useThree()

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

    const observationPosition = new THREE.Vector3(20, 13.7, -2.3)
    const observationLookAt = new THREE.Vector3(65, -1.1, -2.5)

    gsap.to(controls.target, {
      duration: 4.0,
      ease: 'expo.out',
      x: observationLookAt.x,
      y: observationLookAt.y,
      z: observationLookAt.z,
    })

    gsap.to(camera.position, {
      duration: 4.0,
      ease: 'expo.out',
      x: observationPosition.x,
      y: observationPosition.y,
      z: observationPosition.z
    })

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
        defaultPosition={[-115, -4, 10]}
        position={[-115, -4, 10]}
        size={[150, 50, 50]}
      />
      <TextPage
        isActive={activeResumeSection === ResumeSectionNames.WORK}
        sections={ResumeSections[ResumeSectionNames.WORK]}
        defaultPosition={[-115, -4, 10]}
        position={[-115, -4, 10]}
        size={[150, 50, 50]}
      />
      <TextPage
        isActive={activeResumeSection === ResumeSectionNames.SKILLS}
        sections={ResumeSections[ResumeSectionNames.SKILLS]}
        defaultPosition={[-115, -4, 10]}
        position={[-115, -4, 10]}
        size={[150, 50, 50]}
      />
      <TextPage
        isActive={activeResumeSection === ResumeSectionNames.EDUCATION}
        sections={ResumeSections[ResumeSectionNames.EDUCATION]}
        defaultPosition={[-115, -4, 10]}
        position={[-115, -4, 10]}
        size={[150, 50, 50]}
      />



      <MainScene onDigletteClicked={onDigletteClicked} />
      <Avatar getKeysPressed={getKeys} />

    </Physics>
  )
}

export default App
