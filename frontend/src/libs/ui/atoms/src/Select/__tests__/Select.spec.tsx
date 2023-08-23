import { render } from '../../../../testing';

import { Select } from '../Select.android';

describe('Select', () => {
  it('should render successfully', () => {
    const { container } = render(<Select />);
    expect(container).toBeTruthy();
  });
});
