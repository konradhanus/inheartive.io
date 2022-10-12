import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import { Link } from 'react-router-native';
import { LoginTemplate } from '@inheartive/ui/templates';

function SignIn() {
  return (
    <>
      <SafeAreaView>
        <Text>Welcome to SignIn!</Text>
        <Link to='/'>
          <Text>Back</Text>
        </Link>
      </SafeAreaView>
      <LoginTemplate />
    </>
  );
}

export default SignIn;
