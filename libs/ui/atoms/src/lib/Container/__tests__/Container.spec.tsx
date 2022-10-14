import React from 'react';
import { render } from '@testing-library/react-native';

import { Container } from '../Container';
import { NativeBaseProvider } from 'native-base';

describe('Container', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <Container />
      </NativeBaseProvider>
    );
    expect(container).toBeTruthy();
  });
});
