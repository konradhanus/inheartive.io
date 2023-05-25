import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Auction, routeWithId } from '@inheartive-data';
import { ScrollView, View, Text, Loader } from '@inheartive-atoms';
import { useUser } from '../Providers/UserProvider';
import { AuctionRow } from './AuctionRow';

interface MyAuctionsProps {
    url: string;
    label: string;
}
interface MyAuctionsListProps {
    url: string;
    userId: string;
}

const MyAuctionsList = ({ userId, url }: MyAuctionsListProps) => {
    const { isLoading, data: auctions = [] } = useQuery<Auction[]>({
        queryKey: ['auction', userId],
        queryFn: () =>
            fetch(routeWithId(url, userId)).then((res) => res.json()),
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <ScrollView>
            <View>
                {auctions.map((auction) => (
                    <View key={auction.id} mt={5}>
                        <AuctionRow auction={auction} />
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export function MyAuctions({ url, label }: MyAuctionsProps) {
    const { user } = useUser();

    return (
        <ScrollView>
            <Text>{label}:</Text>
            <View>
                {user?.id && <MyAuctionsList userId={user.id} url={url} />}
            </View>
        </ScrollView>
    );
}

export default MyAuctions;
