import ItemsContainer from './components/ItemsContainer'
import Task from './components/Task'
const images = require.context('../public', true);

export default function Home() {

  const web2 = images(`./web2.webp`).default;
  const web3 = images(`./chain.webp`).default;
  const game = images(`./video_game.webp`).default;

  return (
    <ItemsContainer title="What I do:">
      <span className='w-full flex flex-col justify-center gap-20 md:flex-col md:pl-20 lg:flex-col lg:pl-20'>
        <Task imageSrc={web2} title="Web 2" text={[
          "Websites & Web Apps from scratch", 
          "From design to deployment. Single one page style to more complex applications",
          "Fullstack, Frontend, Backend, REST APIs, Database (Sql and NoSql)" 
          ]}
        />
        <Task imageSrc={web3} title="Web 3" text={[
          "Frontend and Backend web3 integration, wallet connection, smart contract calls, blockchain data reading and writing", 
          "Solidity smart contracts coding, testing and deployment", 
          "EVM blockchain scripts: address and event monitoring, contract reading and writing"
          ]}
        />
        <Task imageSrc={game} title="Video Games" text={[
          "Game design and gameplay programming on Unity"
          ]} 
        />
      </span>
    </ItemsContainer>
  )
}