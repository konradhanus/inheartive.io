import React from 'react';
import { View } from '@inheartive/ui/atoms';
import { IAuction } from '@inheartive/data';
import { AuctionCard } from '../AuctionCard';

interface Props {
  auctions: IAuction[];
  linkPatternWithId: string;
  favoriteAuctionsIds: string[];
  onFavoriteChange: (auctionId: string, isCurrentlyFavorite: boolean) => void;
}

function AuctionsList(props: Props) {
  const { auctions, linkPatternWithId, favoriteAuctionsIds, onFavoriteChange } = props;

  return (
    <View>
      {auctions.map((auction) => (
        <View key={auction.id} mt={5}>
          <AuctionCard
            auction={auction}
            linkPatternWithId={linkPatternWithId}
            isFavorite={favoriteAuctionsIds.includes(auction.id)}
            onFavoriteChange={onFavoriteChange}
          />
        </View>
      ))}
    </View>
  );
}

export { AuctionsList };
