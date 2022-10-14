import React from 'react';
import { render } from '@testing-library/react-native';

import { LoginFormControl } from './LoginFormControl';

describe('LoginFormControl', () => {
  it('should render successfully', () => {
    const { container } = render(<LoginFormControl />);
    expect(container).toBeTruthy();
  });
});
