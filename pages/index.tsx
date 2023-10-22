import { Inter } from 'next/font/google'
import { Scene } from '@/components/scene'
import Labels from '@/components/labels'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div style={{ width: '100%', height: '100vh', backgroundColor: 'black' }}>
        <Scene />
      </div>
      <Labels />
    </main>
  )
}
