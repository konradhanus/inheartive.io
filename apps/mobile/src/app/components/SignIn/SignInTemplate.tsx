/* eslint-disable prefer-const */
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

import AzureAuth from 'react-native-azure-auth';

// const azureAuth = new AzureAuth({
//   authorityUrl: 'https://login.microsoftonline.com/com.intive.inheartive',
//   clientId: 'deb5c682-a999-4b62-8eab-8feb239abb71',
//   tenant: 'e63af9da-3d44-41a3-8c5c-6b3754611bc1',
//   redirectUri: 'msauth://com.intive.inheartive/dLQ6EFhW717n5Td1%2BQvNXUW7Rm8%3D',
// });

// company config
const azureAuth = new AzureAuth({
  authorityUrl: 'https://login.microsoftonline.com/com.intive.inheartive',
  clientId: '4113fbdb-2b60-4cf1-bfa7-c74282f508d2',
  tenant: '00a83132-4221-4698-a787-6d679d557a90',
  redirectUri: 'msauth://com.intive.inheartive/dLQ6EFhW717n5Td1%2BQvNXUW7Rm8%3D',
});

export function SignInTemplate() {
  const navigate = useNavigate();
  const onPress = () => navigate(RoutingPath.register);
  const appVersion = getVersion();
  const onLogin = async () => {
    try {
      let tokens = await azureAuth.webAuth.authorize({ scope: 'openid profile User.Read Mail.Read' });
      console.log(tokens);
      // this.setState({ accessToken: tokens.accessToken });
      // let info = await azureAuth.auth.msGraphRequest({token: tokens.accessToken, path: '/me'})
      // this.setState({ user: info.displayName, userId: tokens.userId })
    } catch (error) {
      console.log(error);
    }
  };
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
        <Button onPress={onLogin}>Click Me2</Button>
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
