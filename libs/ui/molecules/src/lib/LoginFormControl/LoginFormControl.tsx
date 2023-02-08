import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm, FormProvider } from 'react-hook-form';

import { Button, FormControl, View } from '@inheartive/ui/atoms';
import { apiRoutes } from '@inheartive/data';
import { useNavigate } from 'react-router-native';
import { RoutingPath } from '../../../../../../apps/mobile/src/app/routing/routing-path';
import { setValue } from '../../../../shared/utils';
import { useUser } from '../../../../../../apps/mobile/src/app/components/Providers/UserProvider';
import { EmailInput } from '@inheartive/ui/organisms';

function LoginFormControl() {
  const { setUser } = useUser();

  const formMethods = useForm<{ email: string }>();
  const {
    getValues,
    formState: { errors },
    handleSubmit,
  } = formMethods;
  const navigate = useNavigate();

  const setAccessToken = async (access_token: string) => {
    await setValue('access_token', access_token);
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (data: { email: string }) => {
      const response = await fetch(apiRoutes.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response;
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
        .catch(() => console.log('error'));
    },
  });

  const signIn = () => {
    const { email } = getValues();
    const isEmailError = 'email' in errors;
    if (!isEmailError) {
      mutateAsync({ email });
    }
  };

  return (
    <FormProvider {...formMethods}>
      <FormControl isInvalid={'email' in errors}>
        <EmailInput placeholder='E-mail' />
        <View height={6} position='relative'>
          <FormControl.ErrorMessage>{errors.email?.message}</FormControl.ErrorMessage>
        </View>
      </FormControl>
      <Button mt='4' onPress={(e) => handleSubmit(signIn)(e)}>
        Sign in
      </Button>
    </FormProvider>
  );
}

export { LoginFormControl };
