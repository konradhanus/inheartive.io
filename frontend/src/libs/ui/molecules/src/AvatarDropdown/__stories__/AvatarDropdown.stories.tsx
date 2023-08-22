/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { storiesOf } from '@storybook/react-native';
import { NativeBaseProvider } from 'native-base';
import { AvatarDropdown } from '../AvatarDropdown';
import { NativeRouter } from 'react-router-native';
import { dropdownItemsMock } from '../../../../../data';

storiesOf('Dropdown', module)
  .addDecorator((story) => (
    <NativeBaseProvider>
      <NativeRouter>{story()}</NativeRouter>
    </NativeBaseProvider>
  ))
  .add('Basic', () => <AvatarDropdown dropdownList={dropdownItemsMock} />);
