import React from 'react';
import { Badge, Row, View, Text, ImageBackground, Icon, IconType, Pressable } from '@inheartive/ui/atoms';
import { IAuction } from '@inheartive/data';
import { placeholder } from '@inheartive/assets';
import { AuctionAuthor, AuctionHearts } from '@inheartive/ui/molecules';
import { Link } from 'react-router-native';
import { theme } from '@inheartive/ui/theme';
import { formatDistanceToNow } from 'date-fns';

interface Props {
  auction: IAuction;
  linkPatternWithId?: string;
  isFavorite: boolean;
  onFavoriteChange: (auctionId: string, isCurrentlyFavorite: boolean) => void;
}

function AuctionCard(props: Props) {
  const { linkPatternWithId, isFavorite, onFavoriteChange } = props;
  const { id, author, title, price, imageSrc, expiresAt } = props.auction;

  const link = linkPatternWithId ? linkPatternWithId.replace(':id', id) : undefined;
  const remainingTimeHumanized = formatDistanceToNow(new Date(expiresAt), { addSuffix: true });

  return (
    <View>
      <Row justifyContent={'space-between'} py={1} px={3}>
        <AuctionAuthor author={author} />
        <AuctionHearts quantity={price} />
      </Row>

      <ImageBackground
        style={{ height: 180, backgroundColor: theme.colors.trueGray['300'] }}
        source={imageSrc ?? placeholder}
      >
        <View alignItems={'flex-end'} justifyContent={'space-between'} height={'100%'} py={4} px={3}>
          <Pressable p={1} onPress={() => onFavoriteChange(id, isFavorite)}>
            <Icon size={30} color='primary.600' name={isFavorite ? IconType.star : IconType.starOutline} />
          </Pressable>

          <Badge size={'xs'} fontSize={12} bgColor={'secondary.600'} rounded={16}>
            <Row>
              <Text fontSize={12} mr={1} color={'white'}>
                Ends:
              </Text>
              <Text fontSize={12} color={'white'} bold>
                {remainingTimeHumanized}
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
