import ItemImage from "../components/ItemImage"
import ItemsContainer from "../components/ItemsContainer"
const images = require.context('../../public', true);

export default function About() {
  const personalImage = images(`./${"pro_2023.webp"}`).default;

  const description = [
    'I develop websites and web applications advising clients on the appropriate technologies to choose that align with their cost requirements and quality goals.',
    'I developed my Web3 and DeFi skills through a blockchain course at Alyra school, as well as through participation in hackathons.',
    'With a creative mindset, I enjoy thinking outside the box to find innovative solutions.'
  ];
  return (
    <ItemsContainer title="The team:">
      <span className="w-full flex flex-col gap-5 md:flex-row lg:flex-row">
        <ItemImage imageSrc={personalImage} title="Raphael Pinto" projectHref="https://www.linkedin.com/in/raphael-pinto-gregorio-660b2579/" />
        <span>
          <h3 className="text-2xl font-bold tracking-wider">Raphael Pinto, Full Stack Developer</h3>
          {description && description.map((item) => (
            <p className="text-lg text-justify" key={item}>{item}</p>
          ))}
        </span>
      </span>
    </ItemsContainer>
  )
}
