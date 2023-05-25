import { auctionsMock } from '@inheartive-data';
import { render } from '@inheartive-testing';

import { AuctionCard } from '../AuctionCard';

describe('AuctionCard', () => {
    it('should render successfully', () => {
        const { container } = render(<AuctionCard auction={auctionsMock[0]} />);

        expect(container).toBeTruthy();
    });
});
