import React from 'react';

import { Button, FormControl, Input } from '@inheartive/ui/atoms';

function LoginFormControl() {
  return (
    <FormControl>
      <Input placeholder='E-mail' size='xl' />
      <Button mt='4'>Sign in</Button>
    </FormControl>
  );
}

export { LoginFormControl };
