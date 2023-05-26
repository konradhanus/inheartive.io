import React from 'react';
import { View, Text } from '../../../atoms';
import { Auction } from '../../../../data';
import { AuctionCard } from '../AuctionCard';

interface Props {
    auctions: Auction[];
    linkPatternWithId: string;
    favoriteAuctionsIds: string[];
    onFavoriteChange: (auctionId: string, isCurrentlyFavorite: boolean) => void;
}

function AuctionsList(props: Props) {
    const {
        auctions,
        linkPatternWithId,
        favoriteAuctionsIds,
        onFavoriteChange,
    } = props;
    const currentDate = new Date();

    return (
        <View>
            {auctions.length === 0 && (
                <Text px={5} mt={5}>
                    There are no autions matching given filters
                </Text>
            )}
            {auctions.map((auction) => {
                if (new Date(auction.expiresAt) > currentDate)
                    return (
                        <View key={auction.id} mt={5}>
                            <AuctionCard
                                auction={auction}
                                linkPatternWithId={linkPatternWithId}
                                isFavorite={favoriteAuctionsIds.includes(
                                    auction.id
                                )}
                                onFavoriteChange={onFavoriteChange}
                            />
                        </View>
                    );
            })}
        </View>
    );
}

export { AuctionsList };
