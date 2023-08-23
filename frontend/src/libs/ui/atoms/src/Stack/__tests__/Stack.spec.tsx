import React from 'react';
import { render } from '@testing-library/react-native';

import { Stack } from '../Stack';
import { NativeBaseProvider } from 'native-base';

describe('Stack', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <Stack />
      </NativeBaseProvider>,
    );
    expect(container).toBeTruthy();
  });
});
