import { render } from '@inheartive/ui/testing';

import { AuctionsList } from '../AuctionsList';
import { auctionsMock } from '@inheartive/data';

describe('AuctionsList', () => {
  it('should render successfully', () => {
    const { container } = render(<AuctionsList auctions={auctionsMock} />);

    expect(container).toBeTruthy();
  });
});
