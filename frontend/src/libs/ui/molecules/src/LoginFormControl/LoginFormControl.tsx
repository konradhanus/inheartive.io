import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm, FormProvider } from 'react-hook-form';

import { Button, FormControl, View, Text } from '../../../atoms';
import { apiRoutes } from '../../../../data';
import { useNavigate } from 'react-router-native';
import { EmailInput, PasswordInput } from '../../../organisms';
import { useUser } from '../../../../../components/Providers/UserProvider';
import { RoutingPath } from '../../../../../routing/routing-path';
import { HttpMethods, fetchData, setValue } from '../../../shared/utils';

interface LoginForm {
    email: string;
    password: string;
}
function LoginFormControl() {
    const { setUser } = useUser();
    const [loginError, setLoginError] = useState(false);

    const formMethods = useForm<LoginForm>({ mode: 'onChange' });
    const {
        getValues,
        formState: { errors, isValid },
        handleSubmit,
    } = formMethods;

    const navigate = useNavigate();

    const setAccessToken = async (access_token: string) => {
        await setValue('access_token', access_token);
    };

    const { mutateAsync } = useMutation({
        mutationFn: async (data: LoginForm) => {
            return fetchData(apiRoutes.login, HttpMethods.POST, data);
        },
        onSuccess: (value) => {
            value
                .json()
                .then((data) => {
                    const { access_token = '', user = null } = data || {};
                    if (access_token) {
                        setAccessToken(access_token);
                        setUser(user);
                        navigate(RoutingPath.auctions);
                    }
                })
                .catch(() => {
                    setLoginError(true);
                });
        },
    });

    const signIn = () => {
        const { email, password } = getValues();
        setLoginError(false);
        if (isValid) {
            mutateAsync({ email, password });
        }
    };

    const isDisabled = !isValid;

    return (
        <FormProvider {...formMethods}>
            <FormControl isInvalid={'email' in errors}>
                <View>
                    <EmailInput placeholder='E-mail' />
                    <View height={6} position='relative' marginBottom={2}>
                        <FormControl.ErrorMessage>
                            {errors.email?.message}
                        </FormControl.ErrorMessage>
                    </View>
                </View>
            </FormControl>
            <FormControl isInvalid={'password' in errors}>
                <PasswordInput placeholder='Password' />
                <View height={6} position='relative' marginBottom={2}>
                    <FormControl.ErrorMessage>
                        {errors.password?.message}
                    </FormControl.ErrorMessage>
                </View>
            </FormControl>
            {loginError && <Text>User name or password are wrong</Text>}
            <Button
                mt='4'
                onPress={(e) => handleSubmit(signIn)(e)}
                disabled={isDisabled}
                isDisabled={isDisabled}
            >
                Sign in
            </Button>
        </FormProvider>
    );
}

export { LoginFormControl };
