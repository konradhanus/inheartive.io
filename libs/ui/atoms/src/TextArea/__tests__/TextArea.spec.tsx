import { render } from '@inheartive-testing';
import { TextArea } from '../TextArea';

describe('TextArea', () => {
    it('should render successfully', () => {
        const { container } = render(<TextArea autoCompleteType={false} />);
        expect(container).toBeTruthy();
    });
});
