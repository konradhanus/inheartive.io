import React from 'react';
import { render, screen, getQueriesForElement } from '@testing-library/react-native';

import { Icons } from '../Icons';
import { NativeBaseProvider } from 'native-base';

describe('Icons', () => {
  it('should render successfully menu icon', () => {
    const { container } = render(
      <NativeBaseProvider>
        <Icons iconName='menu' />
      </NativeBaseProvider>
    );
    expect(container).toBeTruthy();
  });
});
