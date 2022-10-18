import React from 'react';
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import each from 'jest-each';
import { Icons } from '../Icons';

describe('Icons', () => {
  each([
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
  ]).test('should render successfully all icons', (iconName) => {
    const { container } = render(
      <NativeBaseProvider>
        <Icons iconName={iconName} />
      </NativeBaseProvider>
    );
    expect(container).toBeTruthy();
  });
});
