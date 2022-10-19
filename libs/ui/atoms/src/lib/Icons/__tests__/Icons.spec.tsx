import React from 'react';
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import each from 'jest-each';
import { Icons, IconsList } from '../Icons';

describe('Icons', () => {
  each(Object.values(IconsList)).test('should render successfully all icons', (iconName) => {
    const { container } = render(
      <NativeBaseProvider>
        <Icons iconName={iconName} />
      </NativeBaseProvider>
    );
    expect(container).toBeTruthy();
  });
});
