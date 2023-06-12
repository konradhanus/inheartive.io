import { extendTheme } from 'native-base';
import { colors } from './colors';
import { theme as nativeBaseTheme } from 'native-base';

export const theme = extendTheme({
  colors,
  components: {
    Select: {
      baseStyle: {
        customDropdownIconProps: {
          size: 3,
          color: 'black',
        },
      },
    },
    Button: {
      baseStyle: {
        rounded: 'md',
        size: 'lg',
        my: 2,
      },
      variants: {
        lighGray: {
          style: {
            backgroundColor: nativeBaseTheme.colors.trueGray['200'],
          },
          _text: {
            color: nativeBaseTheme.colors.trueGray[600],
          },
        },
      },
    },
  },
});
