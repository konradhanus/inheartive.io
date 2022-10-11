import React from 'react';
import { render } from '@testing-library/react-native';

import Homepage from './Homepage2';

describe('Homepage', () => {
  it('should render successfully', () => {
    const { container } = render(<Homepage />);
    expect(container).toBeTruthy();
  });
});
