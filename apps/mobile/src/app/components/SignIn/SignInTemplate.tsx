import React from 'react';

import { PixelRatio, StyleSheet } from 'react-native';

import { Box, Image } from '@inheartive/ui/atoms';
import { LoginFormControl } from '@inheartive/ui/molecules';
import { View } from 'native-base';
import logo from '../../assets/logo.jpg';

/* eslint-disable-next-line */
export interface LoginTemplateProps {}

export function SignInTemplate(props: LoginTemplateProps) {
  console.log(logo);
  return (
    <View style={styles.container}>
      <Image source={logo} alt='Logo' />

      <Box w='100%' mt='50'>
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

export default SignInTemplate;
