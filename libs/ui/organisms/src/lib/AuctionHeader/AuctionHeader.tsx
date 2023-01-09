import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, IconType, Row } from '@inheartive/ui/atoms';
import { Link } from 'react-router-native';
import { theme } from 'native-base';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

function AuctionHeader() {
  return (
    <Row style={styles.container} px={8} py={2} justifyContent={'space-between'} alignItems='center'>
      <Link to='/'>
        <Icon name={IconType.chevronLeft} size={35} color={theme.colors.trueGray['500']} />
      </Link>
      <Icon name={IconType.starOutline} size={45} />
    </Row>
  );
}

export { AuctionHeader };
