import React from 'react';
import { render } from '@testing-library/react-native';

import { Center } from './Center';

describe('Center', () => {
  it('should render successfully', () => {
    const { container } = render(<Center />);
    expect(container).toBeTruthy();
  });
});
