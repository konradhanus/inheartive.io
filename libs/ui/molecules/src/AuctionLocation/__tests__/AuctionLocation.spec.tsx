import { render } from '@inheartive-testing';
import { AuctionLocation } from '../AuctionLocation';

const location = 'Wroclaw, Poland, online';

describe('AuctionLocation', () => {
    it('should render with proper location', () => {
        const { getByText } = render(<AuctionLocation location={location} />);

        expect(getByText(`${location}`)).toBeTruthy();
    });
});
