import React from 'react';
import { Avatar, Text, AvatarSourcePropType, Row } from '@inheartive/ui/atoms';
import { IUser } from '@inheartive/data';

interface IAuctionAuthorProps {
  author: IUser;
}

function AuctionAuthor(props: IAuctionAuthorProps) {
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
