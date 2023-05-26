import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { CategoryCreateFormValues } from './category-create-form-values';
import CategoryCreateTemplate from './CategoriesTemplate';
import { apiRoutes } from '../../libs/data';

export function CategoriesPage() {
    const {
        isLoading: categoriesIsLoading,
        isError: categoriesIsError,
        data: categories,
        refetch,
    } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch(apiRoutes.categories).then((res) => res.json()),
    });

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<CategoryCreateFormValues>({ mode: 'onChange' });

    const onSubmit = (data) => {
        mutation.mutate(data);
    };

    const mutation = useMutation({
        mutationFn: (data) => {
            return fetch(apiRoutes.categories, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
        },
        onSuccess: () => {
            refetch();
            reset();
        },
    });

    return (
        <CategoryCreateTemplate
            control={control}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            categories={categories}
            categoriesIsLoading={categoriesIsLoading}
            categoriesIsError={categoriesIsError}
        />
    );
}

export default CategoriesPage;
