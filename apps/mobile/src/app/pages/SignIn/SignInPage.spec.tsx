import { render } from '@testing-library/react-native';

import { SignInPage } from './SignInPage';

describe('SignIn', () => {
  it('should render successfully', () => {
    const { container } = render(<SignInPage />);
    expect(container).toBeTruthy();
  });
});
