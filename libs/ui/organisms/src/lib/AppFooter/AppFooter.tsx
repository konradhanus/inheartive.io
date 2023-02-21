/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import React from 'react';
import { HeartsCredits } from '@inheartive/ui/molecules';
import { HStack } from 'native-base';
import { Link } from 'react-router-native';
import { FooterIcon, FooterIconRoutingMap } from './footer-icon';
import { AppFooterIcon } from './AppFooterIcon';

interface Props {
  activeIcon: FooterIcon;
  iconRoutingMap: FooterIconRoutingMap;
}

function AppFooter(props: Props) {
  const { activeIcon, iconRoutingMap } = props;

  return (
    <HStack bg='white' justifyContent='space-between' px='4' alignItems='center' testID='footer-menu'>
      <Link to={iconRoutingMap[FooterIcon.auctions]} underlayColor='transparent'>
        <AppFooterIcon name={FooterIcon.auctions} isActive={activeIcon === FooterIcon.auctions} />
      </Link>

      <Link to={iconRoutingMap[FooterIcon.auctions]} underlayColor='transparent'>
        <AppFooterIcon name={FooterIcon.search} isActive={activeIcon === FooterIcon.search} />
      </Link>

      <Link to={iconRoutingMap[FooterIcon.auctions]} underlayColor='transparent'>
        <HeartsCredits credit={99} size={60} />
      </Link>

      <Link to={iconRoutingMap[FooterIcon.addAuction]} underlayColor='transparent'>
        <AppFooterIcon name={FooterIcon.addAuction} isActive={activeIcon === FooterIcon.addAuction} />
      </Link>

      <Link to={iconRoutingMap[FooterIcon.auctions]} underlayColor='transparent'>
        <AppFooterIcon name={FooterIcon.favorites} isActive={activeIcon === FooterIcon.favorites} />
      </Link>
    </HStack>
  );
}

export { AppFooter };
