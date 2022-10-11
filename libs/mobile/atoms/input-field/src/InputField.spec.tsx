import React from 'react';
import { render } from '@testing-library/react-native';

import InputField from './InputField';

describe('InputField', () => {
  it('should render successfully', () => {
    const { container } = render(<InputField />);
    expect(container).toBeTruthy();
  });
});
