/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { PixelRatio, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Box, Button, Image, View } from '../../libs/ui/atoms';
import { LoginFormControl, SsoLoginBtnControl } from '../../libs/ui/molecules';
import { logo } from '../../assets/index';
import { useNavigate } from 'react-router-native';
import { RoutingPath } from '../../routing';
import VersionText from '../../assets/styles';
import packages from '../../../package.json';
import { Platform } from 'react-native';

export function SignInTemplate() {
  const navigate = useNavigate();
  const onPress = () => {
    navigate(RoutingPath.register);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.helperView} />
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.scrollContentContainer}
        scrollEnabled={false}
      >
        <Image style={{ width: 260, height: 280 }} source={logo} alt="Logo" />

        <Box w="100%" mt={10}>
          <LoginForm />
          <Button mt={3} variant="outline" onPress={onPress}>
            Register
          </Button>
        </Box>
        <VersionText>Version: {packages.version}</VersionText>
      </KeyboardAwareScrollView>
      <View style={styles.helperView} />
    </View>
  );
}

function LoginForm(): JSX.Element {
  if (Platform.OS === 'web') {
    return (
      <>
        <LoginFormControl />
        <SsoLoginBtnControl />
      </>
    );
  } else {
    return (
      <>
        <LoginFormControl />
      </>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  scrollContentContainer: {
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(16),
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(10),
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    maxWidth: PixelRatio.getPixelSizeForLayoutSize(1024),
  },
  helperView: {
    flex: 1,
  },
});

export default SignInTemplate;
