import React from 'react';
import { IAuction } from '@inheartive/data';
import { Button, Text, View } from '@inheartive/ui/atoms';
import { AuctionHeader } from '@inheartive/ui/organisms';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  auction: IAuction;
  isLoading: boolean;
}

export function AuctionTemplate(props: Props) {
  const { auction, isLoading } = props;
  const insets = useSafeAreaInsets();

  if (!auction) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <AuctionHeader />
      <View mt={10} px={8} paddingTop={insets.top} paddingBottom={insets.bottom}>
        {isLoading && <Text>Loading...</Text>}
        {!isLoading && !auction && <Text>Error while loading auction</Text>}
        {!isLoading && auction && <Text>{auction.title}</Text>}
      </View>
    </>
  );
}

export default AuctionTemplate;
