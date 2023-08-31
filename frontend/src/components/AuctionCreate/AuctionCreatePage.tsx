import React from 'react';
import { AuctionCreateTemplate } from './AuctionCreateTemplate';
import { useForm } from 'react-hook-form';
import { AuctionFormValues } from './auction-create-form-values';
import { useMutation, useQuery } from '@tanstack/react-query';
import { apiRoutes } from '../../libs/data';
import { useNavigate } from 'react-router-native';
import { RoutingPath } from '../../routing';
import { useUser } from '../Providers/UserProvider';
import { HttpMethods, fetchData } from '../../libs/ui/shared';
import Toast from 'react-native-toast-message';

interface PayloadWithAuthor extends AuctionFormValues {
  author: string;
}

export function AuctionCreatePage() {
  const { user } = useUser();
  const navigate = useNavigate();
  const {
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
    data: categories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetch(apiRoutes.categories).then((res) => res.json()),
  });

  const mutation = useMutation({
    mutationFn: (data: PayloadWithAuthor) => {
      return fetchData(apiRoutes.auctions, HttpMethods.POST, data);
    },
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Auction',
        text2: 'Auction added successfully',
      });
      navigate(RoutingPath.auctions);
    },
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Auction fail',
        text2: 'Something went wrong while adding auction',
      });
    },
  });

  const form = useForm<AuctionFormValues>({ mode: 'onChange' });

  const onSubmit = (data: AuctionFormValues) => {
    // todo change expiresAt to end of the day? (time)

    if (user) {
      const withAuthor: PayloadWithAuthor = {
        ...data,
        author: user.id,
      };

      mutation.mutate(withAuthor);
    }
  };

  return (
    user && (
      <AuctionCreateTemplate
        form={form}
        onSubmit={onSubmit}
        categories={categories}
        categoriesIsLoading={categoriesIsLoading}
        categoriesIsError={categoriesIsError}
        author={user}
      />
    )
  );
}

export default AuctionCreatePage;
