import { render } from '@inheartive-testing';
import { AuctionHearts } from '../AuctionHearts';

const quantity = 1000;

describe('AuctionHearts', () => {
    it('should render with proper quantity', () => {
        const { getByText } = render(<AuctionHearts quantity={quantity} />);

        expect(getByText(`${quantity}`)).toBeTruthy();
    });
});
