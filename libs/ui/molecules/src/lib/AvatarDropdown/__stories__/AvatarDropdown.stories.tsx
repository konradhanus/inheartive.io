/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { storiesOf } from '@storybook/react-native';
import { NativeBaseProvider } from 'native-base';
import { AvatarDropdown } from '../AvatarDropdown';
import { NativeRouter } from 'react-router-native';

const dropdownList = [
  {
    name: 'Basic',
    route: '/signin',
  },
  {
    name: 'Basic 1',
    route: '/signin',
  },
  {
    name: 'Basic 2',
    route: '/signin',
  },
  {
    name: 'Basic 3',
    route: '/signin',
  },
];

storiesOf('Dropdown', module)
  .addDecorator((story) => (
    <NativeBaseProvider>
      <NativeRouter>{story()}</NativeRouter>
    </NativeBaseProvider>
  ))
  .add('Basic', () => <AvatarDropdown dropdownList={dropdownList} />);
