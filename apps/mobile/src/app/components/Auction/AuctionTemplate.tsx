import React from 'react';
import { IAuction } from '@inheartive/data';
import { Text, View } from '@inheartive/ui/atoms';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'react-router-native';

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
    <View mt={10} px={8} paddingTop={insets.top} paddingBottom={insets.bottom}>
      <View mb={5}>
        <Link to='/'>
          <Text>Auctions</Text>
        </Link>
      </View>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && !auction && <Text>Error while loading auction</Text>}
      {!isLoading && auction && <Text>{auction.title}</Text>}
    </View>
  );
}

export default AuctionTemplate;
