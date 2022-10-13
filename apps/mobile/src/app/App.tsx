/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { Homepage } from './pages/Homepage/Homepage';
import { SignInPage } from './pages/SignIn/SignInPage';

export const App = () => {
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signin' element={<SignInPage />} />
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
};

export default App;
