/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import React, { useState } from 'react';
import { Icon, IconType, Pressable } from '@inheartive/ui/atoms';
import { HeartsCredits } from '@inheartive/ui/molecules';
import { FooterMenuProps, IconNameType } from './FooterMenuTypes';
import { HStack } from 'native-base';
import { Link } from 'react-router-native';

const FooterMenu: React.ComponentType<FooterMenuProps> = ({ activeIcon }) => {
  const activeColor = 'black';
  const inActiveColor = 'gray.300';
  const [currentActiveIcon, setCurrentActiveIcon] = useState(activeIcon);
  const getIconColor = (iconName: IconNameType) => (currentActiveIcon === iconName ? activeColor : inActiveColor);

  const onFooterMenuChange = function (iconName: IconNameType): void {
    setCurrentActiveIcon(iconName);
  };

  return (
    <HStack bg='white' justifyContent='space-between' px='4' alignItems='center' testID='footer-menu'>
      <Link to='/'>
        <Icon name={IconType.homeOutline} size={50} color={getIconColor(IconNameType.homepage)} />
      </Link>
      <Pressable p={1} onPress={() => onFooterMenuChange(IconNameType.search)}>
        <Icon name={IconType.search} size={50} color={getIconColor(IconNameType.search)} />
      </Pressable>
      <Pressable p={1} onPress={() => onFooterMenuChange(IconNameType.heart)}>
        <HeartsCredits credit={99} size={60} />
      </Pressable>
      <Link to='/auctions/create'>
        <Icon name={IconType.plusCircle} size={50} color={getIconColor(IconNameType.plus)} />
      </Link>
      <Pressable p={1} onPress={() => onFooterMenuChange(IconNameType.star)}>
        <Icon name={IconType.starOutline} size={50} color={getIconColor(IconNameType.star)} />
      </Pressable>
    </HStack>
  );
};

export { FooterMenu };
