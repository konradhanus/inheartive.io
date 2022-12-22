import React from 'react';
import { Badge, Row, View, Text, ImageBackground, Icon, IconType, Pressable } from '@inheartive/ui/atoms';
import { IAuction } from '@inheartive/data';
import { placeholder } from '@inheartive/assets';
import { AuctionAuthor, AuctionHearts } from '@inheartive/ui/molecules';
import { Link } from 'react-router-native';

interface Props {
  auction: IAuction;
  linkPatternWithId?: string;
  isFavorite: boolean;
  onFavoriteChange: (auctionId: string, isCurrentlyFavorite: boolean) => void;
}

function AuctionCard(props: Props) {
  const { linkPatternWithId, isFavorite, onFavoriteChange } = props;
  const { id, author, title, heartcoins, imageSrc, expirationDate } = props.auction;

  const link = linkPatternWithId ? linkPatternWithId.replace(':id', id) : undefined;

  return (
    <View>
      <Row justifyContent={'space-between'} py={1} px={3}>
        <AuctionAuthor authorInitials={author.initials} avatarSrc={author.avatarSrc} authorName={author.fullName} />
        <AuctionHearts quantity={heartcoins} />
      </Row>

      <ImageBackground style={{ height: 180 }} source={imageSrc ?? placeholder}>
        <View alignItems={'flex-end'} justifyContent={'space-between'} height={'100%'} py={4} px={3}>
          <Pressable p={1} onPress={() => onFavoriteChange(id, isFavorite)}>
            <Icon size={30} color='secondary.600' name={isFavorite ? IconType.star : IconType.starOutline} />
          </Pressable>

          <Badge size={'xs'} fontSize={12} bgColor={'secondary.600'} rounded={16}>
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
        {link ? (
          <Link to={link}>
            <Text fontSize={16}>{title}</Text>
          </Link>
        ) : (
          <Text fontSize={16}>{title}</Text>
        )}
      </View>
    </View>
  );
}

export { AuctionCard };
