import Link from 'next/link'
import Image from 'next/image'
import GithubLogo from '../images/github.webp'
import LinkedInLogo from '../images/linkedin.webp'
import ItemsContainer from '../components/ItemsContainer'

export default function Contact() {
  return (
    <ItemsContainer title="">
      <div>Phone: +33 675 582 722</div>
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
    </ItemsContainer>
  )
}