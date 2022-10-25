/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { Image } from '@inheartive/ui/atoms';
import { vector } from '@inheartive/assets';
import { Text, Row } from '@inheartive/ui/atoms';
import { StyleSheet } from 'react-native';

interface IAuctionHeartsProps {
  price: number;
}

function AuctionHearts(props: IAuctionHeartsProps) {
  const { price } = props;

  return (
    <Row space={2} alignItems='center'>
      <Image source={vector} alt='auction hearts' />
      <Text fontSize='xl' style={styles.textStyle}>
        {price}
      </Text>
    </Row>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    top: -2,
  },
});

export { AuctionHearts };
