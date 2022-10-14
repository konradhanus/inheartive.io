import React from 'react';
import { render } from '@testing-library/react-native';

import Avatar from '../Avatar';
import { NativeBaseProvider } from 'native-base';

describe('Avatar', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <Avatar />
      </NativeBaseProvider>
    );
    expect(container).toBeTruthy();
  });
});
