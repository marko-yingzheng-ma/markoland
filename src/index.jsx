import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App.jsx'
import './index.css'
import { Suspense } from 'react';
import { KeyboardControls, OrbitControls } from '@react-three/drei'
import { Controls } from './utils/constants';
import { Perf } from 'r3f-perf'
import { Loader } from './Loader.jsx'
import { Interface } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <KeyboardControls
        map={[
          { name: Controls.forward.name, keys: Controls.forward.keys },
          { name: Controls.back.name, keys: Controls.back.keys },
          { name: Controls.left.name, keys: Controls.left.keys },
          { name: Controls.right.name, keys: Controls.right.keys },
          { name: Controls.jump.name, keys: Controls.jump.keys },
        ]}
      >
        <Canvas
          flat
          camera={{
            fov: 50,
            near: 0.1,
            far: 500,
            zoom: 1
          }}
        >
          <color args={['#48AB6E']} attach="background" />
          <OrbitControls makeDefault />
          <Perf position="bottom-right" />
          <axesHelper args={[200]} />
          <App />
        </Canvas>
        <Interface />
      </KeyboardControls>
    </Suspense>
  </React.StrictMode >,
)
