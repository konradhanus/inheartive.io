import { AuctionTime } from '@inheartive/ui/molecules';
import { render } from '@inheartive/ui/testing';

const expirationDate = 1000;

describe('AuctionTime', () => {
  it('should render with proper quantity', () => {
    const { getByText } = render(<AuctionTime expirationDate={expirationDate} />);

    expect(getByText(`${expirationDate}`)).toBeTruthy();
  });
});
