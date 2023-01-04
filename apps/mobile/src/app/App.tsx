import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '@inheartive/ui/theme';
import { routesConfig } from './routing';
import AuthenticatedPageWrapper from './components/AuthenticatedPageWrapper/AuthenticatedPageWrapper';
import UnauthenticatedPageWrapper from './components/UnauthenticatedPageWrapper/UnauthenticatedPageWrapper';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <NativeRouter>
          <Routes>
            {routesConfig.map((r) => (
              <Route
                key={r.path}
                path={r.path}
                element={
                  r.needsAuth ? (
                    <AuthenticatedPageWrapper footerActiveIcon={r.footerIcon}>{r.page}</AuthenticatedPageWrapper>
                  ) : (
                    <UnauthenticatedPageWrapper>{r.page}</UnauthenticatedPageWrapper>
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

export default App;
