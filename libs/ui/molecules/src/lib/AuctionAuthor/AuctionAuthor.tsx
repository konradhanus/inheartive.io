import React from 'react';
import { Avatar, Text, AvatarSourcePropType, Row } from '@inheartive/ui/atoms';
import { User } from '@inheartive/data';
import { ColorType } from 'native-base/lib/typescript/components/types';
import { ILinearGradientProps } from 'native-base/src/components/primitives/Box/types';

interface IAuctionAuthorProps {
  authorName: string;
  authorInitials: string;
  avatarSrc?: string | undefined;
  avatarBgColor?: ColorType | ILinearGradientProps;
}

function AuctionAuthor(props: IAuctionAuthorProps) {
  const { authorName, authorInitials, avatarSrc, avatarBgColor } = props;
  const source: AvatarSourcePropType = {
    uri: avatarSrc,
  };

  return (
    <Row space={2} alignItems='center'>
      <Avatar bg={avatarBgColor} size={'sm'} source={source} ml={1}>
        {authorInitials}
      </Avatar>
      <Text>{authorName}</Text>
    </Row>
  );
}

export { AuctionAuthor };
