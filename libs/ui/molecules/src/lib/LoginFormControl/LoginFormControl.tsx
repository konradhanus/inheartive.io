import React, { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm, FormProvider } from 'react-hook-form';

import { Button, FormControl, Text, View } from '@inheartive/ui/atoms';
import { apiRoutes } from '@inheartive/data';
import { useNavigate } from 'react-router-native';
import { RoutingPath } from '../../../../../../apps/mobile/src/app/routing/routing-path';
import { setValue } from '../../../../shared/utils';
import { UserContext } from '../../../../../../apps/mobile/src/app/components/Providers/UserProvider';
import { EmailInput } from '@inheartive/ui/organisms';

function LoginFormControl() {
  const { setAuth } = useContext(UserContext);

  const formMethods = useForm<{ email: string }>();
  const {
    getValues,
    formState: { errors },
  } = formMethods;
  const navigate = useNavigate();

  const setAuthenticated = async (access_token: string) => {
    const success = await setValue('access_token', access_token);
    setAuth(success);
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
          const { access_token = '' } = data || {};
          if (access_token) {
            setAuthenticated(access_token);
            navigate(RoutingPath.auctions);
          }
        })
        .catch(() => console.log('error'));
    },
  });

  const signIn = () => {
    const { email } = getValues();
    mutateAsync({ email });
  };

  return (
    <FormProvider {...formMethods}>
      <FormControl>
        <EmailInput placeholder='E-mail' />
        <View height={5} position='relative'>
          <Text color='red.700' position={'absolute'}>
            {errors.email?.message}
          </Text>
        </View>
      </FormControl>
      <Button mt='4' onPress={signIn}>
        Sign in
      </Button>
    </FormProvider>
  );
}

export { LoginFormControl };
