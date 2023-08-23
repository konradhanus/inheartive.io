import { render } from '../../../../testing';
import { Badge } from '../Badge';

const text = 'Some text';
const testID = 'badge';

describe('Badge', () => {
  it('should render successfully', () => {
    const { getByText, getByTestId } = render(
      <Badge testID={testID}>{text}</Badge>,
    );

    expect(getByTestId(testID)).toBeTruthy();
    expect(getByText(text)).toBeTruthy();
  });
});
