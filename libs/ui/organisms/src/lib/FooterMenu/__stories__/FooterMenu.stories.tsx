import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { FooterMenu, IconNameType } from '../FooterMenu';

storiesOf('FooterMenu', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => {
    const iconName = 'homepage';

    const onChange = function (iconName: IconNameType): void {
      console.log('onChangeStoriesOfFooterMenu: ' + iconName);
    };

    return <FooterMenu testID='storiesOfFooterMenu' activeIcon={iconName} onChange={onChange} />;
  });
