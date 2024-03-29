import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from './src/libs/ui/theme';
import { routesConfig } from './src/routing';
import AuthenticatedPageWrapper from './src/components/AuthenticatedPageWrapper/AuthenticatedPageWrapper';

import SignInPage from './src/components/SignIn/SignInPage';
import { UserProvider, useUser } from './src/components/Providers/UserProvider';

export const App = () => {
  const queryClient = new QueryClient();
  const { user } = useUser();

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <NativeRouter>
          <Routes>
            {routesConfig.map(({ path, needsAuth, page, footerIcon }) => (
              <Route
                key={path}
                path={path}
                element={
                  needsAuth ? (
                    user ? (
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
