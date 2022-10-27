import { extendTheme } from 'native-base';
import { colors } from './colors';

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
  },
});
