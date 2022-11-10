/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React, { ComponentType } from 'react';
import { Icon, IconType } from '@inheartive/ui/atoms';
import { Row } from '@inheartive/ui/atoms';
import TextStyled from './TextStyled';
import { colors } from '@inheartive/ui/theme';

interface IHeartsCreditsProps {
  credit: number;
  size: number;
  testID?: string;
}

const HeartsCredits: ComponentType<IHeartsCreditsProps> = (props) => {
  const { credit, size, testID } = props;

  const style = {
    height: 60,
    width: 60,
  };

  return (
    <Row space={2} alignItems='center' style={style}>
      <Icon name={IconType.favorite} size={size} color={colors.primary[600]} />
      <TextStyled fontSize='lg' testID={testID} fontFamily='body' fontStyle='normal' fontWeight='400'>
        {credit}
      </TextStyled>
    </Row>
  );
};

export { HeartsCredits };
