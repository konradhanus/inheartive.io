import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { theme } from '@inheartive/ui/theme';
import SignInPage from './components/SignIn/';
import AuctionsPage from './components/Auctions';
import AuctionPage from './components/Auction';

export const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NativeRouter>
        <Routes>
          <Route path='/' element={<AuctionsPage />} />
          <Route path='/sign-in' element={<SignInPage />} />
          <Route path='/auctions/:id' element={<AuctionPage />} />
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
};

export default App;
