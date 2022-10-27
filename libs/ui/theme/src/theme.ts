import { extendTheme } from 'native-base';

export const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
      700: {
        normal: 'Roboto-Bold',
      },
      800: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
      900: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Roboto',
    mono: 'Roboto',
  },
  colors: {
    primary: {
      50: '#ffe5ff',
      100: '#fab8f4',
      200: '#f48aeb',
      300: '#ef5de2',
      400: '#e930d8',
      500: '#d018bf',
      600: '#a21095',
      700: '#750a6c',
      800: '#480341',
      900: '#1b0019',
    },
    secondary: {
      50: '#daffff',
      100: '#affff8',
      200: '#80fff3',
      300: '#52ffee',
      400: '#2ffeea',
      500: '#21e5d0',
      600: '#10b3a2',
      700: '#008074',
      800: '#004d45',
      900: '#001c17',
    },
  },
  components: {
    Select: {
      baseStyle: {
        customDropdownIconProps: {
          size: 3,
          color: 'black',
        },
      },
    },
  },
  config: {
    initialColorMode: 'light',
  },
});
