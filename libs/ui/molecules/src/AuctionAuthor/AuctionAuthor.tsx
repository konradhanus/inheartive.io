import React from 'react';

import { Avatar, Text, AvatarSourcePropType, Row } from '@inheartive-atoms';
import { ColorType } from 'native-base/lib/typescript/components/types';
import { ILinearGradientProps } from 'native-base/src/components/primitives/Box/types';

interface IAuctionAuthorProps {
    authorFirstName: string;
    authorLastName: string;
    authorInitials: string;
    avatarSrc?: string | undefined;
    avatarBgColor?: ColorType | ILinearGradientProps;
}

function AuctionAuthor(props: IAuctionAuthorProps) {
    const {
        authorFirstName,
        authorLastName,
        authorInitials,
        avatarSrc,
        avatarBgColor,
    } = props;
    const source: AvatarSourcePropType = {
        uri: avatarSrc,
    };

    return (
        <Row space={2} alignItems='center'>
            <Avatar bg={avatarBgColor} size={'sm'} source={source} ml={1}>
                {authorInitials}
            </Avatar>
            <Text>
                {authorFirstName} {authorLastName}
            </Text>
        </Row>
    );
}

export { AuctionAuthor };
