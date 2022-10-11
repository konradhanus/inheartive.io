import { render } from '@testing-library/react-native';

import SignIn from './SignIn';

describe('SignIn', () => {
  it('should render successfully', () => {
    const { container } = render(<SignIn />);
    expect(container).toBeTruthy();
  });
});

