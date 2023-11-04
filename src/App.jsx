
import { Physics } from "@react-three/rapier";
import { MainScene } from "./models/MainScene";
import { Avatar } from "./models/Avatar";

function App() {
  return (
    <Physics colliders={false} debug>
      <MainScene />
      <Avatar />
    </Physics>
  )
}

export default App
