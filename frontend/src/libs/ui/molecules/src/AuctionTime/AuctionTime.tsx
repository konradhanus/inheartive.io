import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Icon, IconType, Row, Text } from '../../../atoms';

interface IAuctionTimeProps {
    expirationDate: Date | number | string;
}
const isString = (value: unknown): value is string => typeof value === 'string';

const formatTime = (expirationDate: number | Date) =>
    formatDistanceToNow(expirationDate, { addSuffix: true }).trim();

const getremainingTime = (expirationDate: string | number | Date) =>
    isString(expirationDate) ? expirationDate : formatTime(expirationDate);

function AuctionTime(props: IAuctionTimeProps) {
    const { expirationDate } = props;
    const remainingTimeHumanized = getremainingTime(expirationDate);

    return (
        <Row space={1.5} alignItems='center'>
            <Icon name={IconType.timeOutline} size={40} />
            <Text>{remainingTimeHumanized}</Text>
        </Row>
    );
}

export { AuctionTime };
