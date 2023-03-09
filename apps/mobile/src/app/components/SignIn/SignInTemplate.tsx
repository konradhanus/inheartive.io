/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { getVersion } from 'react-native-device-info';
import { PixelRatio, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Box, Button, Image } from '@inheartive/ui/atoms';
import { LoginFormControl } from '@inheartive/ui/molecules';
import { logo } from '../../assets/index';
import { useNavigate } from 'react-router-native';
import { RoutingPath } from '../../routing';
import VersionText from '../../assets/styles';

export function SignInTemplate() {
  const navigate = useNavigate();
  const onPress = () => navigate(RoutingPath.register);
  const appVersion = getVersion();
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <Image source={logo} alt='Logo' />

      <Box w='100%' mt={10}>
        <LoginFormControl />

        <Button mt={3} variant='outline' onPress={onPress}>
          Register
        </Button>
      </Box>
      <VersionText>Version: {appVersion}</VersionText>
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
