/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React, { ComponentType } from 'react';
import { Image } from '@inheartive/ui/atoms';
import { heartCredit } from '@inheartive/assets';
import { Row } from '@inheartive/ui/atoms';
import TextStyled from './TextStyled';

interface IHeartsCreditsProps {
  credit: number;
  testID?: string | undefined;
}

const HeartsCredits: ComponentType<IHeartsCreditsProps> = (props) => {
  const { credit, testID } = props;

  return (
    <Row space={2} alignItems='center'>
      <Image source={heartCredit} alt='hearts credits'></Image>
      <TextStyled fontSize='xl' testID={testID} fontFamily='body' fontStyle='normal' fontWeight='400'>
        {credit}
      </TextStyled>
    </Row>
  );
};

export { HeartsCredits };
