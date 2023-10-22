import React from 'react'
import { Canvas } from 'react-three-fiber';
import { Keyboard } from '../keyboard';
import { ScrollControls } from '@react-three/drei';

export const Scene = () => {
  return (
    <Canvas
      camera={{ position: [1, 1, 1], zoom: 8, fov: 60 }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <ScrollControls pages={4} damping={0.25}>
        <Keyboard />
      </ScrollControls>
    </Canvas>
  )
}
