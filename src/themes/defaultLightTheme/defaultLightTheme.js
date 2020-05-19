import { pathOr } from 'ramda';

import breakpoints, { MOBILE_MEDIA_QUERY } from './breakpoints';

const defaultLightTheme = {
  name: 'default-light-theme',

  mode: 'light',

  breakpoints,

  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff263',
      main: '#fbc02d',
      dark: '#c49000',
      contrastText: '#000',
    },
  },

  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],

  // Typography.js configuration
  typography: {
    googleFonts: [
      {
        name: 'Roboto Condensed',
        styles: ['400', '700'],
      },
      {
        name: 'Roboto',
        styles: ['300', '400', '700'],
      },
    ],
    baseFontSize: '18px',
    headerFontFamily: ['Roboto Condensed', 'sans-serif'],
    bodyFontFamily: ['Roboto', 'sans-serif'],
    scaleRatio: 2.4,
    overrideStyles: () => ({
      'span.gatsby-resp-image-wrapper': {
        borderRadius: '4px',
        overflow: 'hidden',
      },
      'figcaption.gatsby-resp-image-figcaption': {
        fontSize: '80%',
        padding: '0.5rem 0.75rem 0',
      },
      'figcaption.gatsby-resp-image-figcaption::before': {
        content: '"\\1F4F7"',
        textRendering: 'auto',
        '-webkit-font-smoothing': 'antialiased',
        marginRight: '0.5rem',
        verticalAlign: 'text-bottom',
      },
      'figcaption.gatsby-resp-image-figcaption::after': {
        display: 'block',
        position: 'absolute',
        
      },
      'pre[class*="language-"]': {
        border: '1px solid black',
        borderRadius: '4px',
        margin: '0 0 1.45rem !important',
        overflow: 'auto !important',
      },
      'input, textarea, button, select, a': {
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
      },
      blockquote: {
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: '1.45rem',
        borderLeft: '10px solid var(--primary-main)',
        fontSize: '120%',
        fontStyle: 'italic',
      },
      [MOBILE_MEDIA_QUERY]: {
        html: {
          fontSize: '16px',
        },
        'figure.gatsby-resp-image-figure': {
          marginLeft: '-1.5rem',
          marginRight: '-1.5rem',
        },
        'span.gatsby-resp-image-wrapper': {
          borderRadius: '0',
          overflow: 'hidden',
        },
        'figcaption.gatsby-resp-image-figcaption': {
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
        },
        'pre[class*="language-"]': {
          borderRadius: '0',
          marginLeft: '-1.5rem !important',
          marginRight: '-1.5rem !important',
        },
        blockquote: {
          marginLeft: '-1.5rem',
          marginRight: '-1.5rem',
        },
      },
    }),
  },

  // Util functions
  get fns() {
    return {
      getColor: color => pathOr(color, ['palette', ...color.split('.')], this),
    };
  },
};

export default defaultLightTheme;
