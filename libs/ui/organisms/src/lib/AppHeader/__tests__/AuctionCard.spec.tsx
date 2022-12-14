import { auctionsMock } from '@inheartive/data';
import { render } from '@inheartive/ui/testing';

import { AppHeader } from '../AuctionCard';

describe('AuctionCard', () => {
  it('should render successfully', () => {
    const { container } = render(<AppHeader auction={auctionsMock[0]} />);

    expect(container).toBeTruthy();
  });
});
