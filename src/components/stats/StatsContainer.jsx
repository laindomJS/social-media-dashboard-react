import { chakra } from '@chakra-ui/react'
import { StatsCard } from './StatsCard'
import { data } from '../../data'

export const StatsContainer = () => {
  const { followers } = data

  return (
    <chakra.section
      w='full'
      mt='2rem'
      display='flex'
      h='fit-content'
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'center', md: null }}
    >
      {followers.map(follow => (
        <StatsCard key={follow.id} {...follow} />
      ))}
    </chakra.section>
  )
}
