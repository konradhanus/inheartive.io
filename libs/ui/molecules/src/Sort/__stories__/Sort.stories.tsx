import React from 'react';

import { Column, NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { Sort } from '../Sort';
import { SortDirection, SortKey } from '@inheartive-data';

storiesOf('Sort', module)
    .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
    .add('Basic', () => (
        <Column mt={4} mx='auto'>
            <Sort sortBy={SortKey.Heartcoins} sortDir={SortDirection.ASC} />
            <Sort sortBy={SortKey.CreatedDate} sortDir={SortDirection.DESC} />
        </Column>
    ));
