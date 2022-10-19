import React from 'react';

import { Avatar, Text, AvatarSourcePropType, Row } from '@inheartive/ui/atoms';

interface IAuctionAuthorProps {
  authorName: string;
  authorInitials: string;
  avatarSrc?: AvatarSourcePropType;
}

function AuctionAuthor(props: IAuctionAuthorProps) {
  const { authorName, authorInitials, avatarSrc } = props;

  return (
    <Row space={3} alignItems='center'>
      <Avatar size={'sm'} source={avatarSrc}>
        {authorInitials}
      </Avatar>
      <Text>{authorName}</Text>
    </Row>
  );
}

export { AuctionAuthor };
