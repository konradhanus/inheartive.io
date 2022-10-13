/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NativeRouter, Route, Routes } from 'react-router-native';
import HomePage from './components/Home';
import SignInPage from './components/SignIn/';

export const App = () => {
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SignInPage />} />
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
};

export default App;
