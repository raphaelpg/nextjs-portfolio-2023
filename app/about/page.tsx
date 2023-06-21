import ItemImage from "../components/ItemImage"
import ItemsContainer from "../components/ItemsContainer"
const images = require.context('../../public', true);

export default function About() {
  const personalImage = images(`./${"pro_2023.webp"}`).default;

  const description = [
    "I'm a graduate in Industrial Engineering with a diverse professional background. I began my career in the logistics department of renowned car manufacturers, where my meticulous attention to details and calculations proved invaluable. Recognizing my aptitude for precise analysis, I transitioned into the role of a cost controller and further into accounting, where I developed a comprehensive understanding of financial management and reporting.",
    "Driven by a passion for technology, I embarked on a journey to learn web development, initially creating websites for friends as a freelancer. As my skills evolved, I seized the opportunity to explore the exciting world of blockchain technology by attending a specialized course. Eager to apply my newfound knowledge, I started participating in web3 hackathons, collaborating with talented individuals from diverse backgrounds.",
    "During one such hackathon, I formed a team with random participants, and our synergy was undeniable and they offered me a position to work on their crypto trading web app. This experience further fueled my enthusiasm for coding and opened doors to exciting opportunities in the blockchain space.",
    "Today, I continue to pursue my passion for web development and I believe in delivering high-quality solutions that go beyond mere functionality, prioritizing the user experience above all.", 
    "As a team player, I thrive in collaborative environments and prioritize building trust among my peers.",
    "When I'm not immersed in coding, you can find me riding my motorbike, exploring new video games, indulging in movies, or escaping into the realms of science fiction literature.",
  ];
  return (
    <ItemsContainer title="">
      <span className="w-full flex flex-col gap-5 md:flex-row lg:flex-row">
        <ItemImage imageSrc={personalImage} title="Raphael Pinto" projectHref="https://www.linkedin.com/in/raphael-pinto-gregorio-660b2579/" />
        <span>
          <h3 className="text-2xl font-bold tracking-wider">Raphael Pinto, Full Stack Developer</h3>
          {description && description.map((item) => (
            <p className="text-lg text-justify pt-5" key={item}>{item}</p>
          ))}
        </span>
      </span>
    </ItemsContainer>
  )
}
