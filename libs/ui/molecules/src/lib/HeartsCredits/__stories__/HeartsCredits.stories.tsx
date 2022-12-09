import React from 'react';
import { Column, NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { HeartsCredits } from '../HeartsCredits';

storiesOf('HeartsCredits', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => (
    <Column space={4} mt={4} mx='auto'>
      <HeartsCredits credit={9999} size={80} />
      <HeartsCredits credit={545} size={80} />
      <HeartsCredits credit={10} size={80} />
      <HeartsCredits credit={0} size={80} />
    </Column>
  ));
