import React, { useState } from 'react';
import { Avatar, Row, TextLogo, textLogoColor } from '@inheartive/ui/atoms';

/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import { View, Select } from '@inheartive/ui/atoms';

function AppHeader() {
  const [menuItem, setMenuItem] = useState('');
  return (
    <Row px={8} py={2} justifyContent={'space-between'} bg='primary.500' alignItems='center'>
      <TextLogo width={150} color={textLogoColor.inverted} />
      <View>
        <Select
          borderColor={'transparent'}
          selectedValue={menuItem}
          onValueChange={(itemValue) => setMenuItem(itemValue)}
          dropdownIcon={<Avatar size={'lg'} />}
          display='flex'
          flexGrow={1}
        >
          <Select.Item label='Log out' value='Logout' />
        </Select>
      </View>
    </Row>
  );
}

export { AppHeader };
