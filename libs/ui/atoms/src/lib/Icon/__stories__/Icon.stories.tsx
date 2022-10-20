import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { IconType, Icon } from '../Icon';
import { NativeBaseProvider, View } from 'native-base';
import { Row } from '@inheartive/ui/atoms';

storiesOf('Icon', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => (
    <Row px={8} space={4} mt={4} flexWrap='wrap'>
      {Object.values(IconType).map((name, index) => (
        <View mt={4} key={index}>
          <Icon name={name} />
        </View>
      ))}
    </Row>
  ));
