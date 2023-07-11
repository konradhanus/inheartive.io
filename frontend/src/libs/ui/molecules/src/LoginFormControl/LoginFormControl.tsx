import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm, FormProvider } from 'react-hook-form';

import { Button, FormControl, View, Text } from '../../../atoms';
import { apiRoutes } from '../../../../data';
import { useNavigate } from 'react-router-native';
import { EmailInput, PasswordInput } from '../../../organisms';
import { useUser } from '../../../../../components/Providers/UserProvider';
import { RoutingPath } from '../../../../../routing/routing-path';
import { HttpMethods, fetchData, setValue } from '../../../shared/utils';
import {
  useAuthRequest,
  useAutoDiscovery,
  ResponseType,
} from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();
interface LoginForm {
  email: string;
  password: string;
}
function LoginFormControl() {
  const { setUser } = useUser();
  const [loginError, setLoginError] = useState(false);

  const formMethods = useForm<LoginForm>({ mode: 'onChange' });
  const {
    getValues,
    formState: { errors, isValid },
    handleSubmit,
  } = formMethods;

  const navigate = useNavigate();

  const setAccessToken = async (access_token: string) => {
    await setValue('access_token', access_token);
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (data: LoginForm) => {
      return fetchData(apiRoutes.login, HttpMethods.POST, data);
    },
    onSuccess: (value) => {
      value
        .json()
        .then((data) => {
          const { access_token = '', user = null } = data || {};
          if (access_token) {
            setAccessToken(access_token);
            setUser(user);
            navigate(RoutingPath.auctions);
          }
        })
        .catch(() => {
          setLoginError(true);
        });
    },
  });

  const signIn = () => {
    const { email, password } = getValues();
    setLoginError(false);
    if (isValid) {
      mutateAsync({ email, password });
    }
  };

  const discovery = useAutoDiscovery(
    `https://login.microsoftonline.com/${process.env.AAD_TENANT_ID}/v2.0`
  );
  // Request
  const [request, response, promptAsync] = useAuthRequest(
    {
      //   responseType: ResponseType.IdToken,
      clientId: process.env.AAD_CLIENT_ID,
      scopes: ['openid', 'profile', 'email', 'offline_access'],
      redirectUri: 'http://localhost:19006/sso',
    },
    discovery
  );

  React.useEffect(() => {
    console.log('request', request);
    console.log('response', response);
    if (response && response.type === 'success') {
      navigate(RoutingPath.auctions);
      const token = response.params.access_token;
      console.log('to jest nasz response', response);
      const url = response.url.split('?')[1];

      fetch(`http://localhost:3333/api/login/sso`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(response.params),
      })
        .then((response) => {
          if (response.ok) {
            setAccessToken(response.body.access_token);
            setUser({
              id: '1',
              firstName: 'Will',
              lastName: 'Smith',
              initials: 'WS',
            });
            navigate(RoutingPath.auctions);
            return response.text();
          }
          throw new Error('Wystąpił błąd sieciowy');
        })
        .then((data) => {
          console.log('Odpowiedź z serwera:', data);
        })
        .catch((error) => {
          console.error('Błąd:', error);
        });
    }
  }, [response, request]);

  const isDisabled = !isValid;

  return (
    <FormProvider {...formMethods}>
      <FormControl isInvalid={'email' in errors}>
        <View>
          <EmailInput placeholder="E-mail" />
          <View height={6} position="relative" marginBottom={2}>
            <FormControl.ErrorMessage>
              {errors.email?.message}
            </FormControl.ErrorMessage>
          </View>
        </View>
      </FormControl>
      <FormControl isInvalid={'password' in errors}>
        <PasswordInput placeholder="Password" />
        <View height={6} position="relative" marginBottom={2}>
          <FormControl.ErrorMessage>
            {errors.password?.message}
          </FormControl.ErrorMessage>
        </View>
      </FormControl>
      {loginError && <Text>User name or password are wrong</Text>}
      <Button
        mt="4"
        onPress={(e) => handleSubmit(signIn)(e)}
        disabled={isDisabled}
        isDisabled={isDisabled}
      >
        Sign in
      </Button>
      <Button
        onPress={() => {
          promptAsync();
        }}
      >
        Sing in using SSO
      </Button>
    </FormProvider>
  );
}

export { LoginFormControl };
