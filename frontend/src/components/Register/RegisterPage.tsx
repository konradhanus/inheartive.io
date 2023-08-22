import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-native';

import { useMutation } from '@tanstack/react-query';
import { RegisterFormValues } from './register-form-values';
import { apiRoutes } from '../../libs/data';
import RegisterTemplate from './RegisterTemplate';
import { RoutingPath } from '../../routing';
import { HttpMethods, fetchData } from '../../libs/ui/shared';

export function RegisterPage() {
  const formMethods = useForm<RegisterFormValues>({ mode: 'onChange' });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: RegisterFormValues) => {
      return fetchData(apiRoutes.users, HttpMethods.POST, data);
    },
    onSuccess: (response) => {
      if (response.ok) {
        navigate(RoutingPath.signIn);
      } else {
        // TODO handle error, for example when email is not unique
        console.log(response);
      }
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
