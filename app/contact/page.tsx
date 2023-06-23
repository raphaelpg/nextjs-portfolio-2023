import ItemsContainer from '../components/ItemsContainer'
import StackImage from '../components/stackImage';
const images = require.context('../../public', true);

export default function Contact() {

  const githubLogo = images(`./github.webp`).default;
  const linkedInLogo = images(`./linkedin.webp`).default;

  return (
    <ItemsContainer title="">
      <div>Phone: +33 675 582 722</div>
      <StackImage title="Raphael Pinto Github" url="https://github.com/raphaelpg/" logo={githubLogo} />
      <StackImage title="Raphael Pinto LinkedIn Profile" url="https://www.linkedin.com/in/raphael-pinto-gregorio-660b2579/" logo={linkedInLogo} />
    </ItemsContainer>
  )
}