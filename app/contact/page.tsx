import Link from 'next/link'
import Image from 'next/image'
import GithubLogo from '../images/github.webp'
import LinkedInLogo from '../images/linkedin.webp'

export default function Contact() {
  return (
    <div className="w-full flex items-center justify-center gap-10">
      <Link 
        target='_blank'
        href={"https://github.com/raphaelpg/"}
      >
        <Image 
          className='bg-gray-100 rounded-lg w-auto h-12'
          src={GithubLogo} 
          alt="Github logo" 
        />
      </Link>
      <Link 
        target='_blank'
        href={"https://www.linkedin.com/in/raphael-pinto-gregorio-660b2579/"}
      >
        <Image 
          className='bg-gray-100 rounded-lg w-auto h-12'
          src={LinkedInLogo} 
          alt="LinkedIn logo" 
        />
      </Link>
    </div>
  )
}