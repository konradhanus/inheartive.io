import React from 'react';
import { render } from '@testing-library/react-native';

import { Center } from './Center';
import { NativeBaseProvider } from 'native-base';

describe('Center', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <Center />
      </NativeBaseProvider>,
    );
    expect(container).toBeTruthy();
  });
});
