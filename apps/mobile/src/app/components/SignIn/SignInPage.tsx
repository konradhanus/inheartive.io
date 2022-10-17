import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import SignInTemplate from './SignInTemplate';

export function SignInPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <SignInTemplate />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignInPage;
