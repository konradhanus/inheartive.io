import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BackHandler } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Navigate, useNavigate } from 'react-router-native';
import { apiRoutes } from '../../libs/data';
import { Loader, Text, View } from '../../libs/ui/atoms';
import { AppFooter, AppHeader, FooterIcon } from '../../libs/ui/organisms';
import { RoutingPath, footerIconRouteMap } from '../../routing';

interface Props {
    children: JSX.Element;
    footerActiveIcon?: FooterIcon;
}

export function AuthenticatedPageWrapper(props: Props) {
    const { children, footerActiveIcon } = props;

    const insets = useSafeAreaInsets();
    const MEANINGFUL_NAME = [
        FooterIcon.search,
        FooterIcon.heartcoins,
        FooterIcon.addAuction,
        FooterIcon.favorites,
    ];
    const navigate = useNavigate();
    const backAction = () => {
        if (footerActiveIcon) {
            if (footerActiveIcon === FooterIcon.auctions) {
                BackHandler.exitApp();
                return true;
            }
            if (MEANINGFUL_NAME.includes(footerActiveIcon)) {
                navigate(RoutingPath.auctions);
                return true;
            }
        }
        navigate(-1);
        return true;
    };
    React.useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );
        return () => backHandler.remove();
    }, [footerActiveIcon]);
    const {
        isLoading: usersLoading,
        isError: usersError,
        data: users,
    } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(apiRoutes.users).then((res) => res.json()),
    });

    return (
        <View
            style={{ flex: 1 }}
            paddingBottom={insets.bottom}
        >
            {usersLoading && <Loader />}

            {usersError && <Text>An error occured!</Text>}

            {users && users.length === 0 && (
                <Navigate to={RoutingPath.signIn} />
            )}

            {users && users.length > 0 && (
                <>
                    <AppHeader />
                    <View style={{ flex: 1 }}>{children}</View>
                    <AppFooter
                        iconRoutingMap={footerIconRouteMap}
                        activeIcon={footerActiveIcon}
                    />
                </>
            )}
        </View>
    );
}

export default AuthenticatedPageWrapper;
