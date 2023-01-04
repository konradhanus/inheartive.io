import React from 'react';
import { Button, View } from '@inheartive/ui/atoms';
import { FormControl, Input, VStack } from 'native-base';
import { UseFormRegister, UseFormHandleSubmit, FieldErrors, Controller, Control } from 'react-hook-form';
import { RegisterFormValues } from './register-form-values';
import { RoutingPath } from '../../routing';
import { useNavigate } from 'react-router-native';
import { ScrollView } from 'native-base';

interface Props {
  control: Control<RegisterFormValues>;
  register: UseFormRegister<RegisterFormValues>;
  handleSubmit: UseFormHandleSubmit<RegisterFormValues>;
  errors: FieldErrors<RegisterFormValues>;
  onSubmit: (data) => void;
}

export function RegisterTemplate(props: Props) {
  const { control, handleSubmit, errors, onSubmit } = props;

  const navigate = useNavigate();

  return (
    <ScrollView>
      <VStack px={5} space={3} justifyContent='center'>
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
            rules={{ required: 'Email name is required', minLength: 2 }}
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
            rules={{ required: 'First name is required', minLength: 2 }}
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
            rules={{ required: 'Last name is required', minLength: 2 }}
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
            rules={{ required: 'Password is required', minLength: { value: 8, message: 'Min 8!' } }}
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
      </VStack>
    </ScrollView>
  );
}

export default RegisterTemplate;
