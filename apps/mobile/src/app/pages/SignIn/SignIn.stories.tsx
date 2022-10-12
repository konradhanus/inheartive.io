import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { SignIn } from './SignIn';

const props = {};

storiesOf('SignIn', module).add('Primary', () => <SignIn {...props} />);
