import React from 'react';
import { render } from '@testing-library/react-native';

import { Box } from './Box';
import { NativeBaseProvider } from 'native-base';

describe('Box', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <Box />
      </NativeBaseProvider>
    );
    expect(container).toBeTruthy();
  });
});
