import React from 'react';
import { Icon, IconType, Row, Text } from '../../../atoms';

interface IAuctionHeartsProps {
    quantity: number;
    authorName?: string;
}

function AuctionHearts(props: IAuctionHeartsProps) {
    const { quantity, authorName } = props;

    return (
        <Row space={1.5} alignItems='center'>
            <Text>
                {quantity} {authorName}
            </Text>
            <Icon name={IconType.favoriteOutline} size={30} />
        </Row>
    );
}

export { AuctionHearts };
