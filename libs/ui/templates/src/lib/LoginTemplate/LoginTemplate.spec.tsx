import React from 'react';
import { render } from '@testing-library/react-native';

import LoginTemplate from './LoginTemplate';

describe('LoginTemplate', () => {
  it('should render successfully', () => {
    const { container } = render(<LoginTemplate />);
    expect(container).toBeTruthy();
  });
});
