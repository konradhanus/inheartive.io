import { auctionsMock } from '@inheartive/data';
import { render } from '@inheartive/ui/testing';

import { AuctionCard } from '../AuctionCard';

describe('AuctionCard', () => {
  it('should render successfully', () => {
    const { container } = render(<AuctionCard auction={auctionsMock[0]} linkPatternWithId={'/auctions/:id'} />);

    expect(container).toBeTruthy();
  });
});
