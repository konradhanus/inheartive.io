//TODO - this stories is not visible in StoryBook
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { LoginFormControl, LoginFormControlProps } from './LoginFormControl';

const props: LoginFormControlProps = {};

storiesOf('LoginFormControl', module).add('Primary', () => <LoginFormControl {...props} />);
