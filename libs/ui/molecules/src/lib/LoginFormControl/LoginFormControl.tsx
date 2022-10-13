import React from 'react';

import { Button, FormControl, Input } from '@inheartive/ui/atoms';

function LoginFormControl() {
  return (
    <FormControl>
      <Input placeholder='E-mail' size='xl' />
      <Button mt='4'>SIGN IN</Button>
    </FormControl>
  );
}

export { LoginFormControl };
