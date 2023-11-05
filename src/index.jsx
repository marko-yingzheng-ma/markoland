import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App.jsx'
import './index.css'
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Canvas
        flat
        camera={{
          fov: 50,
          near: 0.1,
          far: 500,
          zoom: 1
        }}>
        <color args={['#030202']} attach="background" />
        <OrbitControls makeDefault />
        <axesHelper args={[100]} />
        <App />
      </Canvas>
    </Suspense>
  </React.StrictMode >,
)
