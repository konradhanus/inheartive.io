import React from 'react';
import { Icon, IconType, Row, Text } from '@inheartive/ui/atoms';
interface IAuctionHeartsProps {
  quantity: number;
}

function AuctionHearts(props: IAuctionHeartsProps) {
  const { quantity } = props;

  return (
    <Row space={2} alignItems='center'>
      <Icon name={IconType.favoriteOutline} size={30} />
      <Text>{quantity}</Text>
    </Row>
  );
}

export { AuctionHearts };
