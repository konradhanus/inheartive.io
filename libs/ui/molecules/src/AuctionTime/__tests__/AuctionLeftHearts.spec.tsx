import { AuctionTime } from '@inheartive-molecules';
import { render } from '@inheartive-testing';

const expirationDate = 1000;

describe('AuctionTime', () => {
    it('should render with proper quantity', () => {
        const { getByText } = render(
            <AuctionTime expirationDate={expirationDate} />
        );

        expect(getByText(`${expirationDate}`)).toBeTruthy();
    });
});
