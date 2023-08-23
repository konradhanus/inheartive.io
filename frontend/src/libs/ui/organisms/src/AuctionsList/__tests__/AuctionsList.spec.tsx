import { render } from '../../../../testing';

import { AuctionsList } from '../AuctionsList';
import { auctionsMock } from '../../../../../data';

describe('AuctionsList', () => {
  it('should render successfully', () => {
    const { container } = render(<AuctionsList auctions={auctionsMock} />);

    expect(container).toBeTruthy();
  });
});
