import React from 'react';
import { Input } from '@inheartive/ui/atoms';
import { Controller, useFormContext } from 'react-hook-form';

interface WithEmail {
  email: string;
}

const EMAIL_RULES = {
  required: 'Email name is required',
  minLength: 2,
  pattern: {
    value: /.*@intive\.com$/,
    message: 'Only intive email is allowed',
  },
};

interface EmailInputProps {
  placeholder: string;
}

export function EmailInput({ placeholder }: EmailInputProps) {
  const { control } = useFormContext<WithEmail>();

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input onBlur={onBlur} placeholder={placeholder} onChangeText={onChange} value={value} />
      )}
      name={'email'}
      rules={EMAIL_RULES}
      defaultValue={''}
    />
  );
}
