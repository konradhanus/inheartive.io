/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { render } from '@inheartive-testing';
import { ImageBackground } from '../AuctionImage';
import { placeholder } from '@inheartive-assets';

describe('ImageBackground', () => {
    it('Should render successfully', () => {
        const { container } = render(<ImageBackground source={placeholder} />);

        expect(container).toBeTruthy();
    });
});
