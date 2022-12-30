import React from 'react';

import { Avatar, Text, AvatarSourcePropType, Row } from '@inheartive/ui/atoms';

interface IAuctionAuthorProps {
  authorName: string;
  authorInitials: string;
  avatarSrc?: string | undefined;
}

function AuctionAuthor(props: IAuctionAuthorProps) {
  const { authorName, authorInitials, avatarSrc } = props;
  const source: AvatarSourcePropType = {
    uri: avatarSrc,
  };

  return (
    <Row space={2} alignItems='center'>
      <Avatar size={'sm'} source={source}>
        {authorInitials}
      </Avatar>
      <Text>{authorName}</Text>
    </Row>
  );
}

export { AuctionAuthor };
