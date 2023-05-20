import { chakra, Heading, Grid } from '@chakra-ui/react'
import { OverviewCard } from './OverViewCard'
import { data } from '../../data'

export const OverviewContainer = () => {
  const { overview } = data

  return (
    <chakra.section
      maxW='100%'
      mt='2rem'
      px={{ md: '1.5rem' }}
    >
      <Heading
        as='h3'
        mb='1rem'
        fontSize='28px'
      >
        Overview - Today
      </Heading>

      <Grid
        maxW='full'
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
        templateRows={{ md: 'repeat(2, 1fr)' }}
        justifyContent='center'
        gap='20px'
      >
        {overview.map(item => (
          <OverviewCard key={item.id} {...item} />
        ))}
      </Grid>
    </chakra.section>
  )
}
