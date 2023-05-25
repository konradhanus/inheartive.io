import React from 'react';
import { Icon } from '@inheartive-atoms';
import { FooterIcon } from './footer-icon';

interface Props {
    name: FooterIcon;
    isActive: boolean;
    size?: number;
}

function AppFooterIcon(props: Props) {
    const { isActive, name, size } = props;

    return (
        <Icon
            name={name}
            size={size ?? 50}
            color={isActive ? 'black' : 'gray.600'}
        />
    );
}

export { AppFooterIcon };
