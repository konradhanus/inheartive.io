import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Text from '../Text';
import { NativeBaseProvider } from 'native-base';

storiesOf('Text', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => <Text> Sample text </Text>)
  .add('Font Size', () => (
    <>
      <Text fontSize='xs'>xs</Text>
      <Text fontSize='sm'>sm</Text>
      <Text fontSize='md'>md</Text>
      <Text fontSize='lg'>lg</Text>
      <Text fontSize='xl'>xl</Text>
      <Text fontSize='2xl'>2xl</Text>
      <Text fontSize='3xl'>3xl</Text>
      <Text fontSize='4xl'>4xl</Text>
      <Text fontSize='5xl'>5xl</Text>
      <Text fontSize='6xl'>6xl</Text>
    </>
  ))
  .add('Truncated', () => (
    <Text isTruncated maxW='300' w='80%'>
      NativeBase gives you a contrasting color based on your theme. You can also customise it using the
      useAccessibleColors hook.
    </Text>
  ))
  .add('Nested', () => (
    <Text italic>
      <Text bold>Taj Mahal</Text> is in Agra.
    </Text>
  ))
  .add('Overridden', () => (
    <>
      <Text bold>Bold</Text>
      <Text italic>Italic</Text>
      <Text underline>Underline</Text>
      <Text>
        H<Text sub>2</Text>O
      </Text>
      <Text underline>Underline</Text>
      <Text strikeThrough>StrikeThrough</Text>
      <Text bold italic underline>
        Bold, Italic & Underline
      </Text>
    </>
  ));
