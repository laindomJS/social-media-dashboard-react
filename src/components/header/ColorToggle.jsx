import { useColorMode, Box, Button } from '@chakra-ui/react'

export const ColorToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box as='section'>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'}
        Mode
      </Button>
    </Box>
  )
}
