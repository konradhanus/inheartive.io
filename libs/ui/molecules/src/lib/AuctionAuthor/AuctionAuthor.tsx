import React from 'react';
import { Avatar, Text, AvatarSourcePropType, Row } from '@inheartive/ui/atoms';
import { User } from '@inheartive/data';

interface Props {
  author: User;
}

function AuctionAuthor(props: Props) {
  const { author } = props;
  const source: AvatarSourcePropType = {
    uri: author.avatarSrc,
  };

  return (
    <Row space={2} alignItems='center'>
      <Avatar size={'sm'} source={source}>
        {author.initials}
      </Avatar>
      <Text>
        {author.firstName} {author.lastName}
      </Text>
    </Row>
  );
}

export { AuctionAuthor };
