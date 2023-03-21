import React, { useState } from 'react';
import { apiRoutes, Auction, Bid } from '@inheartive/data';
import { AuctionImage, ScrollView, imageTypes, Loader } from '@inheartive/ui/atoms';
import { Button, Text, View, Input } from '@inheartive/ui/atoms';
import { useMutation, useQuery } from '@tanstack/react-query';

import { AuctionHeader } from '@inheartive/ui/organisms';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuctionAuthor, AuctionLeftHearts, AuctionTime } from '@inheartive/ui/molecules';
import { theme } from '@inheartive/ui/theme';
import { BidModal } from './BidModal';
import { safeIntParse } from 'libs/ui/shared/utils';
import { useUser } from '../Providers/UserProvider';

interface Props {
  auction: Auction;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}

interface AutionBidPayload {
  value: number;
  auction: string;
  user: string;
}

const computeMaxBid = (bids: Bid[], price: number) =>
  bids.reduce((acc, bid) => (bid.value > price ? bid.value : acc), price);

export function AuctionTemplate(props: Props) {
  const { auction, isLoading, isError, refetch } = props;
  const { bids, price } = auction;
  const nextBid = computeMaxBid(bids, price);

  const insets = useSafeAreaInsets();

  const [bid, setBid] = useState(nextBid + 1);
  const [isBidModal, setBidVisibility] = useState(false);
  const { user } = useUser();

  const openModal = () => setBidVisibility(true);

  const closeModal = () => setBidVisibility(false);

  const mutation = useMutation({
    mutationFn: (data: AutionBidPayload) =>
      fetch(apiRoutes.bids, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
    onSuccess: closeModal,
  });

  const parseBid = (value: string) => setBid(safeIntParse(value));

  const confirmModal = () => {
    if (auction?.id && user?.id) {
      const { id: auctionId } = auction;
      const { id: userId } = user;
      mutation.mutate({ value: bid, auction: auctionId, user: userId });
    }
    refetch();
  };

  return (
    <ScrollView>
      {isBidModal && <BidModal bid={bid} closeModal={closeModal} confirmModal={confirmModal} />}
      <AuctionHeader />
      <AuctionImage imageType={imageTypes.detail} />
      <View my={5} mx={2} px={3} paddingTop={insets.top} paddingBottom={insets.bottom}>
        {isLoading && <Loader />}
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
        <AuctionLeftHearts quantity={nextBid} authorName={auction.author.firstName} />
        <AuctionTime expirationDate={auction.expiresAt} />
      </View>
      <View mx={16}>
        <Input placeholder='10' onChangeText={parseBid} value={`${bid}`} keyboardType='numeric' />
        <Button onPress={openModal}>BID</Button>
        <Button variant='lighGray'>REPORT</Button>
      </View>
    </ScrollView>
  );
}

export default AuctionTemplate;
