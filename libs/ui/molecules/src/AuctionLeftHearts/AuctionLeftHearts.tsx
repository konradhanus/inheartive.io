import React from 'react';
import { Icon, IconType, Row, Text } from '@inheartive-atoms';

interface IAuctionHeartsProps {
    quantity: number;
    authorName?: string;
    fSize?: string;
}

function AuctionLeftHearts(props: IAuctionHeartsProps) {
    const { quantity, authorName, fSize } = props;

    return (
        <Row space={1.5} alignItems='center'>
            <Icon name={IconType.favoriteOutline} size={40} />
            <Text fontSize={fSize}>
                {quantity} {authorName}
            </Text>
        </Row>
    );
}

export { AuctionLeftHearts };
