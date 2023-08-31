import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ImageBackground } from '../ImageBackground';
import { NativeBaseProvider } from 'native-base';
import { Text, View } from '../../..';
import { placeholder } from '../../../../../../assets';

storiesOf('ImageBackground', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => (
    <ImageBackground style={{ height: 150 }} source={placeholder}>
      <View alignItems={'center'} height={'100%'} mt={5}>
        <Text color={'white'}>Some text inside</Text>
      </View>
    </ImageBackground>
  ));
