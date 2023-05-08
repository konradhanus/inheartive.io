/* eslint-disable @nx/enforce-module-boundaries */
import { Image } from '@inheartive/ui/atoms';
import { textLogo } from '@inheartive/assets';
import { textLogoInverted } from '@inheartive/assets';
import { ThemeComponentSizeType } from 'native-base/lib/typescript/components/types';

export enum textLogoColor {
  primary = 'primary',
  inverted = 'inverted',
}

export interface TextLogoProps {
  color?: textLogoColor;
  width?: number;
  height?: number;
}

export const TextLogo = (props: TextLogoProps) => {
  return (
    <Image
      source={props.color === textLogoColor.inverted ? textLogoInverted : textLogo}
      width={props.width}
      height={props.height}
      resizeMode='contain'
      alt='Text logo'
    />
  );
};

export default TextLogo;
