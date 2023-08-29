import React from 'react';
import { render } from '@testing-library/react-native';

import { Input } from '../Input';
import { NativeBaseProvider } from 'native-base';

describe('Input', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <Input />
      </NativeBaseProvider>,
    );
    expect(container).toBeTruthy();
  });
});
