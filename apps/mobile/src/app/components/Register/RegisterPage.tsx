import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { RegisterFormValues } from './register-form-values';
import { apiRoutes } from '@inheartive/data';
import RegisterTemplate from './RegisterTemplate';

export function RegisterPage() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  const mutation = useMutation({
    mutationFn: (data) => {
      return fetch(apiRoutes.users, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    },
  });

  return (
    <RegisterTemplate
      control={control}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
}

export default RegisterPage;