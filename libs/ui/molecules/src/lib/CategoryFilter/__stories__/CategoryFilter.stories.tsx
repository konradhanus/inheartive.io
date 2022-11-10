import React from 'react';

import { Column, NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { CategoryFilter } from '../CategoryFilter';
import { categoriesMock } from '@inheartive/data';
import { mapCategoriesToSelect } from '../utils/mapCategoriesToSelect';

storiesOf('CategoryFilter', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => (
    <Column mt={4} mx='auto'>
      <CategoryFilter items={mapCategoriesToSelect(categoriesMock)} />
    </Column>
  ));
