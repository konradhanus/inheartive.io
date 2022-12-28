import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { FooterMenu } from '../FooterMenu';
import { IconNameType } from '../FooterMenuTypes';

storiesOf('FooterMenu', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => {
    const activeIcon = IconNameType.homepage;

    return <FooterMenu activeIcon={activeIcon} />;
  });
