import React from 'react';

import { Column, NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { FilteringArea } from '../FilteringArea';
import { categoriesMock, SortDirection, SortKey } from '@inheartive/data';

storiesOf('FilteringArea', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => (
    <Column mt={4} mx='auto'>
      <FilteringArea
        sortBy={SortKey.Heartcoins}
        sortDir={SortDirection.ASC}
        categories={categoriesMock}
        selectedCategoryID={categoriesMock[0].id}
        onCategoryChange={() => 0}
        onSortByChange={() => 0}
        onSortDirChange={() => 0}
      />
    </Column>
  ));
