import React, { useState } from 'react';
import { Avatar, Row, TextLogo, textLogoColor } from '@inheartive/ui/atoms';
import { useNavigate } from 'react-router-native';

import { View, Select } from '@inheartive/ui/atoms';

import { RoutingPath } from '../../../../../../apps/mobile/src/app/routing/routing-path';
import { setValue } from '../../../../shared/utils';

function AppHeader() {
  const [menuItem, setMenuItem] = useState('');
  const navigate = useNavigate();

  const logOut = () => {
    setValue('access_token', '');
    navigate(RoutingPath.signIn);
  };

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
          <Select.Item label='Log out' value='Logout' onPress={logOut} />
        </Select>
      </View>
    </Row>
  );
}

export { AppHeader };
