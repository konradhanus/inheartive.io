import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Badge } from '../Badge';
import { NativeBaseProvider } from 'native-base';

export const BadgeStory = () =>
  storiesOf('Badge', module).add('Primary', () => (
    <NativeBaseProvider>
      <Badge>Badge</Badge>
    </NativeBaseProvider>
  ));
