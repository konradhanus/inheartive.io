import React from 'react';
import { render } from '@testing-library/react-native';

import { WarningOutlineIcon } from '../Icons';

describe('Icons', () => {
  it('should render successfully', () => {
    const { container } = render(<WarningOutlineIcon />);
    expect(container).toBeTruthy();
  });
});
