'use client';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#344e41',
    },
    secondary: {
      main: '#588157',
    },
    info: {
      main: '#111d4a',
    },
    error: {
      main: '#92140C',
    },
    background: {
      default: '#DAD7CD',
      paper: '#f6f6f3',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};

export const theme = createTheme(themeOptions);