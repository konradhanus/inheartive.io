import React from 'react';
import { Input } from '@inheartive/ui/atoms';
import { Controller, useFormContext } from 'react-hook-form';

interface WithPassword {
  password: string;
}

const PASSWORD_RULES = {
  required: 'Password is required',
  minLength: {
    value: 8,
    message: 'Min 8 characters',
  },
};

interface InputProps {
  placeholder: string;
}

export function PasswordInput({ placeholder }: InputProps) {
  const { control } = useFormContext<WithPassword>();

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input type='password' onBlur={onBlur} onChangeText={(val) => onChange(val)} value={value} />
      )}
      name='password'
      rules={PASSWORD_RULES}
    />
  );
}
