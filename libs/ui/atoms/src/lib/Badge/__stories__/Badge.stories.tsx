import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Badge } from '../Badge';
import { NativeBaseProvider } from 'native-base';

storiesOf('Badge', module).add('Primary', () => (
  <NativeBaseProvider>
    <Badge />
  </NativeBaseProvider>
));
