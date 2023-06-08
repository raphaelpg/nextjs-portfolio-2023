import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Header/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
