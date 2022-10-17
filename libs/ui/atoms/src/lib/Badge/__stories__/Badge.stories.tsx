import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Badge } from '../Badge';
import { NativeBaseProvider } from 'native-base';
import { theme } from '@inheartive/ui/theme';

storiesOf('Badge', module)
  .addDecorator((story) => <NativeBaseProvider theme={theme}>{story()}</NativeBaseProvider>)
  .add('Base', () => <Badge>NEW FEATURE</Badge>)
  .add('colorScheme', () => (
    <>
      <Badge colorScheme='success'>NEW FEATURE - SUCCESS</Badge>
      <Badge colorScheme='danger'>NEW FEATURE - DANGER</Badge>
      <Badge colorScheme='info'>INFO</Badge>
      <Badge colorScheme='warning'>WARNING</Badge>
      <Badge colorScheme='coolGray'>DARK</Badge>
      <Badge colorScheme='fuchsia'>FUCHSIA</Badge>
      <Badge colorScheme='primary'>PRIMARY</Badge>
      <Badge colorScheme='secondary'>SECONDARY</Badge>
    </>
  ));
