import React from 'react';
import { Auction } from '@inheartive/data';
import { Icon, IconType, View, Text } from '@inheartive/ui/atoms';
import { styles } from './styles';

interface AuctionRowProps {
  auction: Auction;
}

export const AuctionRow = ({ auction }: AuctionRowProps) => (
  <View style={styles.row}>
    <View style={styles.description}>
      <Text style={styles.text}>{auction.description}</Text>
    </View>
    <Icon name={'user'} size={30} />
    <Text style={styles.text}>{'X.X.'}</Text>
    <View>
      <Text>
        <Icon name={IconType.favoriteOutline} size={20} />
        <Text style={styles.text}>{auction.price}</Text>
      </Text>
    </View>
  </View>
);
