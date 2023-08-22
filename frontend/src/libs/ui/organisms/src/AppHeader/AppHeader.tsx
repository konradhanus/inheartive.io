import React, { useState } from 'react';
import {
  Avatar,
  Row,
  TextLogo,
  textLogoColor,
  View,
  Select,
} from '../../../atoms';
import { useNavigate } from 'react-router-native';
import { RoutingPath } from '../../../../../routing/routing-path';
import { setValue } from '../../../shared/utils';
import { useUser } from '../../../../../components/Providers/UserProvider';
import { Item } from '../../../atoms/src/Select/SelectItem';
import { Platform } from 'react-native';

function AppHeader() {
  const [menuItem, setMenuItem] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();
  const logOut = () => {
    setValue('access_token', '');
    setUser(null);
    navigate(RoutingPath.signIn);
  };

  const toMyAuctions = () => navigate(RoutingPath.myAuctions);
  const toMyBids = () => navigate(RoutingPath.myBids);

  return (
    <Row
      px={8}
      pt={Platform.OS === 'ios' ? 10 : 8}
      pb={2}
      justifyContent={'space-between'}
      bg="primary.500"
      alignItems="center"
    >
      <TextLogo width={150} color={textLogoColor.inverted} />
      <View>
        <Select
          borderColor={'transparent'}
          selectedValue={menuItem}
          onValueChange={(itemValue) => setMenuItem(itemValue)}
          dropdownIcon={<Avatar size={'lg'} />}
          display="flex"
          flexGrow={1}
          maxW="140"
        >
          <Item label="Log out" value="Logout" onPress={logOut} />
          <Item label="My auctions" value="MyAuctions" onPress={toMyAuctions} />
          <Item label="My bids" value="MyBids" onPress={toMyBids} />
        </Select>
      </View>
    </Row>
  );
}

export { AppHeader };
