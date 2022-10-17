import React from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import SignInTemplate from './SignInTemplate';
import Icons from '@inheartive/ui/atoms';

export function SignInPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>"kjshdfkl;ajshdfk;jha;skdjf;kahjsd;adsfasdfasdfasdf"</Text>
          <Icons iconName='favorite' />
          <SignInTemplate />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignInPage;
