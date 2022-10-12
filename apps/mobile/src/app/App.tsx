/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { Homepage } from './pages/Homepage/Homepage';
import SignIn from './pages/SignIn';

export const App = () => {
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
