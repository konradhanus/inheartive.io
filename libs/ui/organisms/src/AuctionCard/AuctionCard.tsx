import React from 'react';
import {
    Badge,
    Row,
    View,
    Text,
    Icon,
    IconType,
    Pressable,
    AuctionImage,
    imageTypes,
} from '@inheartive-atoms';
import { Auction } from '@inheartive-data';
import { placeholder } from '@inheartive-assets';
import { AuctionAuthor, AuctionHearts } from '@inheartive-molecules';
import { Link } from 'react-router-native';
import { formatDistanceToNow } from 'date-fns';

interface Props {
    auction: Auction;
    linkPatternWithId?: string;
    isFavorite: boolean;
    onFavoriteChange: (auctionId: string, isCurrentlyFavorite: boolean) => void;
}

function AuctionCard(props: Props) {
    const { linkPatternWithId, isFavorite, onFavoriteChange } = props;
    const { id, author, title, price, imageSrc, expiresAt } = props.auction;

    const link = linkPatternWithId
        ? linkPatternWithId.replace(':id', id)
        : undefined;
    const remainingTimeHumanized = formatDistanceToNow(new Date(expiresAt), {
        addSuffix: true,
    });

    return (
        <View>
            <Row justifyContent={'space-between'} py={1} px={3}>
                <AuctionAuthor
                    authorInitials={author.initials}
                    avatarSrc={author.avatarSrc}
                    authorFirstName={author.firstName}
                    authorLastName={author.lastName}
                />
                <AuctionHearts quantity={price} />
            </Row>
            <AuctionImage
                imageType={imageTypes.list}
                imageSrc={imageSrc ?? placeholder}
            >
                <View
                    alignItems={'flex-end'}
                    justifyContent={'space-between'}
                    height={'100%'}
                    py={4}
                    px={3}
                >
                    <Pressable
                        p={1}
                        onPress={() => onFavoriteChange(id, isFavorite)}
                    >
                        <Icon
                            size={30}
                            color='primary.600'
                            name={
                                isFavorite
                                    ? IconType.star
                                    : IconType.starOutline
                            }
                        />
                    </Pressable>
                    <Badge
                        size={'xs'}
                        fontSize={12}
                        bgColor={'secondary.600'}
                        rounded={16}
                    >
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
            </AuctionImage>

            <View py={1} px={3}>
                {link ? (
                    <Link to={link} underlayColor='transparent'>
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
