import Link from 'next/link'
import Image from 'next/image'
import ItemsContainer from '../components/ItemsContainer'
const images = require.context('../../public', true);
// import GithubLogo from '../images/github.webp'
// import LinkedInLogo from '../images/linkedin.webp'

export default function Contact() {

  const githubLogo = images(`./github.webp`).default;
  const linkedInLogo = images(`./linkedin.webp`).default;

  return (
    <ItemsContainer title="">
      <div>Phone: +33 675 582 722</div>
      <Link 
        target='_blank'
        href={"https://github.com/raphaelpg/"}
      >
        <Image 
          className='bg-gray-100 rounded-lg w-auto h-12'
          src={githubLogo} 
          alt="Github logo" 
        />
      </Link>
      <Link 
        target='_blank'
        href={"https://www.linkedin.com/in/raphael-pinto-gregorio-660b2579/"}
      >
        <Image 
          className='bg-gray-100 rounded-lg w-auto h-12'
          src={linkedInLogo} 
          alt="LinkedIn logo" 
        />
      </Link>
    </ItemsContainer>
  )
}