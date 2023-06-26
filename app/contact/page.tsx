import ItemsContainer from '../components/ItemsContainer'
import StackImage from '../components/StackImage';
const images = require.context('../../public', true);

export default function Contact() {

  const githubLogo = images(`./github.webp`).default;
  const linkedInLogo = images(`./linkedin.webp`).default;

  return (
    <ItemsContainer title="">
      <div>Phone: +33 675 582 722</div>
      <StackImage title="Github Profile" url="https://github.com/raphaelpg/" logo={githubLogo} />
      <StackImage title="LinkedIn Profile" url="https://www.linkedin.com/in/raphael-pinto-gregorio-660b2579/" logo={linkedInLogo} />
    </ItemsContainer>
  )
}