/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { render } from '../../../../testing';
import { ImageBackground } from '../ImageBackground';
import { placeholder } from '../../../../../../assets';

describe('ImageBackground', () => {
    it('Should render successfully', () => {
        const { container } = render(<ImageBackground source={placeholder} />);

        expect(container).toBeTruthy();
    });
});
