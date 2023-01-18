import React from 'react';
import { Auction } from '@inheartive/data';
import { AuctionImage, ScrollView, imageTypes } from '@inheartive/ui/atoms';
import { Button, Text, View } from '@inheartive/ui/atoms';
import { AuctionHeader } from '@inheartive/ui/organisms';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuctionAuthor, AuctionLeftHearts, AuctionTime } from '@inheartive/ui/molecules';
import { theme } from '@inheartive/ui/theme';
interface Props {
  auction: Auction | undefined;
  isLoading: boolean;
  isError: boolean;
}

export function AuctionTemplate(props: Props) {
  const { auction, isLoading, isError } = props;
  const insets = useSafeAreaInsets();

  //TODO
  const descTmp =
    'Auction offer details Lorem ipsum dolor sit amet. Aut atque voluptas in corporis accusamus sit iure officiis aut saepe quos et maiores nemo. Non unde enim sit quia quas est dolorum consequatur vel temporibus nostrum. Vel eveniet unde et corporis obcaecati et harum soluta non quia aliquid et autem quas ea itaque galisum. Ex accusamus voluptatibus non unde beatae quo dolor dolores non perspiciatis neque.';

  if (!auction) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <AuctionHeader />
      <AuctionImage imageType={imageTypes.detail} />
      <View my={5} mx={2} px={3} paddingTop={insets.top} paddingBottom={insets.bottom}>
        {isLoading && <Text>Loading...</Text>}
        {!isLoading && !auction && <Text>Error while loading auction</Text>}
        {!isLoading && !isError && auction && (
          <>
            <Text fontSize='lg' my={3}>
              {auction.title}
            </Text>
            <Text fontSize='sm' my={3}>
              {descTmp}
            </Text>
          </>
        )}
        <AuctionAuthor
          authorInitials={auction.author.initials}
          avatarSrc={auction.author.avatarSrc}
          authorFirstName={auction.author.firstName}
          authorLastName={auction.author.lastName}
          avatarBgColor={theme.colors.primary[500]}
        />
        <AuctionLeftHearts quantity={auction.price} authorName={auction.author.firstName} />
        <AuctionTime expirationDate={auction.expiresAt} />
      </View>
      <View mx={16}>
        <Button>BID</Button>
        <Button variant='lighGray'>REPORT</Button>
      </View>
    </ScrollView>
  );
}

export default AuctionTemplate;
