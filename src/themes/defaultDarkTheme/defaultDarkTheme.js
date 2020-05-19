import { pathOr } from 'ramda';

import defaultLightTheme from '../defaultLightTheme';

const defaultDarkTheme = {
  ...defaultLightTheme,

  name: 'default-dark-theme',

  mode: 'dark',

  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#fff263',
      main: '#fbc02d',
      dark: '#c49000',
      contrastText: '#000',
    },
    secondary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#fff',
    },
    link: {
      default: '#ffff11',
      visited: '#aae574',
      active: '#00ffff',
      hover: '#00ffff'
    }
  },

  // Util functions
  get fns() {
    return {
      getColor: color => pathOr(color, ['palette', ...color.split('.')], this),
    };
  },
};

export default defaultDarkTheme;
