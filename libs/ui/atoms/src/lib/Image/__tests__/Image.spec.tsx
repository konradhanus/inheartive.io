import React from 'react';
import { render } from '@testing-library/react-native';

import { Image } from '../Image';
import { NativeBaseProvider } from 'native-base';

describe('Image', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <Image />
      </NativeBaseProvider>
    );
    expect(container).toBeTruthy();
  });
});
