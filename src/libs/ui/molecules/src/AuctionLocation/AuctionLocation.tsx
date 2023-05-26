import React from 'react';

import { Row, IconType, Icon, Text } from '../../../atoms';

interface IAuctionLocationProps {
    location: string;
}

function AuctionLocation(props: IAuctionLocationProps) {
    const { location } = props;

    return (
        <Row space={1.5} alignItems='center'>
            <Icon name={IconType.location} size={40} />
            <Text>{location}</Text>
        </Row>
    );
}

export { AuctionLocation };
