import React from 'react';
import { Icon, IconType, Row, Text } from '@inheartive/ui/atoms';

interface IAuctionHeartsProps {
  quantity: number;
  authorName?: string;
}

function AuctionLeftHearts(props: IAuctionHeartsProps) {
  const { quantity, authorName } = props;

  return (
    <Row space={1.5} alignItems='center'>
      <Icon name={IconType.favoriteOutline} size={40} />
      <Text>
        {quantity} {authorName}
      </Text>
    </Row>
  );
}

export { AuctionLeftHearts };
