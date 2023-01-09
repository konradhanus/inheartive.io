import React from 'react';
import { Image } from '@inheartive/ui/atoms';
import { IAuction } from '@inheartive/data';
import { Button, Text, View } from '@inheartive/ui/atoms';
import { AuctionHeader } from '@inheartive/ui/organisms';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { timeOutline } from '@inheartive/assets';

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
        <Image my='2' source={timeOutline} alt='Time outline image' />
      </View>
      <View mx={16}>
        <Button onPress={() => console.log('BID onPress')}>BID</Button>
        <Button onPress={() => console.log('REPORT onPress')} variant='lighGray'>
          REPORT
        </Button>
      </View>
    </>
  );
}

export default AuctionTemplate;
