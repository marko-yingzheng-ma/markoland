import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
      flat
      camera={{
        fov: 50,
        near: 0.1,
        far: 100,
        position: [35, 10, -10]

      }}>
      <color args={['#030202']} attach="background" />
      <axesHelper args={[100]} />
      <OrbitControls makeDefault />
      <App />
    </Canvas>
  </React.StrictMode >,
)
