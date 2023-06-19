import Image from 'next/image'
import ItemsContainer from './components/ItemsContainer'

export default function Home() {
  return (
    <ItemsContainer title="What we do:">
      <div>Websites</div>
      <div>Web Apps</div>
      <div>EVMs scripts</div>
      <div>Video Games</div>
    </ItemsContainer>
  )
}
