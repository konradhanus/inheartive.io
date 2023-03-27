import React, { FC } from 'react';
import { View } from '@inheartive/ui/atoms';

import BottomSheet from 'react-native-gesture-bottom-sheet';
import { BidPanel } from '../BidPanel/BidPanel';
import { Auction } from '@inheartive/data';

const ModalBottom = ({ bottomSheet, auction }: { bottomSheet: any; auction: Auction }) => {
  return (
    <BottomSheet draggable={false} hasDraggableIcon ref={bottomSheet} height={200}>
      <View>
        <BidPanel auction={auction} />
      </View>
    </BottomSheet>
  );
};

export { ModalBottom };
