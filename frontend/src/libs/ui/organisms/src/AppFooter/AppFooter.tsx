/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { HeartsCredits } from '../../../molecules';
import { HStack, View } from 'native-base';
import { Link } from 'react-router-native';
import { FooterIcon, FooterIconRoutingMap } from './footer-icon';
import { AppFooterIcon } from './AppFooterIcon';

interface Props {
    activeIcon: FooterIcon;
    iconRoutingMap: FooterIconRoutingMap;
}

function AppFooter(props: Props) {
    const { activeIcon, iconRoutingMap } = props;

    return (
        <View style={Platform.OS === 'android' && style.container}>
            <HStack
                bg='white'
                justifyContent='space-between'
                px='4'
                alignItems='center'
                testID='footer-menu'
                style={style.innerContainer}
            >
                <Link
                    to={iconRoutingMap[FooterIcon.auctions]}
                    underlayColor='transparent'
                >
                    <AppFooterIcon
                        name={FooterIcon.auctions}
                        isActive={activeIcon === FooterIcon.auctions}
                    />
                </Link>

                <Link
                    to={iconRoutingMap[FooterIcon.auctions]}
                    underlayColor='transparent'
                >
                    <AppFooterIcon
                        name={FooterIcon.search}
                        isActive={activeIcon === FooterIcon.search}
                    />
                </Link>

                <Link
                    to={iconRoutingMap[FooterIcon.auctions]}
                    underlayColor='transparent'
                >
                    <HeartsCredits credit={99} size={60} />
                </Link>

                <Link
                    to={iconRoutingMap[FooterIcon.addAuction]}
                    underlayColor='transparent'
                >
                    <AppFooterIcon
                        name={FooterIcon.addAuction}
                        isActive={activeIcon === FooterIcon.addAuction}
                    />
                </Link>

                <Link
                    to={iconRoutingMap[FooterIcon.auctions]}
                    underlayColor='transparent'
                >
                    <AppFooterIcon
                        name={FooterIcon.favorites}
                        isActive={activeIcon === FooterIcon.favorites}
                    />
                </Link>
            </HStack>
        </View>
    );
}

const style = StyleSheet.create({
    container: { elevation: 1, paddingTop: 5 },
    innerContainer: {
        shadowRadius: 2,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: -3,
        },
    },
});

export { AppFooter };
