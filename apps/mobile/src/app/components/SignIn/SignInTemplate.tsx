/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';

import { PixelRatio, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Box, Image, Text } from '@inheartive/ui/atoms';
import { LoginFormControl } from '@inheartive/ui/molecules';
import { View } from 'native-base';
import { logo } from '../../assets/index';
import { Link } from 'react-router-native';

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

      <View mt={5}>
        <Link to='/'>
          <Text>Auctions</Text>
        </Link>
      </View>
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
