import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NativeBaseProvider, Box, Button, FormControl, Stack, Input, WarningOutlineIcon } from "native-base";

export const App = () => {

  return (
    <NativeBaseProvider>
      <Box alignItems="center">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" defaultValue="12345" placeholder="password" />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
      </Box>
    </Box>
      <Button>Sign in</Button>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;

