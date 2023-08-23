import { render } from '../../../../testing';
import { HeartsCredits } from '../HeartsCredits';

const testID = 'heartsCreditsId';
const credit = 545;

describe('HeartsCredits', () => {
  it('should render successfully hearts credits', () => {
    const { getByText, getByTestId } = render(
      <HeartsCredits credit={credit} testID={testID} />,
    );

    expect(getByTestId(testID)).toBeTruthy();
    expect(getByText(String(credit))).toBeTruthy();
  });
});
