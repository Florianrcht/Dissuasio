import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  return (
    <>
      <head>  
        <title>Dissuasio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="header.css" rel="stylesheet" />
      </head>
      <header>
        <div>
            <h1 id="header_h1">Dissuasio</h1>
        </div>
      </header>
    </>
  )
}
