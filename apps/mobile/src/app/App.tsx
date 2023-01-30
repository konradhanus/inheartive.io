import React, { useContext } from 'react';
import { NativeBaseProvider } from 'native-base';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '@inheartive/ui/theme';
import { routesConfig } from './routing';
import AuthenticatedPageWrapper from './components/AuthenticatedPageWrapper/AuthenticatedPageWrapper';

import SignInPage from './components/SignIn/SignInPage';
import { UserContext, UserProvider } from './components/Providers/UserProvider';

export const App = () => {
  const queryClient = new QueryClient();
  const { auth } = useContext(UserContext);

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
                    auth ? (
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
