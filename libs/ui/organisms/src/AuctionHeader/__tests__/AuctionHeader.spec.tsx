import { render } from '@inheartive-testing';

import { AuctionHeader } from '../AuctionHeader';

describe('AuctionHeader', () => {
    it('should render successfully', () => {
        const { container } = render(<AuctionHeader />);

        expect(container).toBeTruthy();
    });
});
