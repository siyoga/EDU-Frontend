import { extendTheme } from '@chakra-ui/react';
import { ButtonStyle as Button } from './components/ButtonStyle';

const settings = {
  shadows: {
    'solid-left':
      '0px 2px 0px 0px, -1.5px 1.5px 0px 0px, 0px 0px 0px 0px, 0px 0px 0px 0px, -3px 3px 0px 0px',
    'solid-off': '0px 0px 0px 0px',
  },

  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },

  components: {
    Button,
  },
};

const theme = extendTheme(settings);

export default theme;
