//TODO - this stories is not visible in StoryBook
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Icons } from '../Icons';
import { NativeBaseProvider } from 'native-base';

const iconsArray = [
  'add',
  'arrow-back',
  'arrow-forward',
  'arrow-up',
  'arrow-down',
  'check',
  'check-circle',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'circle',
  'close',
  'small-close',
  'menu',
  'info',
  'info-outline',
  'minus',
  'moon',
  'question',
  'question-outline',
  'search',
  'sun',
  'warning-1',
  'warning-2',
  'warning-outline',
  'three-dots',
  'share',
  'play',
  'favourite',
  'delete',
  'star',
  'star-outline',
  'home',
  'home-outline',
  'favorite',
  'favorite-outline',
];

storiesOf('Icons', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Default icon', () => <Icons iconName='add' />)
  .add('All icons', () => (
    <>
      {iconsArray.map((iconName) => (
        <Icons iconName={iconName} />
      ))}
    </>
  ));
