import { Html, useProgress } from "@react-three/drei"

function Loader() {
  const { progress, total, loaded } = useProgress()
  return <h1>{(loaded / 14) * 100} % loaded</h1>
}

export { Loader }