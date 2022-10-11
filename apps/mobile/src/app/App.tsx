/* eslint-disable jsx-a11y/accessible-emoji */
import { NativeBaseProvider } from 'native-base';
import React from 'react';

import { NativeRouter, Route, Routes } from 'react-router-native';
import { Homepage } from './pages/Homepage/Homepage';
import { SignIn } from './pages/SignIn/SignIn';

export const App = () => {

  return (
    <NativeBaseProvider>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
};

export default App;

