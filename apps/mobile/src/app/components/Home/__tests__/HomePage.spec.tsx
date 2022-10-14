import React from 'react';
import { render } from '@testing-library/react-native';

import HomePage from '../HomePage';

describe('Homepage', () => {
  it('should render successfully', () => {
    const { container } = render(<HomePage />);
    expect(container).toBeTruthy();
  });
});
