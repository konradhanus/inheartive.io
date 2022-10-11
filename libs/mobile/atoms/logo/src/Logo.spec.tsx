import React from 'react';
import { render } from '@testing-library/react-native';

import Logo from './Logo';

describe('Logo', () => {
  it('should render successfully', () => {
    const { container } = render(<Logo />);
    expect(container).toBeTruthy();
  });
});
