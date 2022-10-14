import React from 'react';
import { render } from '@testing-library/react-native';

import { Badge } from './Badge';
import { NativeBaseProvider } from 'native-base';

describe('Badge', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <Badge />
      </NativeBaseProvider>
    );
    expect(container).toBeTruthy();
  });
});
