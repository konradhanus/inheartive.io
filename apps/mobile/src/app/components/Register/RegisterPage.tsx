import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';
import { RegisterFormValues } from './register-form-values';
import { apiRoutes } from '@inheartive/data';
import RegisterTemplate from './RegisterTemplate';

export function RegisterPage() {
  const formMethods = useForm<RegisterFormValues>();
  const mutation = useMutation({
    mutationFn: (data: RegisterFormValues) => {
      data.email = data.email.toLowerCase();
      return fetch(apiRoutes.users, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    },
  });

  const onSubmit = (data: RegisterFormValues) => mutation.mutate(data);

  return (
    <FormProvider {...formMethods}>
      <RegisterTemplate onSubmit={onSubmit} />
    </FormProvider>
  );
}

export default RegisterPage;
