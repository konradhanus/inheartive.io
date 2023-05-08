/* eslint-disable @nx/enforce-module-boundaries */
import { render } from '@inheartive/ui/testing';
import { ImageBackground } from '../ImageBackground';
import { placeholder } from '@inheartive/assets';

describe('ImageBackground', () => {
  it('Should render successfully', () => {
    const { container } = render(<ImageBackground source={placeholder} />);

    expect(container).toBeTruthy();
  });
});
