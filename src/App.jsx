
import { Physics } from "@react-three/rapier";
import { MainScene } from "./models/MainScene";
import { Avatar } from "./models/Avatar";
import { useControls } from "leva";
import { Environment, useTexture } from "@react-three/drei";
import * as THREE from 'three'

function App() {
  const { isAvatarActive } = useControls('isCharacterActive', {
    isAvatarActive: { value: false }
  })

  const environmentMapTexture = useTexture('/environmentMaps/space.jpg')
  environmentMapTexture.mapping = THREE.EquirectangularReflectionMapping
  environmentMapTexture.generateMipmaps = false;
  environmentMapTexture.minFilter = THREE.NearestFilter


  return (
    <Physics colliders={false}>
      <Environment
        background
        map={environmentMapTexture}
      />
      <MainScene isActive={isAvatarActive} />
      <Avatar />
    </Physics>
  )
}

export default App
