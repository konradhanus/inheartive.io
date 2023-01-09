import React from 'react';
import { Icon, IconType, Row, Text } from '@inheartive/ui/atoms';

interface Props {
  quantity: number;
}

function AuctionHearts(props: Props) {
  const { quantity } = props;

  return (
    <Row space={1.5} alignItems='center'>
      <Text>{quantity}</Text>
      <Icon name={IconType.favoriteOutline} size={30} />
    </Row>
  );
}

export { AuctionHearts };
