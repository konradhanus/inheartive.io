import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { apiRoutes, Auction, routeWithId } from '@inheartive/data';
import { ScrollView, View, Text, Loader } from '@inheartive/ui/atoms';
import { useUser } from '../Providers/UserProvider';

interface MyAuctionsListProps {
  userId: string;
}

const MyAuctionsList = ({ userId }: MyAuctionsListProps) => {
  const { isLoading, data: auctions = [] } = useQuery<Auction[]>({
    queryKey: ['auction', userId],
    queryFn: () => fetch(routeWithId(apiRoutes.myAuctions, userId)).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScrollView>
      <View>
        {auctions.map((auction) => (
          <Text key={auction.id}>{auction.title}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export function MyAuctions() {
  const { user } = useUser();

  return (
    <ScrollView>
      <Text>My auctions:</Text>
      <View>{user?.id && <MyAuctionsList userId={user.id} />}</View>
    </ScrollView>
  );
}

export default MyAuctions;
