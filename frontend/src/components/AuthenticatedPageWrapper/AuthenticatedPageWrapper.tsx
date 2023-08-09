import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, Loader } from '../../libs/ui/atoms';
import { AppFooter, FooterIcon, AppHeader } from '../../libs/ui/organisms';
import { footerIconRouteMap, RoutingPath } from '../../routing';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-native';
import { apiRoutes } from '../../libs/data';
import { BackHandler, Dimensions, StyleSheet, Platform } from 'react-native';
import { useNavigate } from 'react-router-native';

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

    const containerWeb = Platform.OS === 'web' ? style.containerWeb : '';

    return (
        <View
            style={{
                ...style.container,
                ...containerWeb,
                paddingBottom: insets.bottom,
            }}
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

const style = StyleSheet.create({
    container: { flex: 1 },
    containerWeb: { maxHeight: Dimensions.get('window').height },
    content: { flex: 1 },
});

export default AuthenticatedPageWrapper;
