import { AuctionTime } from '../../..';
import { render } from '../../../../testing';

const expirationDate = 1000;

describe('AuctionTime', () => {
  it('should render with proper quantity', () => {
    const { getByText } = render(
      <AuctionTime expirationDate={expirationDate} />,
    );

    expect(getByText(`${expirationDate}`)).toBeTruthy();
  });
});
