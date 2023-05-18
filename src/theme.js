/* eslint-disable quotes */
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
  },
  colors: {
    primary: {
      'lima-green': 'hsl(163, 72%, 41%)',
      'bright-red': 'hsl(356, 69%, 56%)',
      facebook: 'hsl(208, 92%, 53%)',
      twitter: 'hsl(203, 89%, 53%)',
      youtube: 'hsl(348, 97%, 39%)',
      instagram: 'hsl(329, 70%, 58%)'
    },
    dark: {
      'very-dark-blue': 'hsl(230, 17%, 14%)',
      'very-dark-blue-top': 'hsl(232, 19%, 15%)',
      'dark-desaturated-blue': 'hsl(228, 28%, 20%)',
      'desaturated-blue': 'hsl(228, 34%, 66%)'
    },
    light: {
      'very-pale-blue': 'hsl(225, 100%, 98%)',
      'light-grayish-blue': 'hsl(227, 47%, 96%)',
      'dark-grayish-blue': 'hsl(228, 12%, 44%)',
      'very-dark-blue': 'hsl(230, 17%, 14%)'
    }
  }
})
