import { CuboidCollider } from "@react-three/rapier";

function Bounds() {
  return <>
    <CuboidCollider
      name="rightBound"
      type="fixed"
      args={[32, 6, 1]}
      position={[2, 10, 20]}
      rotation={[0, -0.01, 0]}
    />
    <CuboidCollider
      name="frontBound"
      type="fixed"
      args={[27, 10, 1]}
      position={[35, 7, -2]}
      rotation={[0, -Math.PI / 2.0 + 0.05, 0]}
    />

    <CuboidCollider
      name="leftBound"
      type="fixed"
      args={[32, 6, 1]}
      position={[2, 10, -25]}
      rotation={[0, 0.02, 0]}
    />

    <CuboidCollider
      name="backBound"
      type="fixed"
      args={[27, 8, 1]}
      position={[-28, 10, -2]}
      rotation={[0, -Math.PI / 2.0, 0]}
    />
  </>
}

export { Bounds }