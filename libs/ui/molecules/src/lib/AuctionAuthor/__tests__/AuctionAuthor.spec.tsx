import { render } from '@testing-library/react-native';

import { AuctionAuthor } from '../AuctionAuthor';
import { NativeBaseProvider } from 'native-base';

describe('AuctionAuthor', () => {
  it('should render successfully', () => {
    const { container } = render(
      <NativeBaseProvider>
        <AuctionAuthor
          authorName='John Doe'
          authorInitials='JD'
          avatarSrc={{
            uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}
        />
      </NativeBaseProvider>
    );
    expect(container).toBeTruthy();
  });
});
