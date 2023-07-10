import React from 'react';
import { Column, NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { AuctionAuthor } from '../AuctionAuthor';
import { usersMock } from '../../../../../data';

storiesOf('AuctionAuthor', module).add('Basic', () => (
    <NativeBaseProvider>
        <Column space={4} mt={4} mx='auto'>
            <AuctionAuthor author={usersMock[0]} />
            <AuctionAuthor author={usersMock[1]} />
        </Column>
    </NativeBaseProvider>
));
