/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';

import { PixelRatio, StyleSheet } from 'react-native';

import { Box, Image, Text } from '@inheartive/ui/atoms';
import { LoginFormControl } from '@inheartive/ui/molecules';
import { View } from 'native-base';
import { logo } from './../../assets/index';
import { Link } from 'react-router-native';

export function SignInTemplate() {
  return (
    <View style={styles.container}>
      <Image source={logo} alt='Logo' />

      <Box w='100%' mt='50'>
        <LoginFormControl />
      </Box>

      <View mt={5}>
        <Link to='/'>
          <Text>Auctions</Text>
        </Link>
      </View>
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
