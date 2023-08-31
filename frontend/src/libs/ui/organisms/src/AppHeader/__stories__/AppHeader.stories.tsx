import React from 'react';

import { NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { AppHeader } from '../AppHeader';
import { theme } from '../../../../theme';

storiesOf('AppHeader', module)
  .addDecorator((story) => <NativeBaseProvider theme={theme}>{story()}</NativeBaseProvider>)
  .add('Basic', () => <AppHeader />);
