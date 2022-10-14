/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NativeRouter, Route, Routes } from 'react-router-native';
import HomePage from './components/Home';
import SignInPage from './components/SignIn/';

export const App = () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#ffe5ff',
        100: '#fab8f4',
        200: '#f48aeb',
        300: '#ef5de2',
        400: '#e930d8',
        500: '#d018bf',
        600: '#a21095',
        700: '#750a6c',
        800: '#480341',
        900: '#1b0019',
      },
    },
    config: {
      initialColorMode: 'light',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
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
