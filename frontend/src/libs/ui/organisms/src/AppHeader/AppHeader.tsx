import React, { useState } from 'react';
import { useNavigate } from 'react-router-native';
import { Avatar, Row, Select, TextLogo, View, textLogoColor } from '../../../atoms';

import { Platform } from 'react-native';
import { useUser } from '../../../../../components/Providers/UserProvider';
import { RoutingPath } from '../../../../../routing/routing-path';
import { setValue } from '../../../shared/utils';

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
            pt={Platform.OS === "ios" ? 10 : 8}
            pb={2}
            justifyContent={'space-between'}
            bg='primary.500'
            alignItems='center'
        >
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
                    <Select.Item
                        label='Log out'
                        value='Logout'
                        onPress={logOut}
                    />
                    <Select.Item
                        label='My auctions'
                        value='MyAuctions'
                        onPress={toMyAuctions}
                    />
                    <Select.Item
                        label='My bids'
                        value='MyBids'
                        onPress={toMyBids}
                    />
                </Select>
            </View>
        </Row>
    );
}

export { AppHeader };
