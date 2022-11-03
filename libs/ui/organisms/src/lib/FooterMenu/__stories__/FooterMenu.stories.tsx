import React from 'react';
import { Column, NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { FooterMenu, IconNameType } from '../FooterMenu';

storiesOf('FooterMenu', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => {
    const iconName = 'homepage';

    const onChange = function (iconName: IconNameType): void {
      console.log('onChangeStoriesOfFooterMenu: ' + iconName);
    };

    return (
      <Column space={4} mt={4} mx='auto'>
        <FooterMenu testID='storiesOfFooterMenu' activeIcon={iconName} onChange={onChange} />
      </Column>
    );
  });
