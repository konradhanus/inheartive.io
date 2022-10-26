/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Image } from '../Image';
import { NativeBaseProvider, View } from 'native-base';
import { Row } from '@inheartive/ui/atoms';
import { placeholder } from '@inheartive/assets';

storiesOf('Image', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => (
    <Row px={8} space={4} mt={4} flexWrap='wrap'>
      <View mt={4}>
        <Image source={placeholder} alt='Basic layout of the Image' />
      </View>
    </Row>
  ))
  .add('Url', () => (
    <Row px={8} space={4} mt={4} flexWrap='wrap'>
      <View mt={4}>
        <Image
          source={{ uri: 'https://via.placeholder.com/400x250/7dbdb7/ffffff/.png?text=Basic+layout+of+the+Image' }}
          alt='Basic layout of the Image'
          width={400}
          height={250}
          resizeMode='cover'
        />
      </View>
    </Row>
  ));
