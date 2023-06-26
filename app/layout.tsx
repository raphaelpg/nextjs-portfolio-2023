import './globals.css'
// import { Inter, Exo, Press_Start_2P, Anton, VT323, Monoton, Orbitron } from 'next/font/google'
// import Link from 'next/link'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContainer from './components/MainContainer'

export const metadata = {
  title: 'Raphael Pinto Gregorio - Full Stack Developer',
  description: 'Portfolio of Raphael Pinto Gregorio, Full Stack Developer, Web 2, Web 3 and Video Games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='max-w-7xl m-auto px-2 md:px-12 lg:px-12' suppressHydrationWarning={true} >
        <Header/>
        <Navbar/>
        <MainContainer>
          {children}
        </MainContainer>
        <Footer/>
      </body>
    </html>
  )
}
