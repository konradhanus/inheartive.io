import React, { ReactNode } from 'react';
import { theme } from '@inheartive/ui/theme';
import { ImageBackground, ImageSourcePropType, Text, View } from 'react-native';

export enum imageTypes {
  list = 'list',
  detail = 'detail',
}

type imageProps = {
  imageType: imageTypes;
  children?: ReactNode;
  imageSrc?: ImageSourcePropType;
};

const imageStyles = (imageType: string) => {
  const height = imageType === 'list' ? 180 : 310;

  return {
    container: {
      height: height,
      backgroundColor: theme.colors.trueGray['300'],
    },
    image: {
      maxHeight: height,
      backgroundColor: theme.colors.trueGray['200'],
    },
    text: {
      color: theme.colors.black,
      padding: 100,
    },
  };
};

const AuctionImage = (props: imageProps) => {
  const { imageType, imageSrc } = props;

  return (
    <View style={imageStyles(imageType).container}>
      <ImageBackground style={imageStyles(imageType).image} source={imageSrc} resizeMode='cover'>
        {imageSrc === undefined && <Text style={imageStyles(imageType).text}>Basic layout of the Image</Text>}
        {props.children}
      </ImageBackground>
    </View>
  );
};

export { AuctionImage, ImageBackground };
