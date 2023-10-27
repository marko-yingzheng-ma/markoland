import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
      flat
      camera={{
        fov: 45,
        near: 0.1,
        far: 50,
        position: [1, 2, 6]
      }}>
      <color args={['#030202']} attach="background" />
      <App />
    </Canvas>
  </React.StrictMode >,
)
