import React from 'react';
import { render } from '@testing-library/react-native';

import { Box } from './Box';

describe('Box', () => {
  it('should render successfully', () => {
    const { container } = render(<Box />);
    expect(container).toBeTruthy();
  });
});
