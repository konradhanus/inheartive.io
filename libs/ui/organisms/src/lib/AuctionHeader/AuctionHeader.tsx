import React from 'react';
import { Icon, IconType, Row } from '@inheartive/ui/atoms';
import { Link } from 'react-router-native';
import { theme } from 'native-base';

function AuctionHeader() {
  return (
    <Row px={8} py={2} justifyContent={'space-between'} bg='white' alignItems='center'>
      <Link to='/' underlayColor='transparent'>
        <Icon name={IconType.chevronLeft} size={35} color={theme.colors.trueGray['500']} />
      </Link>
      <Icon name={IconType.starOutline} size={45} />
    </Row>
  );
}

export { AuctionHeader };
