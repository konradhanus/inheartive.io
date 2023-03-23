import React from 'react';
import { View } from '@inheartive/ui/atoms';

import BottomSheet from 'react-native-gesture-bottom-sheet';

const ModalBottom = ({ BidPanel, bottomSheet }: { BidPanel: React.ReactNode; bottomSheet: any }) => {
  return (
    <BottomSheet draggable={false} hasDraggableIcon ref={bottomSheet} height={200}>
      <View>{BidPanel}</View>
    </BottomSheet>
  );
};

export { ModalBottom };
