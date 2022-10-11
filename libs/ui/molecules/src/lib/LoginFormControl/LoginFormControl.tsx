import React from 'react';

import {
  Button,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
} from '@inheartive/ui/atoms';

/* eslint-disable-next-line */
interface LoginFormControlProps {}

function LoginFormControl(props: LoginFormControlProps) {
  return (
    <FormControl>
      <Stack mx="4">
        <FormControl.Label>Password</FormControl.Label>
        <Input type="password" defaultValue="12345" placeholder="password" />
        <FormControl.HelperText>
          Must be atleast 6 characters.
        </FormControl.HelperText>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>

        <Button>Sign in</Button>
      </Stack>
    </FormControl>
  );
}

export { LoginFormControl, LoginFormControlProps };
