/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React, { ComponentType } from 'react';
import { Icon, IconType } from '@inheartive/ui/atoms';
import { Row } from '@inheartive/ui/atoms';
import TextStyled from './TextStyled';
import { colors } from '@inheartive/ui/theme';

interface IHeartsCreditsProps {
  credit: number;
  testID?: string | undefined;
}

const HeartsCredits: ComponentType<IHeartsCreditsProps> = (props) => {
  const { credit, testID } = props;

  return (
    <Row space={2} alignItems='center'>
      <Icon name={IconType.favorite} size={80} color={colors.primary[600]} />
      <TextStyled fontSize='xl' testID={testID} fontFamily='body' fontStyle='normal' fontWeight='400'>
        {credit}
      </TextStyled>
    </Row>
  );
};

export { HeartsCredits };
