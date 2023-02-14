import React, { useState } from 'react';
import { Auction } from '@inheartive/data';
import { AuctionImage, ScrollView, imageTypes } from '@inheartive/ui/atoms';
import { Button, Text, View, Input } from '@inheartive/ui/atoms';

import { AuctionHeader } from '@inheartive/ui/organisms';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuctionAuthor, AuctionLeftHearts, AuctionTime, AuctionBid } from '@inheartive/ui/molecules';
import { theme } from '@inheartive/ui/theme';

interface Props {
  auction: Auction | undefined;
  isLoading: boolean;
  isError: boolean;
}

export function AuctionTemplate(props: Props) {
  const { auction, isLoading, isError } = props;
  const insets = useSafeAreaInsets();
  const [bid, setBid] = useState(0);

  const parseBid = (value: string) => {
    const parsed = parseInt(value);
    const finalBid = Number.isNaN(parsed) ? 0 : parsed;
    setBid(finalBid);
  };

  if (!auction) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <AuctionHeader />
      <AuctionImage imageType={imageTypes.detail} />
      <View my={5} mx={2} px={3} paddingTop={insets.top} paddingBottom={insets.bottom}>
        {isLoading && <Text>Loading...</Text>}
        {!isLoading && !auction && <Text>Error while loading auction</Text>}
        {!isLoading && !isError && auction && (
          <>
            <Text fontSize='lg' my={3}>
              {auction.title}
            </Text>
            <Text fontSize='sm' my={3}>
              {auction.description ?? ''}
            </Text>
          </>
        )}
        <AuctionAuthor
          authorInitials={auction.author.initials}
          avatarSrc={auction.author.avatarSrc}
          authorFirstName={auction.author.firstName}
          authorLastName={auction.author.lastName}
          avatarBgColor={theme.colors.primary[500]}
        />
        <AuctionLeftHearts quantity={auction.price} authorName={auction.author.firstName} />
        <AuctionTime expirationDate={auction.expiresAt} />
        <AuctionBid currentBid={42} />
      </View>
      <View mx={16}>
        <Input placeholder='10' onChangeText={parseBid} value={`${bid}`} keyboardType='numeric' />
        <Button>BID</Button>
        <Button variant='lighGray'>REPORT</Button>
      </View>
    </ScrollView>
  );
}

export default AuctionTemplate;
