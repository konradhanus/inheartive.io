import React from 'react';

import { Box, Center, Container, Image } from '@inheartive/ui/atoms';
import { LoginFormControl } from '@inheartive/ui/molecules';

/* eslint-disable-next-line */
export interface LoginTemplateProps {}

export function LoginTemplate(props: LoginTemplateProps) {
  return (
    <Center>
      <Container>
        <Box alignItems="center" mt="150">
          <Image
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg',
            }}
            alt="Logo"
            size="xl"
          />
          <Box w="100%" mt="50" bgColor="red">
            <LoginFormControl />
          </Box>
        </Box>
      </Container>
    </Center>
  );
}

export default LoginTemplate;
