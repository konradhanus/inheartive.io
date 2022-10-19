import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { TextLogo } from '../TextLogo';
import { NativeBaseProvider } from 'native-base';

storiesOf('TextLogo', module).add('Basic', () => (
  <NativeBaseProvider>
    <TextLogo />
  </NativeBaseProvider>
));
