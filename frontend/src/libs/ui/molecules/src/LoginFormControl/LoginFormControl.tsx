import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm, FormProvider } from 'react-hook-form';

import { Button, FormControl, View, Text, Box } from '../../../atoms';
import { apiRoutes } from '../../../../data';
import { useNavigate } from 'react-router-native';
import { EmailInput, PasswordInput } from '../../../organisms';
import { useUser } from '../../../../../components/Providers/UserProvider';
import { RoutingPath } from '../../../../../routing/routing-path';
import { HttpMethods, fetchData, setValue } from '../../../shared/utils';
import { useMsal } from '@azure/msal-react';
import { EventType } from "@azure/msal-browser";
import Toast from 'react-native-toast-message';
import { openAuthSession } from 'azure-ad-graph-expo';

const setAccessToken = async (access_token: string) => {
    await setValue('access_token', access_token);
};

interface LoginFormData {
    email: string;
    password: string;
}

function LoginFormControl() {
    const { setUser } = useUser();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(false);

    const formMethods = useForm<LoginFormData>({ mode: 'onChange' });
    const {
        getValues,
        formState: { errors, isValid },
        handleSubmit,
    } = formMethods;

    const { mutateAsync } = useMutation({
        mutationFn: async (data: LoginFormData) => {
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

interface SsoLoginPayload {
    username: string,
    name: string,
}

function SsoLoginBtnControl() {
    const { setUser } = useUser();
    const navigate = useNavigate();
    const { instance } = useMsal();
    const [loginError, setLoginError] = useState(false);

    const ssoLoginCallMutation = useMutation({
        mutationFn: async (payload: SsoLoginPayload) => {
            return fetchData(apiRoutes.loginSso, HttpMethods.POST, payload);
        },
        onSuccess: (response) => {
            response
                .json()
                .then((user) => {
                    if (user) {
                        setUser(user);
                        navigate(RoutingPath.auctions);
                    } else {
                        Toast.show({
                            type: 'error',
                            text1: 'Login Error',
                            text2: 'Error while logging in'
                        });
                    }
                })
                .catch(() => {
                    setLoginError(true);
                    Toast.show({
                        type: 'error',
                        text1: 'Login Error',
                        text2: 'Error when getting data. Try again!'
                    });
                });
        },
    });

    useEffect(() => {
        const callbackId = instance.addEventCallback((message: { eventType: EventType; payload: any; }) => {
            const eventType = message.eventType;
            if (eventType === EventType.LOGIN_SUCCESS || eventType === EventType.ACQUIRE_TOKEN_SUCCESS) {
                const payload = message.payload;
                const account = payload.account;

                if (account) {
                    if (!account.name) {
                        setLoginError(true);
                        Toast.show({
                            type: 'error',
                            text1: 'Login Error',
                            text2: 'Name and surname shouldn\'t be empty, fill it in MS account'
                        });
                    }

                    const accessToken = payload.accessToken;
                    setAccessToken(accessToken);
                    ssoLoginCallMutation.mutate({
                        username: account.username,
                        name: account.name!!
                    });
                } else {
                    Toast.show({
                        type: 'error',
                        text1: 'Login Error',
                        text2: 'There is no account associated with provided email'
                    });
                }
            }
        });

        return () => {
            if (callbackId) {
                instance.removeEventCallback(callbackId);
            }
        }
    }, []);

    return (
        <>
            <Button onPress={() => {
                setLoginError(false);
                instance.loginPopup();
            }} mt='4'>
                SSO Login
            </Button>
            {loginError && <Text style={{ textAlign: 'center' }}>SSO login error</Text>}
        </>
    );
}

function MObileSsoLoginButtonControl() { 
    const [resultData, setResultData] = useState({});

  const _handlePressAsync = async () => {
    let result = await openAuthSession(azureAdAppProps);
    setResultData({ result });
  }

    const azureAdAppProps = {
        clientId        :   AZURE_CLIENT_ID,
        tenantId        :   AZURE_TENANT_ID,
        scope           :   'user.read',
        redirectUrl     :   AuthSession.makeRedirectUri(),
        returnUrl       :   null, // If left as 'null', redirectUrl will be used instead
        clientSecret    :   AZURE_CLIENT_SECRET,
        domainHint      :   AZURE_DOMAIN_HINT,
        prompt          :   'login'
};

    <Button onPress={() => {
        
        _handlePressAsync();
    }} mt='4'>
        SSO Login
    </Button>
    {resultData ? (
        <Text>{JSON.stringify(resultData)}</Text>
      ) : 
        <Text>Nothing to see here.</Text>}
}

export { LoginFormControl, SsoLoginBtnControl, MObileSsoLoginButtonControl };
