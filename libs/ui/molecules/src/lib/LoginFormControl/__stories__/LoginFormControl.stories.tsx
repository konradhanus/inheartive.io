//TODO - this stories is not visible in StoryBook
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { LoginFormControl } from '../LoginFormControl';
import { NativeBaseProvider } from 'native-base';

storiesOf('LoginFormControl', module).add('Primary', () => (
  <NativeBaseProvider>
    <LoginFormControl />
  </NativeBaseProvider>
));
