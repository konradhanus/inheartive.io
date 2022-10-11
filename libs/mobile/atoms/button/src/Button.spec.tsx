import React from 'react';
import { render } from '@testing-library/react-native';

import Button from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { container } = render(<Button />);
    expect(container).toBeTruthy();
  });
});
