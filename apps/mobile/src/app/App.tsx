/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { LoginTemplate } from 'libs/ui/templates/src';

export const App = () => {
  return (
    <NativeBaseProvider>
      <LoginTemplate />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
