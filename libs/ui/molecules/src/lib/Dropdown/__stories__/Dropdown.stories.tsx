import { storiesOf } from '@storybook/react-native';
import { NativeBaseProvider } from 'native-base';
import Dropdown, { IDropdownList } from '../Dropdown';

const dropdownList: IDropdownList = [
  {
    name: 'Basic',
    route: 'Example',
  },
  {
    name: 'Basic 1',
    route: 'Example',
  },
  {
    name: 'Basic 2',
    route: 'Example',
  },
  {
    name: 'Basic 3',
    route: 'Example',
  },
];
storiesOf('Dropdown', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => <Dropdown {...dropdownList} />);
