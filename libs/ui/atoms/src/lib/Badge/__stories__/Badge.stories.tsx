import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Badge } from '../Badge';
import { NativeBaseProvider, VStack } from 'native-base';
import { theme } from '@inheartive/ui/theme';

storiesOf('Badge', module)
  .addDecorator((story) => (
    <NativeBaseProvider theme={theme}>
      {
        <VStack
          mt={4}
          space={{
            base: 4,
            sm: 4,
          }}
          mx={{
            base: 'auto',
            md: 0,
          }}
        >
          {story()}
        </VStack>
      }
    </NativeBaseProvider>
  ))
  .add('Base', () => <Badge>Basic</Badge>)
  .add('Color Scheme', () => (
    <>
      <Badge colorScheme='primary'>PRIMARY</Badge>
      <Badge colorScheme='secondary'>SECONDARY</Badge>

      <Badge colorScheme='success'>SUCCESS</Badge>
      <Badge colorScheme='info'>INFO</Badge>
      <Badge colorScheme='warning'>WARNING</Badge>
      <Badge colorScheme='danger'>DANGER</Badge>

      <Badge colorScheme='fuchsia'>FUCHSIA</Badge>
    </>
  ))
  .add('Variant', () => (
    <>
      <Badge variant='solid'>SOLID</Badge>
      <Badge variant='outline'>OUTLINE</Badge>
      <Badge variant='subtle'>SUBTLE</Badge>
    </>
  ));
