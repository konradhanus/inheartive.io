import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, Loader } from '@inheartive/ui/atoms';
import { AppFooter, FooterIcon, AppHeader } from '@inheartive/ui/organisms';
import { footerIconRouteMap, RoutingPath } from '../../routing';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-native';
import { apiRoutes } from '@inheartive/data';
import { BackHandler } from 'react-native';
import { useNavigate } from 'react-router-native';

interface Props {
  children: JSX.Element;
  footerActiveIcon?: FooterIcon;
}

export function AuthenticatedPageWrapper(props: Props) {
  const { children, footerActiveIcon } = props;

  const insets = useSafeAreaInsets();
  const navigate = useNavigate();

  React.useEffect(() => {
    const backAction = () => {
      if (footerActiveIcon === FooterIcon.auctions) {
        BackHandler.exitApp();
        return true;
      } else if (
        footerActiveIcon === FooterIcon.search ||
        footerActiveIcon === FooterIcon.heartcoins ||
        footerActiveIcon === FooterIcon.addAuction ||
        footerActiveIcon === FooterIcon.favorites
      ) {
        navigate(RoutingPath.auctions);
        return true;
      } else {
        navigate(-1);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

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
    <View style={{ flex: 1 }} paddingTop={insets.top} paddingBottom={insets.bottom}>
      {usersLoading && <Loader />}

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
