import React from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';
import { Box, Button, FormControl, Stack, Input, WarningOutlineIcon } from 'native-base';

export function HomeTemplate() {
  return (
    <>
      <Box alignItems='center'>
        <Box w='100%' maxWidth='300px'>
          <FormControl isRequired>
            <Stack mx='4'>
              <Text testID='heading'>Welcome Mobile</Text>
              <FormControl.Label>Password</FormControl.Label>
              <Input type='password' defaultValue='12345' placeholder='password' />
              <FormControl.HelperText>Must be at least 6 characters.</FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
                At least 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>
      </Box>
      <Button>
        <Link to='/signin'>
          <Text>Sign in</Text>
        </Link>
      </Button>
    </>
  );
}

export default HomeTemplate;
