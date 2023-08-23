import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from './src/libs/ui/theme';
import { routesConfig } from './src/routing';
import AuthenticatedPageWrapper from './src/components/AuthenticatedPageWrapper/AuthenticatedPageWrapper';

import SignInPage from './src/components/SignIn/SignInPage';
import { UserProvider, useUser } from './src/components/Providers/UserProvider';

import { MsalProvider } from '@azure/msal-react';
import { Configuration, PublicClientApplication } from '@azure/msal-browser';
import { User } from './src/libs/data/src';
import { Platform } from 'react-native';
import Toast from 'react-native-toast-message';

export const App = () => {
  const queryClient = new QueryClient();
  const { user } = useUser();

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <Application user={user} />
      </NativeBaseProvider>
      <Toast />
    </QueryClientProvider>
  );
};

interface AppProps {
  user: User | null;
}

function Application(props: AppProps): JSX.Element {
  if (Platform.OS === 'web') {
    return <WebApp user={props.user} />;
  } else {
    return <RootApp user={props.user} />;
  }
}

function WebApp(props: AppProps): JSX.Element {
  const configuration: Configuration = {
    auth: {
      clientId: process.env.AAD_CLIENT_ID as string,
      authority: process.env.SSO_AUTH_AUTHORITY as string,
      redirectUri: process.env.SSO_AUTH_REDIRECT_URI as string,
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    },
  };

  const pca = new PublicClientApplication(configuration);

  return (
    <MsalProvider instance={pca}>
      <RootApp user={props.user} />
    </MsalProvider>
  );
}

function RootApp(props: AppProps): JSX.Element {
  return (
    <NativeRouter>
      <Routes>
        {routesConfig.map(({ path, needsAuth, page, footerIcon }) => (
          <Route
            key={path}
            path={path}
            element={
              needsAuth ? (
                props.user ? (
                  <AuthenticatedPageWrapper footerActiveIcon={footerIcon}>
                    {page}
                  </AuthenticatedPageWrapper>
                ) : (
                  <SignInPage />
                )
              ) : (
                page
              )
            }
          />
        ))}
      </Routes>
    </NativeRouter>
  );
}

export default () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};
