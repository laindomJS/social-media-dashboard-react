import { useColorMode, useColorModeValue, Box, Flex, Text } from '@chakra-ui/react'

export const ColorToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const circleColor = useColorModeValue('white', 'dark.very-dark-blue')
  const bgToggleColor = useColorModeValue('light.toggle-color', 'linear-gradient(90deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%)')

  return (
    <Flex w='fit-content' alignItems='center'>
      <Text mr='.8rem'>{colorMode === 'dark' ? 'Light ' : 'Dark '}Mode</Text>

      <Box
        as='button'
        display='inline-flex'
        alignItems='center'
        justifyContent='center'
        position='relative'
        width='60px'
        height='25px'
        borderRadius='full'
        bg={bgToggleColor}
        transition='background 0.2s'
        _hover={{ cursor: 'pointer' }}
        onClick={toggleColorMode}
      >
        <Box
          position='absolute'
          width='18px'
          height='18px'
          borderRadius='full'
          bg={circleColor}
          transition='transform .3s'
          transform={colorMode === 'dark' ? 'translateX(100%)' : 'translateX(-100%)'}
        />
      </Box>
    </Flex>
  )
}
