/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { PixelRatio, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Box, Button, Image, View, Text } from '../../libs/ui/atoms';
import { LoginFormControl, SsoLoginBtnControl } from '../../libs/ui/molecules';
import { logo } from '../../assets/index';
import { useNavigate } from 'react-router-native';
import { RoutingPath } from '../../routing';
import VersionText from '../../assets/styles';
import packages from '../../../package.json'
import { Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {
  exchangeCodeAsync,
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery,
} from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const config = {
  auth: {
    clientId: process.env.AAD_CLIENT_ID as string,
    authority: process.env.SSO_AUTH_AUTHORITY as string,
    redirectUri: process.env.SSO_AUTH_REDIRECT_URI as string,
  },
};
const EXPOSED_SCOPES = ['Files.Read'];

export function SignInTemplate() {
    const navigate = useNavigate();
    const onPress = () => {
      navigate(RoutingPath.register);
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.helperView} />
            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.scrollContentContainer}
                scrollEnabled={false}
            >
                <Image style={{ width: 260, height: 280 }} source={logo} alt='Logo' />

                <Box w='100%' mt={10}>
                    <LoginForm />
                    <Button mt={3} variant='outline' onPress={onPress}>
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
      // Endpoint
      const discovery = useAutoDiscovery(config.auth.authority);
      const redirectUri = makeRedirectUri({
          path: 'sso',
      });
      const clientId = process.env.AAD_CLIENT_ID as string;

      // We store the JWT in here
      const [token, setToken] = React.useState<string | null>(null);

      // Request
      const [request, , promptAsync] = useAuthRequest(
          {
          clientId,
          scopes: EXPOSED_SCOPES,
          redirectUri,
          },
          discovery,
      );
        return (
            <>
            <Button
                      mt={3}
                      disabled={!request}
                      onPress={() => {
                        promptAsync().then((codeResponse) => {
                          if (request && codeResponse?.type === 'success' && discovery) {
                            exchangeCodeAsync(
                              {
                                clientId,
                                code: codeResponse.params.code,
                                extraParams: request.codeVerifier
                                  ? { code_verifier: request.codeVerifier }
                                  : undefined,
                                redirectUri,
                              },
                              discovery,
                            ).then((res) => {
                              setToken(res.accessToken);
                            });
                          }
                        });
                      }}
                    >SSO Login</Button>
                    <Text>{token} URI: {redirectUri}</Text>
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
    }
});

export default SignInTemplate;
