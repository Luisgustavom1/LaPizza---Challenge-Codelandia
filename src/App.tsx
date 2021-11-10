import Cards from './components/Cards'
import Header from './components/Header'

import laCuma from './assets/svg/image 16.png';
import ContainerCards from './components/ContainerCards';
import SectionRestaurant from './components/SectionRestaurant';

function App() {
  return (
    <>
      <Header />
      <ContainerCards>
        <Cards 
          image={laCuma}
          title='La Cuma'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          price={'20'}
        />
        <Cards 
          image={laCuma}
          title='La Cuma'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          price={'20'}
        />
        <Cards 
          image={laCuma}
          title='La Cuma'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          price={'20'}
        />
        <Cards 
          image={laCuma}
          title='La Cuma'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          price={'20'}
        />
      </ContainerCards>
      <SectionRestaurant />
    </>
  )
}

export default App
