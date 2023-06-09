import './globals.css'
import { Inter, Exo, Press_Start_2P, Anton, VT323, Monoton, Orbitron } from 'next/font/google'
import Link from 'next/link'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// const inter = Exo({ subsets: ['latin'] })

export const metadata = {
  title: 'Future & Space',
  description: 'Websites, Web Apps, EVMs scripts, Video Games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <Header/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
