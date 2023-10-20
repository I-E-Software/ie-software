import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Canvas } from 'react-three-fiber'
import {OrbitControls} from '@react-three/drei'
import { Keyboard } from '@/components/keyboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div style={{width: '100%', height: '100vh', backgroundColor: 'white' }}>
        <Canvas 
        camera={{ position: [1, 1, 1], zoom: 8 }}
        >
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
          <Keyboard /> 
        <OrbitControls />
        </Canvas>
      </div>
    </main>
  )
}
