import { chakra } from '@chakra-ui/react'
import { HeaderContainer } from './components/header/HeaderContainer'
import { StatsContainer } from './components/stats/StatsContainer'
import { OverviewContainer } from './components/overview/OverviewContainer'

function App () {
  return (
    <chakra.main maxW='full' minH='100vh'>
      <chakra.section maxW='85%' mx='auto' py='2rem'>
        <HeaderContainer />
        <StatsContainer />
        <OverviewContainer />
      </chakra.section>
    </chakra.main>
  )
}

export default App
