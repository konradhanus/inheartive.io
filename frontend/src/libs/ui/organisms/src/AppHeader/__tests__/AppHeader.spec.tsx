import { render } from '../../../../testing';

import { AppHeader } from '../AppHeader';

describe('AppHeader', () => {
    it('should render successfully', () => {
        const { container } = render(<AppHeader />);

        expect(container).toBeTruthy();
    });
});
