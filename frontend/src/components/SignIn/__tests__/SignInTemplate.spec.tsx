import { render } from '@testing-library/react-native';

import SignInTemplate from './SignInTemplate';
import { NativeRouter } from 'react-router-native';

describe('SignInTemplate', () => {
  it('should render successfully', () => {
    const container = render(
      <NativeRouter>
        <SignInTemplate />
      </NativeRouter>,
    );

    expect(container).toBeTruthy();
  });
});
