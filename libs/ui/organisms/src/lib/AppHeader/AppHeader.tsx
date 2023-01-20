import React, { useState } from 'react';
import { Avatar, Row, TextLogo, textLogoColor } from '@inheartive/ui/atoms';

/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import { HeartsCredits } from '@inheartive/ui/molecules';
import { HStack } from 'native-base';
import { Link } from 'react-router-native';
import { Button, Text, View, Select } from '@inheartive/ui/atoms';

function AppHeader() {
  const [isVisible, setVisibility] = useState(false);
  const [menuItem, setMenuItem] = React.useState('');
  console.log({ menuItem });
  return (
    <Row px={8} py={2} justifyContent={'space-between'} bg='primary.500' alignItems='center'>
      <TextLogo width={150} color={textLogoColor.inverted} />
      <Avatar size={'lg'} />
      <View>
        <Select
          width={5}
          selectedValue={menuItem}
          placeholder='Menu'
          onValueChange={(itemValue) => setMenuItem(itemValue)}
        >
          <Select.Item label='Log out' value='Logout'>
            <Text>Hello</Text>
          </Select.Item>
        </Select>
      </View>
    </Row>
  );
}

export { AppHeader };
