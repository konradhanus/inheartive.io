import React from 'react';
import { Column, NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { FooterMenu } from '../FooterMenu';

storiesOf('FooterMenu', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => (
    <Column space={4} mt={4} mx='auto'>
      <FooterMenu activeIcon='homepage' onChange={() => console.log('FooterMenu - onChange')} />
    </Column>
  ));
