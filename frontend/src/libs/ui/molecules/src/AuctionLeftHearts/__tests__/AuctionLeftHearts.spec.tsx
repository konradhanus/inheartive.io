import { render } from '../../../../testing';
import { AuctionLeftHearts } from '../AuctionLeftHearts';

const quantity = 1000;

describe('AuctionLeftHearts', () => {
    it('should render with proper quantity', () => {
        const { getByText } = render(<AuctionLeftHearts quantity={quantity} />);

        expect(getByText(`${quantity}`)).toBeTruthy();
    });
});
