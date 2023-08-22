import { Auction, apiRoutes } from '../../libs/data';
import {
  AuctionImage,
  Button,
  Loader,
  ScrollView,
  Text,
  View,
  imageTypes,
} from '../../libs/ui/atoms';
import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import {
  AuctionAuthor,
  AuctionBid,
  AuctionLeftHearts,
  AuctionTime,
  AuctionLocation,
} from '../../libs/ui/molecules';
import { AuctionHeader } from '../../libs/ui/organisms';
import { theme } from '../../libs/ui/theme';
import { useMutation } from '@tanstack/react-query';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { BottomSheet, ModalBottom } from '../ModalBottom/ModalBottom';
import { useUser } from '../Providers/UserProvider';
import { HttpMethods, fetchData } from '../../libs/ui/shared';

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

const computeMaxBid = ({ bids }: Auction) => {
  if (!bids.length) {
    return null;
  } else {
    const sortedBids = bids.sort((bid1, bid2) => bid2.value - bid1.value);
    return sortedBids[0];
  }
};

export function AuctionTemplate(props: Props) {
  const { auction, isLoading, isError, refetch } = props;
  const maxBid = computeMaxBid(auction);
  const price = maxBid?.value ?? auction.price;
  const bidAuthor = maxBid?.user?.firstName ?? auction?.author?.firstName;
  const insets = useSafeAreaInsets();
  const bottomSheet = useRef<BottomSheet>();
  const { user } = useUser();
  const showModal = () => bottomSheet.current?.show();
  const closeModal = () => bottomSheet.current?.close();

  const isMyAuction = user?.id === auction?.author?.id;

  const mutation = useMutation({
    mutationFn: (data: AutionBidPayload) => {
      return fetchData(apiRoutes.bids, HttpMethods.POST, data);
    },
    onSuccess: () => {
      closeModal();
      refetch();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const confirmModal = (bid: number) => {
    if (auction?.id && user?.id) {
      const { id: auctionId } = auction;
      const { id: userId } = user;
      mutation.mutate({ value: bid, auction: auctionId, user: userId });
    }
  };

  if (!auction) {
    return <Loader />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ModalBottom
          bid={price}
          auction={auction}
          bottomSheet={bottomSheet}
          confirmModal={confirmModal}
        />
        <AuctionHeader />
        <AuctionImage imageType={imageTypes.detail} />
        <View
          my={5}
          mx={2}
          px={3}
          paddingTop={insets.top}
          paddingBottom={insets.bottom}
        >
          {isLoading && <Loader />}
          {!isLoading && !auction && <Text>Error while loading auction</Text>}
          {!isLoading && !isError && auction && (
            <>
              <Text fontSize="lg" my={3}>
                {auction.title}
              </Text>
              <Text fontSize="sm" my={3}>
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
          <AuctionLeftHearts quantity={price} authorName={bidAuthor} />
          <AuctionTime expirationDate={auction.expiresAt} />
          {auction.location && <AuctionLocation location={auction.location} />}
          <AuctionBid currentBid={42} />
        </View>
        {!isMyAuction && (
          <View mx={16}>
            <TouchableOpacity>
              <Button onPress={showModal}>BID</Button>
            </TouchableOpacity>
            <Button variant="lighGray">REPORT</Button>
          </View>
        )}
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
  },
});
export default AuctionTemplate;
