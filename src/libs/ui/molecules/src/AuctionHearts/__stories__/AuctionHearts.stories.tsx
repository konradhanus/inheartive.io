import React from 'react';
import { Column, NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { AuctionHearts } from '../AuctionHearts';

storiesOf('AuctionHearts', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => (
    <Column space={4} mt={4} mx='auto'>
      <AuctionHearts quantity={10000} />
      <AuctionHearts quantity={5454} />
      <AuctionHearts quantity={1000} />
      <AuctionHearts quantity={0} />
    </Column>
  ));
