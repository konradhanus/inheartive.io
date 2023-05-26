import { render } from '../../../../testing';

import { Select } from '../Select';

describe('Select', () => {
    it('should render successfully', () => {
        const { container } = render(<Select />);
        expect(container).toBeTruthy();
    });
});
