import { SafeAreaView, Text } from 'react-native'
import React from 'react';
import { Link } from 'react-router-native';

/* eslint-disable-next-line */
export interface SignInProps {}

export function SignIn(props: SignInProps) {
  return (
    <SafeAreaView>
      <Text>Welcome to SignIn!</Text>
      <Link to="/"><Text>Back</Text></Link>
    </SafeAreaView>
  );
}

export default SignIn;
