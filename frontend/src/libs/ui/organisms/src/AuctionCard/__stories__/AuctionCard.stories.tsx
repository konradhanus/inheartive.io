import React from 'react';

import { Column, NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { AuctionCard } from '../AuctionCard';
import { auctionsMock } from '../../../../../data';

storiesOf('AuctionCard', module)
    .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
    .add('Basic', () => (
        <Column mt={4} mx={8}>
            <AuctionCard auction={auctionsMock[0]} />
        </Column>
    ));
