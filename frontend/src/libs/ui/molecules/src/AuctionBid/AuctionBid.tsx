import React, { memo } from 'react';
import { Icon, IconType, Row, Text } from '../../../atoms';

interface AuctionBidProps {
    currentBid: string | number;
}

export const AuctionBid = memo(({ currentBid }: AuctionBidProps) => (
    <Row space={1.5} alignItems='center'>
        <Icon name={IconType.plusCircle} size={40} />
        <Text>{currentBid}</Text>
    </Row>
));
