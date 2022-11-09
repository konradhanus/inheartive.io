/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { Image } from '@inheartive/ui/atoms';
import { auctionHeart } from '@inheartive/assets';
import { Text, Row } from '@inheartive/ui/atoms';
interface IAuctionHeartsProps {
  quantity: number;
}

function AuctionHearts(props: IAuctionHeartsProps) {
  const { quantity } = props;

  return (
    <Row space={2} alignItems='center'>
      <Text>{quantity}</Text>
      <Image maxHeight={'100%'} source={auctionHeart} alt='Heartcoins' />
    </Row>
  );
}

export { AuctionHearts };
