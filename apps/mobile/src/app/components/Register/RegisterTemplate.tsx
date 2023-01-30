import React from 'react';
import { FormControl, Input, Button, ScrollView, Column } from '@inheartive/ui/atoms';
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  Controller,
  Control,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { RegisterFormValues } from './register-form-values';
import { RoutingPath } from '../../routing';
import { useNavigate } from 'react-router-native';

interface Props<T extends FieldValues> {
  control: Control<T>;
  register: UseFormRegister<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  errors: FieldErrors<T>;
  onSubmit: (data: T) => void;
}
type FormRulesStrategy = {
  [Prop in keyof RegisterFormValues]: UseControllerProps['rules'];
};

const FORM_RULES_STRATEGY = {
  email: {
    required: 'Email name is required',
    minLength: 2,
    pattern: {
      value: /.*@intive.com$/,
      message: 'Only intive email is allowed',
    },
  },
  firstName: { required: 'First name is required', minLength: 2 },
  lastName: { required: 'Last name is required', minLength: 2 },
  password: { required: 'Password is required', minLength: { value: 8, message: 'Min 8!' } },
} as const satisfies FormRulesStrategy;

export function RegisterTemplate(props: Props<RegisterFormValues>) {
  const { control, handleSubmit, errors, onSubmit } = props;

  const navigate = useNavigate();

  return (
    <ScrollView>
      <Column px={5} space={3} justifyContent='center'>
        <FormControl isRequired isInvalid={'email' in errors}>
          <FormControl.Label>Email</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                placeholder='john.doe@example.com'
                onChangeText={(val) => onChange(val)}
                value={value}
              />
            )}
            name='email'
            rules={FORM_RULES_STRATEGY.email}
            defaultValue=''
          />
          <FormControl.ErrorMessage>{errors.email?.message}</FormControl.ErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={'firstName' in errors}>
          <FormControl.Label>First name</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onBlur={onBlur} placeholder='John' onChangeText={(val) => onChange(val)} value={value} />
            )}
            name='firstName'
            rules={FORM_RULES_STRATEGY.firstName}
            defaultValue=''
          />
          <FormControl.ErrorMessage>{errors.firstName?.message}</FormControl.ErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={'lastName' in errors}>
          <FormControl.Label>Last name</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onBlur={onBlur} placeholder='Doe' onChangeText={(val) => onChange(val)} value={value} />
            )}
            name='lastName'
            rules={FORM_RULES_STRATEGY.lastName}
            defaultValue=''
          />
          <FormControl.ErrorMessage>{errors.lastName?.message}</FormControl.ErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={'password' in errors}>
          <FormControl.Label>Password</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input type='password' onBlur={onBlur} onChangeText={(val) => onChange(val)} value={value} />
            )}
            name='password'
            rules={FORM_RULES_STRATEGY.password}
          />
          <FormControl.ErrorMessage>{errors.password?.message}</FormControl.ErrorMessage>
        </FormControl>

        <Button
          onPress={(e) => {
            handleSubmit(onSubmit)(e);
          }}
        >
          Register
        </Button>

        <Button variant='outline' onPress={() => navigate(RoutingPath.signIn)}>
          Sign in
        </Button>
      </Column>
    </ScrollView>
  );
}

export default RegisterTemplate;
