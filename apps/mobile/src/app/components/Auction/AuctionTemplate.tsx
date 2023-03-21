import React, { useRef } from 'react';
import { Auction } from '@inheartive/data';
import { AuctionImage, ScrollView, imageTypes, Loader, Icon, Row } from '@inheartive/ui/atoms';
import { Button, Text, View, Input, IconType } from '@inheartive/ui/atoms';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AuctionHeader } from '@inheartive/ui/organisms';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuctionAuthor, AuctionLeftHearts, AuctionTime, AuctionBid } from '@inheartive/ui/molecules';
import { theme } from '@inheartive/ui/theme';
import { ModalBottom } from '../ModalBottom/ModalBottom';

interface Props {
  auction: Auction | undefined;
  isLoading: boolean;
  isError: boolean;
}

export function AuctionTemplate(props: Props) {
  const { auction, isLoading, isError } = props;
  const insets = useSafeAreaInsets();
  const bottomSheet = useRef();

  if (!auction) {
    return <Loader />;
  }
  const BidPanel = (
    <View mx={16} justifyContent='center'>
      <Row padding='4px'>
        <AuctionLeftHearts fSize='24px' quantity={auction.price} authorName={auction.author.firstName} />
      </Row>
      <Row space={1.5} alignItems='center' background='#B4B3AF' borderRadius='16px' padding='4px'>
        <Icon name={IconType.favoriteOutline} size={40} />
        <Input
          color='grey'
          fontSize='24px'
          padding='0'
          defaultValue={`${auction.price + 1}`}
          width='80%'
          textDecorationColor='transparent'
          focusOutlineColor='transparent'
          bgColor='transparent'
          background='transparent'
          borderColor='transparent'
          keyboardType='numeric'
        />
      </Row>
      <Row justifyContent='center' alignItems='center'>
        <Button width='90%' marginTop='20px' fontSize='30px' height='50px'>
          BID
        </Button>
      </Row>
    </View>
  );
  const BidButton = <Button>BID</Button>;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ModalBottom bottomSheet={bottomSheet} BidButton={BidButton} BidPanel={BidPanel} />
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
          <AuctionLeftHearts quantity={auction.price} authorName={auction.author.firstName} />
          <AuctionTime expirationDate={auction.expiresAt} />
          <AuctionBid currentBid={42} />
        </View>
        <View mx={16}>
          <TouchableOpacity>
            <Button onPress={() => bottomSheet.current.show()}>BID</Button>
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
