import { render } from '@testing-library/react-native';
import { AuctionHearts } from '../AuctionHearts';
import { NativeBaseProvider } from 'native-base';

describe('AuctionHearts', () => {
  it('should render successfully auction hearts', () => {
    const { container } = render(
      <NativeBaseProvider>
        <AuctionHearts price='1000' />
      </NativeBaseProvider>
    );
    expect(container).toBeTruthy();
  });
});
