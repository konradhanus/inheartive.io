import React from 'react';
import { FormControl, Input, Button, ScrollView, Column } from '@inheartive/ui/atoms';
import { Controller, FieldValues, UseControllerProps, useFormContext } from 'react-hook-form';
import { RegisterFormValues } from './register-form-values';
import { RoutingPath } from '../../routing';
import { useNavigate } from 'react-router-native';
import { EmailInput, PasswordInput } from '@inheartive/ui/organisms';
import { BackHandler, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
interface Props<T extends FieldValues> {
  onSubmit: (data: T) => void;
}
type FormRulesStrategy = {
  [Prop in keyof RegisterFormValues]: UseControllerProps['rules'];
};

const FORM_RULES_STRATEGY = {
  firstName: { required: 'First name is required', minLength: 2 },
  lastName: { required: 'Last name is required', minLength: 2 },
};

export function RegisterTemplate(props: Props<RegisterFormValues>) {
  const { onSubmit } = props;
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<RegisterFormValues>();

  const navigate = useNavigate();

  const isDisabled = !isValid;

  React.useEffect(() => {
    const backAction = () => {
      navigate(RoutingPath.signIn);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);
  return (
    <SafeAreaView style={styles.conatainer}>
      <ScrollView>
        <Column px={5} space={3} justifyContent='center' marginTop={10}>
          <FormControl isRequired isInvalid={'email' in errors}>
            <FormControl.Label>Email</FormControl.Label>
            <EmailInput placeholder={'john.doe@example.com'} />
            <FormControl.ErrorMessage>{errors.email?.message}</FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={'firstName' in errors}>
            <FormControl.Label>First name</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input onBlur={onBlur} placeholder='John' onChangeText={(val) => onChange(val)} value={value} />
              )}
              name='firstName'
              rules={FORM_RULES_STRATEGY.firstName}
              defaultValue=''
            />
            <FormControl.ErrorMessage>{errors.firstName?.message}</FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={'lastName' in errors}>
            <FormControl.Label>Last name</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input onBlur={onBlur} placeholder='Doe' onChangeText={(val) => onChange(val)} value={value} />
              )}
              name='lastName'
              rules={FORM_RULES_STRATEGY.lastName}
              defaultValue=''
            />
            <FormControl.ErrorMessage>{errors.lastName?.message}</FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={'password' in errors}>
            <FormControl.Label>Password</FormControl.Label>
            <PasswordInput placeholder='password' />
            <FormControl.ErrorMessage>{errors.password?.message}</FormControl.ErrorMessage>
          </FormControl>

          <Button
            disabled={isDisabled}
            isDisabled={isDisabled}
            onPress={(e) => {
              handleSubmit(onSubmit)(e);
            }}
          >
            Register
          </Button>

          <Button variant='outline' onPress={() => navigate(RoutingPath.signIn)}>
            Sign in
          </Button>
        </Column>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterTemplate;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
