/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { Icon, IconType, Row } from '@inheartive/ui/atoms';
import TextStyled from './TextStyled';
import { colors } from '@inheartive/ui/theme';
interface IAuctionHeartsProps {
  quantity: number;
  testID?: string | undefined;
}

function AuctionHearts(props: IAuctionHeartsProps) {
  const { quantity, testID } = props;

  return (
    <Row space={2} alignItems='center'>
      <Icon name={IconType.favoriteOutline} size={35} color={colors.secondary[600]} />
      <TextStyled fontSize='xl' testID={testID}>
        {quantity}
      </TextStyled>
    </Row>
  );
}

export { AuctionHearts };
