import React from 'react';
import { Column, NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { AuctionAuthor } from '../AuctionAuthor';

storiesOf('AuctionAuthor', module).add('Basic', () => (
  <NativeBaseProvider>
    <Column space={4} mt={4} mx='auto'>
      <AuctionAuthor
        authorName='John Doe'
        authorInitials='JD'
        avatarSrc={
          'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        }
      />
      <AuctionAuthor authorName='John Doe' authorInitials='JD' />
    </Column>
  </NativeBaseProvider>
));
