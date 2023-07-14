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

const configuration: Configuration = {
  auth: {
    clientId: process.env.AAD_CLIENT_ID as string,
    authority: `https://login.microsoftonline.com/${process.env.AAD_TENANT_ID}`,
    redirectUri: 'http://localhost:19006/sso',
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
};

export const App = () => {
  const queryClient = new QueryClient();
  const { user } = useUser();

  const pca = new PublicClientApplication(configuration);

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <MsalProvider instance={pca}>
          <NativeRouter>
            <Routes>
              {routesConfig.map(({ path, needsAuth, page, footerIcon }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    needsAuth ? (
                      user ? (
                        <AuthenticatedPageWrapper footerActiveIcon={footerIcon}>{page}</AuthenticatedPageWrapper>
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
        </MsalProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};
