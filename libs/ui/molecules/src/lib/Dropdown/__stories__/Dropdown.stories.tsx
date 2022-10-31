/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { storiesOf } from '@storybook/react-native';
import { NativeBaseProvider } from 'native-base';
import Dropdown from '../Dropdown';
import { Avatar, Row } from '@inheartive/ui/atoms';

const dropdownList = [
  {
    id: 1,
    name: 'Basic',
    route: 'Example',
  },
  {
    id: 2,
    name: 'Basic 1',
    route: 'Example',
  },
  {
    id: 3,
    name: 'Basic 2',
    route: 'Example',
  },
  {
    id: 4,
    name: 'Basic 3',
    route: 'Example',
  },
];

storiesOf('Dropdown', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => <Dropdown dropdownList={dropdownList} />);
