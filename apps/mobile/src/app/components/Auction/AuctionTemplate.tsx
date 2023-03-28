import React, { useRef } from 'react';
import { AuctionImage, ScrollView, imageTypes, Loader } from '@inheartive/ui/atoms';
import { Button, Text, View } from '@inheartive/ui/atoms';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { apiRoutes, Auction, Bid } from '@inheartive/data';

import { AuctionHeader } from '@inheartive/ui/organisms';
import { useMutation } from '@tanstack/react-query';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuctionAuthor, AuctionLeftHearts, AuctionTime, AuctionBid } from '@inheartive/ui/molecules';
import { theme } from '@inheartive/ui/theme';
import { useUser } from '../Providers/UserProvider';
import { BottomSheet, ModalBottom } from '../ModalBottom/ModalBottom';

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
  const bid = computeMaxBid(bids, price);
  const insets = useSafeAreaInsets();
  const bottomSheet = useRef<BottomSheet>();
  const { user } = useUser();
  const showModal = () => bottomSheet.current?.show();
  const closeModal = () => bottomSheet.current?.close();

  const mutation = useMutation({
    mutationFn: (data: AutionBidPayload) =>
      fetch(apiRoutes.bids, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      refetch();
      closeModal();
    },
  });

  const confirmModal = () => {
    if (auction?.id && user?.id) {
      const { id: auctionId } = auction;
      const { id: userId } = user;
      mutation.mutate({ value: bid + 1, auction: auctionId, user: userId });
    }
  };

  if (!auction) {
    return <Loader />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ModalBottom bid={bid} auction={auction} bottomSheet={bottomSheet} confirmModal={confirmModal} />
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
          <AuctionLeftHearts quantity={bid} authorName={auction.author.firstName} />
          <AuctionTime expirationDate={auction.expiresAt} />
          <AuctionBid currentBid={42} />
        </View>
        <View mx={16}>
          <TouchableOpacity>
            <Button onPress={showModal}>BID</Button>
          </TouchableOpacity>
          <Button variant='lighGray'>REPORT</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 150,
    backgroundColor: '#140078',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#8559da',
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AuctionTemplate;
