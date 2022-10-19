import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Icons, IconsList } from '../Icons';
import { NativeBaseProvider } from 'native-base';

storiesOf('Icons', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Default icon', () => <Icons iconName='add' />)
  .add('All icons', () => (
    <>
      {Object.values(IconsList).map((iconName, index) => (
        <Icons key={index} iconName={iconName} />
      ))}
    </>
  ));
