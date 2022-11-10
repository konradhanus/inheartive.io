import { render } from '@testing-library/react-native';

import { Row } from '../Row';
import { NativeBaseProvider } from 'native-base';

describe('Row', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <Row />
      </NativeBaseProvider>
    );
    expect(container).toBeTruthy();
  });
});
