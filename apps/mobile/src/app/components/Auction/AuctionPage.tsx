import React from 'react';
import AuctionTemplate from './AuctionTemplate';
import { useParams } from 'react-router-native';
import { useQuery } from '@tanstack/react-query';
import { apiRoutes, routeWithId } from '@inheartive/data';
import { ScrollView } from '@inheartive/ui/atoms';
import { Text } from '@inheartive/ui/atoms';

export function AuctionPage() {
  const params = useParams();
  const { id } = params;
  const {
    isLoading,
    error,
    data: auctions = [],
  } = useQuery({
    queryKey: ['auction', id],
    queryFn: () => (id ? fetch(routeWithId(apiRoutes.auction, id)).then((res) => res.json()) : []),
  });

  if (auctions.length === 0) {
    return (
      <ScrollView>
        <Text>Something went wrong</Text>
      </ScrollView>
    );
  }

  const auctionById = auctions[0];

  return <AuctionTemplate isLoading={isLoading} isError={!!error} auction={auctionById} />;
}

export default AuctionPage;
