import React from 'react';
import { render } from '@testing-library/react-native';

import { FormControl } from './FormControl';

describe('FormControl', () => {
  it('should render successfully', () => {
    const { container } = render(<FormControl />);
    expect(container).toBeTruthy();
  });
});
