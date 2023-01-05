import React from 'react';
import { Auction } from '@inheartive/data';
import { Text, View } from '@inheartive/ui/atoms';
import { ScrollView } from 'native-base';

interface Props {
  auction: Auction | undefined;
  isLoading: boolean;
  isError: boolean;
}

export function AuctionTemplate(props: Props) {
  const { auction, isLoading, isError } = props;

  return (
    <ScrollView>
      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>Error...</Text>}
      {!isLoading && !isError && auction && (
        <View>
          <Text>
            {auction.author.firstName} {auction.author.lastName}
          </Text>
          <Text>{auction.title}</Text>
          <Text>{auction.description ?? ''}</Text>
          <Text>{auction.category.name}</Text>
          <Text>{auction.price}</Text>
          <Text>{auction.expiresAt}</Text>
          <Text>{auction.createdAt}</Text>
        </View>
      )}
    </ScrollView>
  );
}

export default AuctionTemplate;
