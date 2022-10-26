import { render } from '@inheartive/ui/testing';
import { AuctionHearts } from '../AuctionHearts';

const testID = 'auctionHeartsId';
const quantity = 1000;

describe('AuctionHearts', () => {
  it('should render successfully auction hearts', () => {
    const { getByText, getByTestId } = render(<AuctionHearts quantity={quantity} testID={testID} />);

    expect(getByTestId(testID)).toBeTruthy();
    expect(getByText(String(quantity))).toBeTruthy();
  });
});
