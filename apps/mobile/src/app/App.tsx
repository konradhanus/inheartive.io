import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { theme } from '@inheartive/ui/theme';
import SignInPage from './components/SignIn/';
import AuctionsPage from './components/Auctions';

export const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NativeRouter>
        <Routes>
          <Route path='/' element={<AuctionsPage />} />
          <Route path='/sign-in' element={<SignInPage />} />
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
};

export default App;
