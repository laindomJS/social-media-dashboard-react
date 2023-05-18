import { chakra, Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { ColorToggle } from './ColorToggle'

export const HeaderContainer = () => {
  const colorTitle = useColorModeValue('black', 'white')
  const colorText = useColorModeValue('light.dark-grayish-blue', 'dark.desaturated-blue')

  return (
    <chakra.header
      display='flex'
      alignItems={{ base: 'flex-start', md: 'center' }}
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent='space-between'
    >

      <Box as='section'>
        <Heading fontSize={{ base: '20px', md: null }} color={colorTitle}>
          Social Media Dashboard
        </Heading>
        <Text color={colorText} fontWeight='600'>
          Total Followers: 23,004
        </Text>
      </Box>

      <Box as='section' mt={{ base: '1rem', md: '0px' }}>
        <ColorToggle />
      </Box>
    </chakra.header>
  )
}
