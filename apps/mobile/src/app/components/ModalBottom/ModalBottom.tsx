import React, { MutableRefObject } from 'react';
import { Button, Icon, IconType, Input, Row, View } from '@inheartive/ui/atoms';
import { AuctionLeftHearts } from '@inheartive/ui/molecules';

import BottomSheet from 'react-native-gesture-bottom-sheet';
import { Auction } from '@inheartive/data';
export interface BottomSheet {
  show: () => void;
  close: () => void;
}
interface ModalBottomProps {
  bottomSheet: MutableRefObject<BottomSheet | undefined>;
  auction: Auction;
  confirmModal: () => void;
  bid: number;
}

const ModalBottom = ({ bottomSheet, auction, confirmModal, bid }: ModalBottomProps) => {
  return (
    <BottomSheet draggable={false} hasDraggableIcon ref={bottomSheet} height={200}>
      <View>
        <View mx={16} justifyContent='center'>
          <Row padding='4px'>
            <AuctionLeftHearts fSize='24px' quantity={bid} authorName={auction.author.firstName} />
          </Row>
          <Row space={1.5} alignItems='center' background='#B4B3AF' borderRadius='16px' padding='4px'>
            <Icon name={IconType.favoriteOutline} size={40} />
            <Input
              color='grey'
              fontSize='24px'
              padding='0'
              defaultValue={`${bid + 1}`}
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
            <Button width='90%' marginTop='20px' fontSize='30px' height='50px' onPress={confirmModal}>
              BID
            </Button>
          </Row>
        </View>
      </View>
    </BottomSheet>
  );
};

export { ModalBottom };
