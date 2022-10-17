import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { LoginFormControl } from '../LoginFormControl';
import { NativeBaseProvider } from 'native-base';

export const LoginFormControlStory = () =>
  storiesOf('LoginFormControl', module).add('Primary', () => (
    <NativeBaseProvider>
      <LoginFormControl />
    </NativeBaseProvider>
  ));
