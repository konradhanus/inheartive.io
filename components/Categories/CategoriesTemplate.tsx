import React from 'react';
import {
    Button,
    Column,
    FormControl,
    Input,
    ScrollView,
    View,
    Text,
} from '@inheartive-atoms';
import {
    UseFormRegister,
    UseFormHandleSubmit,
    FieldErrors,
    Controller,
    Control,
} from 'react-hook-form';
import { CategoryCreateFormValues } from './category-create-form-values';
import { Category } from '@inheartive-data';

interface Props {
    control: Control<CategoryCreateFormValues>;
    register: UseFormRegister<CategoryCreateFormValues>;
    handleSubmit: UseFormHandleSubmit<CategoryCreateFormValues>;
    errors: FieldErrors<CategoryCreateFormValues>;
    onSubmit: (data) => void;
    categories: Category[];
    categoriesIsLoading: boolean;
    categoriesIsError: boolean;
}

export function CategoriesTemplate(props: Props) {
    const {
        categories,
        categoriesIsError,
        categoriesIsLoading,
        control,
        handleSubmit,
        errors,
        onSubmit,
    } = props;

    return (
        <ScrollView>
            <Column px={5} space={4} justifyContent='center'>
                <FormControl isRequired isInvalid={'name' in errors}>
                    <FormControl.Label>Name</FormControl.Label>
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder='Add category'
                                onChangeText={(val) => onChange(val)}
                                value={value}
                            />
                        )}
                        name='name'
                        rules={{
                            required: 'Name is required',
                            minLength: {
                                value: 2,
                                message: 'Minimum length is 2',
                            },
                        }}
                    />
                    <FormControl.ErrorMessage>
                        {errors.name?.message}
                    </FormControl.ErrorMessage>
                </FormControl>

                <Button
                    onPress={(e) => {
                        handleSubmit(onSubmit)(e);
                    }}
                >
                    Add category
                </Button>

                {categoriesIsLoading && <Text>Categories loading...</Text>}

                {categoriesIsError && (
                    <Text>Error while loading categories!</Text>
                )}

                {!categoriesIsError && !categoriesIsLoading && categories && (
                    <View>
                        <Text>Current categories:</Text>

                        {categories.map((c) => (
                            <Text key={c.id}>{c.name}</Text>
                        ))}
                    </View>
                )}
            </Column>
        </ScrollView>
    );
}

export default CategoriesTemplate;
