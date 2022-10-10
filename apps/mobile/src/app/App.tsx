/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import { NativeRouter, Route, Routes } from 'react-router-native';
import PageHome from './pages/homepage/homepage';
import PageSignin from './pages/page-signin/sign-in';

export const App = () => {


  return (
    <NativeRouter>
      <Routes>
      <Route path="/" element={<PageHome/>} />
        <Route path="/signin" element={<PageSignin/>} />
      </Routes>
    </NativeRouter>
  );
};


export default App;
