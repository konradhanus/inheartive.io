/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';

import { PixelRatio, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Box, Image } from '@inheartive/ui/atoms';
import { LoginFormControl } from '@inheartive/ui/molecules';
import { logo } from '../../assets/index';

export function SignInTemplate() {
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <Image source={logo} alt='Logo' />

      <Box w='100%' mt='10'>
        <LoginFormControl />
      </Box>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(16),
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(10),
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default SignInTemplate;
