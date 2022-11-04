/* eslint-disable @nrwl/nx/enforce-module-boundaries */

import React from 'react';
import HeartsCredits from '../../../../molecules/src/lib/HeartsCredits';
import { colors } from 'libs/ui/theme/src/colors';
import { Icon, IconType, Pressable } from '@inheartive/ui/atoms';
import { Box, HStack } from 'native-base';

export type IconNameType = 'homepage' | 'search' | 'heart' | 'plus' | 'star';

export interface FooterMenuProps {
  testID?: string;
  activeIcon: IconNameType;
  onChange: (iconName: IconNameType) => void;
}

const FooterMenu: React.ComponentType<FooterMenuProps> = ({ testID, activeIcon, onChange }) => {
  const activeColor = colors.footer[800];
  const inActiveColor = colors.footer[50];
  const iconColor = (iconName: IconNameType) => (activeIcon === iconName ? activeColor : inActiveColor);

  return (
    <Box flex={1} safeAreaTop width='100%' alignSelf='flex-end' justifyContent='space-between'>
      <HStack bg='white' safeAreaBottom justifyContent='space-between' px='4' alignItems='center'>
        <Pressable p={1} onPress={() => onChange('homepage')}>
          <Icon name={IconType.homeOutline} size={50} color={iconColor('homepage')} />
        </Pressable>
        <Pressable p={1} onPress={() => onChange('search')}>
          <Icon name={IconType.search} size={50} color={iconColor('search')} />
        </Pressable>
        <Pressable p={1} onPress={() => onChange('heart')}>
          <HeartsCredits credit={99} size={60} />
        </Pressable>
        <Pressable p={1} onPress={() => onChange('plus')}>
          <Icon name={IconType.plusCircle} size={50} color={iconColor('plus')} />
        </Pressable>
        <Pressable p={1} onPress={() => onChange('star')}>
          <Icon name={IconType.starOutline} size={50} color={iconColor('star')} />
        </Pressable>
      </HStack>
    </Box>
  );
};

export { FooterMenu };
