import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '400': '#FFBA08',
    },
    gray: {
      '50': '#F5F8FA',
      '400': '#999999',
      '500': '#47585B',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
});

// font-family: 'Barlow', sans-serif;
// font-family: 'Poppins', sans-serif;
