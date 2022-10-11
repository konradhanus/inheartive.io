import React from 'react';
import { render } from '@testing-library/react-native';

import { Stack } from './Stack';

describe('Stack', () => {
  it('should render successfully', () => {
    const { container } = render(<Stack />);
    expect(container).toBeTruthy();
  });
});
