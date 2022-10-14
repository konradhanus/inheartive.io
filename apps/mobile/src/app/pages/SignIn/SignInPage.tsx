import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import { Link } from 'react-router-native';
import SignInTemplate from './SignInTemplate';

export function SignInPage() {
  return (
    <>
      <SafeAreaView>
        <Text>Welcome to SignIn!</Text>
        <Link to='/'>
          <Text>Back</Text>
        </Link>
      </SafeAreaView>
      <SignInTemplate />
    </>
  );
}

export default SignInPage;
