import { render } from '@testing-library/react-native';

import SignInTemplate from './SignInTemplate';

describe('SignInTemplate', () => {
  it('should render successfully', () => {
    const { container } = render(<SignInTemplate />);
    expect(container).toBeTruthy();
  });
});
