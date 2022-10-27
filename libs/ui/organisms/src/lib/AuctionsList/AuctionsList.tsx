import React from 'react';
import { Badge, Column, Row, View, Text } from '@inheartive/ui/atoms';
import { IAuction } from '@inheartive/data';

interface Props {
  auctions: IAuction[];
}

function AuctionsList(props: Props) {
  const { auctions } = props;

  return (
    <View mt={5}>
      {auctions.map((auction) => (
        <Column mb={5} key={auction.id}>
          <Text fontSize={12}>Category: {auction.category.name}</Text>
          <Text fontSize={12}>Author: {auction.author.name}</Text>
          <Text bold>{auction.title}</Text>
          <Text>Heartcoins: {auction.heartcoins}</Text>
          <Text>Created: {auction.creationDate}</Text>
          <Row>
            <Text>Expiration:</Text>
            <Badge colorScheme={'primary'} rounded={16}>
              {auction.expirationDate}
            </Badge>
          </Row>
        </Column>
      ))}
    </View>
  );
}

export { AuctionsList };
