import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text } from '@inheartive/ui/atoms';
import { AppFooter, FooterIcon, AppHeader } from '@inheartive/ui/organisms';
import { footerIconRouteMap, RoutingPath } from '../../routing';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-native';
import { apiRoutes } from '@inheartive/data';

interface Props {
  children: JSX.Element;
  footerActiveIcon?: FooterIcon;
}

export function AuthenticatedPageWrapper(props: Props) {
  const { children, footerActiveIcon } = props;

  const insets = useSafeAreaInsets();

  const {
    isLoading: usersLoading,
    isError: usersError,
    data: users,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch(apiRoutes.users).then((res) => res.json()),
  });

  return (
    <View style={{ flex: 1 }} paddingTop={insets.top} paddingBottom={insets.bottom}>
      {usersLoading && <Text>Loading...</Text>}

      {usersError && <Text>An error occured!</Text>}

      {users && users.length === 0 && <Navigate to={RoutingPath.signIn} />}

      {users && users.length > 0 && (
        <>
          <AppHeader />
          <View style={{ flex: 1 }}>{children}</View>
          <AppFooter iconRoutingMap={footerIconRouteMap} activeIcon={footerActiveIcon} />
        </>
      )}
    </View>
  );
}

export default AuthenticatedPageWrapper;
