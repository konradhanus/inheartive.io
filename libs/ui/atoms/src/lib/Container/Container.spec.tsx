import React from 'react';
import { render } from '@testing-library/react-native';

import { Container } from './Container';

describe('Container', () => {
  it('should render successfully', () => {
    const { container } = render(<Container />);
    expect(container).toBeTruthy();
  });
});
