import { Button, Icon, IconType, Input, Row, View } from '@inheartive/ui/atoms';
import { AuctionLeftHearts } from '@inheartive/ui/molecules';
import React, { MutableRefObject, useState } from 'react';

import { Auction } from '@inheartive/data';
import BottomSheet from 'react-native-gesture-bottom-sheet';
export interface BottomSheet {
  show: () => void;
  close: () => void;
}
interface ModalBottomProps {
  bottomSheet: MutableRefObject<BottomSheet | undefined>;
  auction: Auction;
  confirmModal: (bid: number) => void;
  bid: number;
}

const ModalBottom = (props: ModalBottomProps) => {
  const { bottomSheet, auction, confirmModal, bid } = props;
  const [enteredValue, setEnteredValue] = useState(`${props.bid + 1}`);

  function bidInputHandler(enteredText: string) {
    setEnteredValue(enteredText);
  }

  function changeBidValue() {
    const chosenNumber = parseInt(enteredValue);
    props.bid = chosenNumber;
    confirmModal(props.bid);
  }

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
              width='80%'
              textDecorationColor='transparent'
              focusOutlineColor='transparent'
              bgColor='transparent'
              background='transparent'
              borderColor='transparent'
              keyboardType='numeric'
              onChangeText={bidInputHandler}
              value={enteredValue}
            />
          </Row>
          <Row justifyContent='center' alignItems='center'>
            <Button width='90%' marginTop='20px' fontSize='30px' height='50px' onPress={changeBidValue}>
              BID
            </Button>
          </Row>
        </View>
      </View>
    </BottomSheet>
  );
};

export { ModalBottom };
