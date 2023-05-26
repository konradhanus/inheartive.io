import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { storiesOf } from '@storybook/react-native';
import { AppFooter } from '../AppFooter';
import { FooterIcon, FooterIconRoutingMap } from '../footer-icon';

const iconRoutingMap: FooterIconRoutingMap = {
  [FooterIcon.addAuction]: '',
  [FooterIcon.auctions]: '',
  [FooterIcon.favorites]: '',
  [FooterIcon.heartcoins]: '',
  [FooterIcon.search]: '',
};

storiesOf('AppFooter', module)
  .addDecorator((story) => <NativeBaseProvider>{story()}</NativeBaseProvider>)
  .add('Basic', () => {
    const activeIcon = FooterIcon.addAuction;

    return <AppFooter iconRoutingMap={iconRoutingMap} activeIcon={activeIcon} />;
  });
