import React from 'react';

import { Column, NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { CategoryFilter } from '../CategoryFilter';
import { categoriesMock } from '@inheartive/data';
import { mapCategoriesToSelect } from '../utils/mapCategoriesToSelect';

storiesOf('CategoryFilter', module).add('Basic', () => (
  <NativeBaseProvider>
    <Column mt={4} mx='auto'>
      <CategoryFilter items={mapCategoriesToSelect(categoriesMock)} />
    </Column>
  </NativeBaseProvider>
));
