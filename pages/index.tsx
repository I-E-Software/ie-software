import { Inter } from 'next/font/google'
import { Scene } from '@/components/scene'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div style={{ width: '100%', height: '100vh', backgroundColor: 'white' }}>
        <Scene />
      </div>
    </main>
  )
}
