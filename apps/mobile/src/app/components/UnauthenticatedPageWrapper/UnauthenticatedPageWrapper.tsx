import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text } from '@inheartive/ui/atoms';
import { FooterIcon } from '@inheartive/ui/organisms';
import { RoutingPath } from '../../routing';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-native';
import { apiRoutes } from '@inheartive/data';

interface Props {
  children: JSX.Element;
  footerActiveIcon?: FooterIcon;
}

export function UnauthenticatedPageWrapper(props: Props) {
  const { children } = props;

  const insets = useSafeAreaInsets();

  const {
    isLoading: usersLoading,
    isError: usersError,
    data: users,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch(apiRoutes.users).then((res) => res.json()),
    onSuccess: () => refetch(),
  });

  return (
    <View style={{ flex: 1 }} paddingTop={insets.top} paddingBottom={insets.bottom}>
      {usersLoading && <Text>Loading...</Text>}

      {usersError && <Text>An error occured!</Text>}

      {users && users.length > 0 && <Navigate to={RoutingPath.auctions} />}

      {users && users.length === 0 && <View style={{ flex: 1 }}>{children}</View>}
    </View>
  );
}

export default UnauthenticatedPageWrapper;
