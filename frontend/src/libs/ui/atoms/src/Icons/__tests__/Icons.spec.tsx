import React from 'react';
import { render } from '@testing-library/react-native';

import { WarningOutlineIcon } from '../Icons';
import { NativeBaseProvider } from 'native-base';

describe('Icons', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <WarningOutlineIcon />
      </NativeBaseProvider>,
    );
    expect(container).toBeTruthy();
  });
});
