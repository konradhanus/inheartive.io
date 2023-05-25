import React from 'react';
import { AuctionCreateTemplate } from './AuctionCreateTemplate';
import { useForm } from 'react-hook-form';
import { AuctionFormValues } from './auction-create-form-values';
import { useMutation, useQuery } from '@tanstack/react-query';
import { apiRoutes } from '@inheartive-data';
import { useNavigate } from 'react-router-native';
import { RoutingPath } from '../../routing';
import { useUser } from '../Providers/UserProvider';

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
