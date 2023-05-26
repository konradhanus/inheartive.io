import { render } from '../../../../testing';
import { ScrollView } from '../ScrollView';

describe('ScrollView', () => {
    it('should render successfully', () => {
        const { container } = render(<ScrollView />);
        expect(container).toBeTruthy();
    });
});
