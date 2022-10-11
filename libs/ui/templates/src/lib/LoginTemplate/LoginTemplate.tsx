import React from 'react';

import { PixelRatio, StyleSheet } from 'react-native';

import { Box, Center, Container, Image } from '@inheartive/ui/atoms';
import { LoginFormControl } from '@inheartive/ui/molecules';
import { View } from 'native-base';
import { LoginLogo } from '@inheartive/ui/assets';

/* eslint-disable-next-line */
export interface LoginTemplateProps {}

export function LoginTemplate(props: LoginTemplateProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Logo"
        size="xl"
      />

      <Box w="100%" mt="50">
        <LoginFormControl />
      </Box>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(16),
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(50),
    height: '100%',
    alignItems: 'center',
  },
});

export default LoginTemplate;
