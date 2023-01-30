import React, { useContext, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { Button, FormControl, Input } from '@inheartive/ui/atoms';
import { apiRoutes } from '@inheartive/data';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useNavigate } from 'react-router-native';
import { RoutingPath } from '../../../../../../apps/mobile/src/app/routing/routing-path';
import { setValue } from '../../../../shared/utils';
import { UserContext } from '../../../../../../apps/mobile/src/app/components/Providers/UserProvider';

function LoginFormControl() {
  const [email, setEmail] = useState('');
  const { setAuth } = useContext(UserContext);

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(e.nativeEvent.text);
  };
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

  const signIn = () => mutateAsync({ email });

  return (
    <FormControl>
      <Input placeholder='E-mail' size='xl' value={email} onChange={onChange} />
      <Button mt='4' onPress={signIn}>
        Sign in
      </Button>
    </FormControl>
  );
}

export { LoginFormControl };
