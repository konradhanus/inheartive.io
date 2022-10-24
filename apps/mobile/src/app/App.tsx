import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { theme } from '@inheartive/ui/theme';
import HomePage from './components/Home';
import SignInPage from './components/SignIn/';
import AuctionsPage from './components/Auctions';

export const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NativeRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/auctions' element={<AuctionsPage />} />
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
};

export default App;
