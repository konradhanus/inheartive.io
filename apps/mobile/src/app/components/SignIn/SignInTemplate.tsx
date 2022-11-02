/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';

import { PixelRatio, StyleSheet } from 'react-native';

import { Box, Image } from '@inheartive/ui/atoms';
import { LoginFormControl } from '@inheartive/ui/molecules';
import { View } from 'native-base';
import { logo } from './../../assets/index';
import { AvatarDropdown } from '@inheartive/ui/molecules';

export function SignInTemplate() {
  const data = [
    {
      name: 'Link 1',
      route: '/',
    },
    {
      name: 'Link 2',
      route: '/auctions',
    },
    {
      name: 'Link 3',
      route: '/signin',
    },
  ];

  return (
    <View style={styles.container}>
      <Image source={logo} alt='Logo' />

      <Box w='100%' mt='50'>
        <LoginFormControl />
      </Box>
      <AvatarDropdown dropdownList={data} />
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
