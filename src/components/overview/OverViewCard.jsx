import { GridItem, Flex, Heading, Stat, StatArrow, StatHelpText, Text, useColorModeValue, Icon } from '@chakra-ui/react'
import { socialIcons, colors } from '../../utils/dictionaries'

export const OverviewCard = (item) => {
  const cardBgColor = useColorModeValue('light.light-grayish-blue', 'dark.dark-desaturated-blue')
  const titleColor = useColorModeValue('light.dark-grayish-blue', 'dark.desaturated-blue')
  const hoverColor = useColorModeValue('gray.200', 'blue.700')

  return (
    <GridItem
      as='article'
      w={{ md: '250px' }}
      bgColor={cardBgColor}
      h='fit-content'
      p='1.5rem'
      borderRadius='5px'
      transition='.2s ease-in'
      cursor='pointer'
      _hover={{ bgColor: hoverColor }}
    >
      <Flex w='full' justifyContent='space-between'>
        <Heading as='h3' fontSize='16px' mb='1rem' color={titleColor}>{item.name}</Heading>
        <Icon as={socialIcons[item.social_media]} boxSize={5} fill={colors[item.social_media]} />
      </Flex>

      <Flex w='full' justifyContent='space-between' alignItems='flex-end'>

        <Text fontSize='30px' fontWeight='600'>
          {item.total}
        </Text>

        <Stat maxW='fit-content'>
          <StatHelpText color={!item.up ? 'primary.bright-red' : 'primary.lima-green'}>
            <StatArrow type={!item.up ? 'decrase' : 'increase'} />
            {item.percentage}%
          </StatHelpText>
        </Stat>

      </Flex>
    </GridItem>
  )
}
