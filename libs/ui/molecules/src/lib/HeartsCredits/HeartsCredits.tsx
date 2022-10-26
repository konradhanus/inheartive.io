/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { Image } from '@inheartive/ui/atoms';
import { heartCredit } from '@inheartive/assets';
import { Text, Row } from '@inheartive/ui/atoms';
//TS-disable
import styled from 'styled-components/native';

const TextStyled = styled(Text)`
  top: -4;
  left: -75;
  width: 65;
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 100;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

interface IHeartsCreditsProps {
  credit: number;
  testID?: string | undefined;
}

function HeartsCredits(props: IHeartsCreditsProps) {
  const { credit, testID } = props;

  return (
    <Row space={2} alignItems='center'>
      <Image source={heartCredit} alt='hearts credits'></Image>
      <TextStyled fontSize='xl' testID={testID}>
        {credit}
      </TextStyled>
    </Row>
  );
}

export { HeartsCredits };
