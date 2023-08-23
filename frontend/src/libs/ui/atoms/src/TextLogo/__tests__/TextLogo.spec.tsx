import React from 'react';
import { render } from '@testing-library/react-native';

import { TextLogo } from '../TextLogo';
import { NativeBaseProvider } from 'native-base';

describe('TextLogo', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <TextLogo />
      </NativeBaseProvider>,
    );
    expect(container).toBeTruthy();
  });
});
