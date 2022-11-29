import React from 'react';
import { Avatar, Row, TextLogo, textLogoColor, View } from '@inheartive/ui/atoms';

function AppHeader() {
  return (
    <Row px={8} py={2} justifyContent={'space-between'} bg='secondary.600' alignItems='center'>
      <TextLogo width={150} color={textLogoColor.inverted} />
      <Avatar size={'lg'} />
    </Row>
  );
}

export { AppHeader };
