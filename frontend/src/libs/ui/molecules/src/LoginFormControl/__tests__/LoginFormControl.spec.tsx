import React from 'react';
import { render } from '@testing-library/react-native';

import { LoginFormControl } from '../LoginFormControl';
import { NativeBaseProvider } from 'native-base';

describe('LoginFormControl', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <LoginFormControl />
      </NativeBaseProvider>,
    );
    expect(container).toBeTruthy();
  });
});
