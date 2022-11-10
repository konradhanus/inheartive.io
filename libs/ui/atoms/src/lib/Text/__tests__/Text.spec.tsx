import { render } from '@testing-library/react-native';

import { Text } from '../Text';
import { NativeBaseProvider } from 'native-base';

describe('Text', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <Text />
      </NativeBaseProvider>
    );
    expect(container).toBeTruthy();
  });
});
