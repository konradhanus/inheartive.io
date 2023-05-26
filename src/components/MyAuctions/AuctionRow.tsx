import React from 'react';
import { Auction } from '../../libs/data';
import { Icon, IconType, View, Text } from '../../libs/ui/atoms';
import { styles } from './styles';

interface AuctionRowProps {
    auction: Auction;
}

export const AuctionRow = ({ auction }: AuctionRowProps) => (
    <View style={styles.row}>
        <View style={styles.title}>
            <Text style={styles.text}>{auction.title}</Text>
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
