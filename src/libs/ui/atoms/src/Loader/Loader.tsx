import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import React from 'react';
import { theme } from '../../../theme';

export const Loader = (props: ActivityIndicatorProps) => (
    <ActivityIndicator
        size='large'
        color={theme.colors.primary[500]}
        {...props}
    />
);
