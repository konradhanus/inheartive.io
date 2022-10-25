/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Image } from '@inheartive/ui/atoms';
import { textLogo } from '@inheartive/assets';

export const TextLogo = () => {
  return <Image source={textLogo} alt='Text logo' />;
};

export default TextLogo;
