import React from 'react';
import { Column, NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { AuctionHearts } from '../AuctionHearts';

storiesOf('AuctionHearts', module).add('Basic', () => (
  <NativeBaseProvider>
    <Column space={4} mt={4} mx='auto'>
      <AuctionHearts price='10 000' />
      <AuctionHearts price='5454' />
      <AuctionHearts price='1000' />
      <AuctionHearts price='0' />
    </Column>
  </NativeBaseProvider>
));
