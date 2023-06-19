import React from 'react';
import { AuctionCreateTemplate } from './AuctionCreateTemplate';
import { useForm } from 'react-hook-form';
import { AuctionFormValues } from './auction-create-form-values';
import { useMutation, useQuery } from '@tanstack/react-query';
import { apiRoutes } from '../../libs/data';
import { useNavigate } from 'react-router-native';
import { RoutingPath } from '../../routing';
import { useUser } from '../Providers/UserProvider';
import { theme } from '../../libs/ui/theme/src/theme';
import { Toast } from '../../libs/ui/atoms/src/Toast';

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
        onSuccess: () => {
            <Toast bg={theme.colors.primary[500]}
                title='Auction added successfully!'
            />
            navigate(RoutingPath.auctions);
        },
        onError: () => {
            <Toast bg={theme.colors.errors.bgToast}
                title='An error occured!'
            />
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
