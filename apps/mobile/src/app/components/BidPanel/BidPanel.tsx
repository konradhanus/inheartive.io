import { Auction } from '@inheartive/data';
import { Button, Icon, IconType, Input, Row, View } from '@inheartive/ui/atoms';
import { AuctionLeftHearts } from '@inheartive/ui/molecules';
import React from 'react';
interface Props {
  auction: Auction;
}
export const BidPanel = (props: Props) => {
  const { auction } = props;
  return (
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
};
