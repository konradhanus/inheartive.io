import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Row, Text } from '@inheartive/ui/atoms';
import { Image } from '@inheartive/ui/atoms';
import { timeOutline } from '@inheartive/assets';

interface IAuctionTimeProps {
  expirationDate: number | Date;
}

function AuctionTime(props: IAuctionTimeProps) {
  const { expirationDate } = props;
  const remainingTimeHumanized = formatDistanceToNow(expirationDate, { addSuffix: true }).trim();

  return (
    <Row space={1.5} alignItems='center'>
      <Image source={timeOutline} alt='Time outline image' size={10} />
      <Text>{remainingTimeHumanized}</Text>
    </Row>
  );
}

export { AuctionTime };
