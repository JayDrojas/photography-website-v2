import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
    500: '#f5f5e8'
  }
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`
  }
});

export default theme;
