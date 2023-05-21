import { Box, Flex, Heading, Text, useColorModeValue, Stat, StatArrow, StatHelpText, Icon } from '@chakra-ui/react'
import { socialIcons, colors } from '../../utils/dictionaries'

export const StatsCard = (follow) => {
  const bgCard = useColorModeValue('light.light-grayish-blue', 'dark.dark-desaturated-blue')
  const textColor = useColorModeValue('light.dark-grayish-blue', 'dark.desaturated-blue')
  const hoverColor = useColorModeValue('gray.200', 'blue.700')

  return (
    <Box
      p='2rem'
      h='fit-content'
      textAlign='center'
      bgColor={bgCard}
      w={{ md: '320px' }}
      mx={{ base: '0px', md: '1rem' }}
      my={{ base: '1rem', md: '0' }}
      borderTop='3px solid'
      borderTopColor={`primary.${follow.social_media}`}
      borderRadius='8px'
      transition='.2s ease-in'
      cursor='pointer'
      _hover={{ bgColor: hoverColor }}
    >

      <Flex w='fit-content' alignItems='center' mx='auto'>
        <Icon as={socialIcons[follow.social_media]} boxSize={5} fill={colors[follow.social_media]} />
        <Text ml='.7rem' w='fit-content' fontSize='15px' fontWeight='600' color={textColor}>
          {follow.username}
        </Text>
      </Flex>

      <Box my='.5rem'>
        <Heading fontSize='50px'>{follow.followers}</Heading>
        <Text textTransform='uppercase' fontWeight='400' color={textColor} letterSpacing='4px'>
          Followers
        </Text>
      </Box>

      <Stat mt='1rem'>
        <StatHelpText
          fontWeight='600'
          color={!follow.up ? 'primary.bright-red' : 'primary.lima-green'}
        >
          <StatArrow type={!follow.up ? 'decrease' : 'increase'} />
          {follow.today} Today
        </StatHelpText>
      </Stat>

    </Box>
  )
}
