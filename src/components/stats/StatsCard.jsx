import { Box, Heading, Text, useColorModeValue, Stat, StatArrow, StatHelpText } from '@chakra-ui/react'

export const StatsCard = (follow) => {
  const bgCard = useColorModeValue('light.light-grayish-blue', 'dark.dark-desaturated-blue')
  const textColor = useColorModeValue('light.dark-grayish-blue', 'dark.desaturated-blue')

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
    >
      <Text fontSize='14px' fontWeight='600' color={textColor}>
        {follow.username}
      </Text>
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
