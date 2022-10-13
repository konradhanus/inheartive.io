import React from 'react';

import { Button, FormControl, Input } from '@inheartive/ui/atoms';

/* eslint-disable-next-line */
interface LoginFormControlProps {}

function LoginFormControl(props: LoginFormControlProps) {
  return (
    <FormControl>
      <Input placeholder='E-mail' size='xl' />
      <Button mt='4'>SIGN IN</Button>
    </FormControl>
  );
}

export { LoginFormControl, LoginFormControlProps };
