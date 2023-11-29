import { useProgress } from "@react-three/drei"

function ProgressLoader() {
  const { progress, total, loaded } = useProgress()
  return <h1>{(loaded / 14) * 100} % loaded</h1>
}

export { ProgressLoader }