import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Icon, IconType, Row, Text } from '@inheartive/ui/atoms';

interface IAuctionTimeProps {
  expirationDate: number | Date;
}

function AuctionTime(props: IAuctionTimeProps) {
  const { expirationDate } = props;
  const remainingTimeHumanized = formatDistanceToNow(expirationDate, { addSuffix: true }).trim();

  return (
    <Row space={1.5} alignItems='center'>
      <Icon name={IconType.timeOutline} size={40} />
      <Text>{remainingTimeHumanized}</Text>
    </Row>
  );
}

export { AuctionTime };
