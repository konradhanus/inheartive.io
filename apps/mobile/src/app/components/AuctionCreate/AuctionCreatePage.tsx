import React from 'react';
import { AuctionCreateTemplate } from './AuctionCreateTemplate';
import { useForm } from 'react-hook-form';
import { AuctionFormValues } from './auction-create-form-values';
import { useMutation, useQuery } from '@tanstack/react-query';
import { apiRoutes } from '@inheartive/data';
import { useNavigate } from 'react-router-native';
import { RoutingPath } from '../../routing';

export function AuctionCreatePage() {
  const navigate = useNavigate();
  const {
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
    data: categories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch(apiRoutes.categories).then((res) => res.json()),
  });

  // tmp users loading since we don't have auth user right now
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch(apiRoutes.users).then((res) => res.json()),
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      return fetch(apiRoutes.auctions, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => navigate(RoutingPath.auctions),
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AuctionFormValues>();

  const onSubmit = (data) => {
    // todo change expiresAt to end of the day? (time)

    // todo add auth user
    if (!users) {
      console.log('Users not loaded');
    } else if (!users.length) {
      console.log('Users are empty');
    } else {
      data.author = users[0].id;
      mutation.mutate(data);
    }
  };

  return (
    <AuctionCreateTemplate
      control={control}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      categories={categories}
      categoriesIsLoading={categoriesIsLoading}
      categoriesIsError={categoriesIsError}
      author={users?.length ? users[0] : undefined}
      setValue={setValue}
    />
  );
}

export default AuctionCreatePage;
