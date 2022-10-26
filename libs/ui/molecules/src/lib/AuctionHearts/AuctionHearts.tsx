/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { Image } from '@inheartive/ui/atoms';
import { auctionHeart } from '@inheartive/assets';
import { Text, Row } from '@inheartive/ui/atoms';
import styled from 'styled-components/native';

const TextStyled = styled(Text)`
  top: -2;
`;
interface IAuctionHeartsProps {
  quantity: number;
  testID?: string | undefined;
}

function AuctionHearts(props: IAuctionHeartsProps) {
  const { quantity, testID } = props;

  return (
    <Row space={2} alignItems='center'>
      <Image source={auctionHeart} alt='auction hearts' />
      <TextStyled fontSize='xl' testID={testID}>
        {quantity}
      </TextStyled>
    </Row>
  );
}

export { AuctionHearts };
