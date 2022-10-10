import { render } from '@testing-library/react-native';

import SignIn from './sign-in';

describe('SignIn', () => {
  it('should render successfully', () => {
    const { container } = render(<SignIn />);
    expect(container).toBeTruthy();
  });
});

