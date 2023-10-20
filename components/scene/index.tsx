import React from 'react'
import { Canvas } from 'react-three-fiber';
import { Keyboard } from '../keyboard';

export const Scene = () => {
  return (
    <Canvas 
    camera={{ position: [1, 1, 1], zoom: 8 }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <Keyboard /> 
    </Canvas>
  )
}
