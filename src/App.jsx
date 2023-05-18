import { chakra } from '@chakra-ui/react'
import { HeaderContainer } from './components/header/HeaderContainer'

function App () {
  return (
    <chakra.main maxW='full' minH='100vh'>
      <chakra.section maxW='85%' mx='auto' py='2rem'>
        <HeaderContainer />
      </chakra.section>
    </chakra.main>
  )
}

export default App
