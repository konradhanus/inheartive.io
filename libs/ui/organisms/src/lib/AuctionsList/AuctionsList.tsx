import React from 'react';
import { View } from '@inheartive/ui/atoms';
import { IAuction } from '@inheartive/data';
import { AuctionCard } from '../AuctionCard';

interface Props {
  auctions: IAuction[];
  linkPatternWithId: string;
}

function AuctionsList(props: Props) {
  const { auctions, linkPatternWithId } = props;

  return (
    <View>
      {auctions.map((auction) => (
        <View key={auction.id} mt={5}>
          <AuctionCard auction={auction} linkPatternWithId={linkPatternWithId} />
        </View>
      ))}
    </View>
  );
}

export { AuctionsList };
