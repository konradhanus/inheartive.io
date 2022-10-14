import React from 'react';
import { render } from '@testing-library/react-native';

import { Button } from './Button';
import { NativeBaseProvider } from 'native-base';

describe('Button', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <Button />
      </NativeBaseProvider>
    );
    expect(container).toBeTruthy();
  });
});
