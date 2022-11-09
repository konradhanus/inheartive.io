import React from 'react';
import { Badge, Row, View, Text, ImageBackground, Icon, IconType } from '@inheartive/ui/atoms';
import { IAuction } from '@inheartive/data';
import { placeholder } from '@inheartive/assets';
import { AuctionAuthor, AuctionHearts } from '@inheartive/ui/molecules';
import { Link } from 'react-router-native';

interface Props {
  auction: IAuction;
  linkPatternWithId: string;
}

function AuctionCard(props: Props) {
  const { id, author, title, heartcoins, imageSrc, expirationDate } = props.auction;

  const link = props.linkPatternWithId.replace(':id', id);

  return (
    <View>
      <Row justifyContent={'space-between'} py={1} px={3}>
        <AuctionAuthor authorInitials={author.initials} avatarSrc={author.avatarSrc} authorName={author.fullName} />
        <AuctionHearts quantity={heartcoins} />
      </Row>

      <ImageBackground style={{ height: 180 }} source={imageSrc ?? placeholder}>
        <View alignItems={'flex-end'} justifyContent={'space-between'} height={'100%'} py={4} px={3}>
          <Icon size={30} name={IconType.starOutline} />
          <Badge size={'xs'} fontSize={12} bgColor={'primary.600'} rounded={16}>
            <Row>
              <Text fontSize={12} mr={2} color={'white'}>
                Ends in:
              </Text>
              <Text fontSize={12} color={'white'} bold>
                {expirationDate}
              </Text>
            </Row>
          </Badge>
        </View>
      </ImageBackground>
      <View py={1} px={3}>
        <Link to={link}>
          <Text fontSize={16}>{title}</Text>
        </Link>
      </View>
    </View>
  );
}

export { AuctionCard };
