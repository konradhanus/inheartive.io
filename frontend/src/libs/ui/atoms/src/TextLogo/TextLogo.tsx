import { Image } from '../..';
import { textLogo } from '../../../../../assets';
import { textLogoInverted } from '../../../../../assets';

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
