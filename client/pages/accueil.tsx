import { Inter } from 'next/font/google'
import Header from '@/pages/composants/header/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    <body>
        <div>
            <h1 id="header_h1">body</h1>
        </div>
    </body>
    </>
  )
}
