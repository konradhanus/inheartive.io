import React from 'react';
import { ImageBackground } from '@inheartive/ui/atoms';
import { IAuction } from '@inheartive/data';
import { Button, Text, View } from '@inheartive/ui/atoms';
import { AuctionHeader } from '@inheartive/ui/organisms';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuctionAuthor, AuctionLeftHearts, AuctionTime } from '@inheartive/ui/molecules';
import { theme } from '@inheartive/ui/theme';
import { placeholder } from '@inheartive/assets';

interface Props {
  auction: IAuction;
  isLoading: boolean;
}

export function AuctionTemplate(props: Props) {
  const { auction, isLoading } = props;
  const insets = useSafeAreaInsets();

  //TODO
  const descTmp =
    'Auction offer details Lorem ipsum dolor sit amet. Aut atque voluptas in corporis accusamus sit iure officiis aut saepe quos et maiores nemo. Non unde enim sit quia quas est dolorum consequatur vel temporibus nostrum. Vel eveniet unde et corporis obcaecati et harum soluta non quia aliquid et autem quas ea itaque galisum. Ex accusamus voluptatibus non unde beatae quo dolor dolores non perspiciatis neque.';

  if (!auction) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <AuctionHeader />
      <ImageBackground
        style={{ height: 180, backgroundColor: theme.colors.trueGray['300'] }}
        source={auction.imageSrc ?? placeholder}
      />
      <View my={5} mx={3} px={3} paddingTop={insets.top} paddingBottom={insets.bottom}>
        {isLoading && <Text>Loading...</Text>}
        {!isLoading && !auction && <Text>Error while loading auction</Text>}
        {!isLoading && auction && <Text my={3}>{auction.title}</Text>}
        {!isLoading && auction && <Text my={3}>{descTmp}</Text>}
        <AuctionAuthor
          authorInitials={auction.author.initials}
          avatarSrc={auction.author.avatarSrc}
          authorName={auction.author.fullName}
          avatarBgColor={theme.colors.primary[500]}
        />
        <AuctionLeftHearts quantity={auction.heartcoins} authorName={auction.author.firstName} />
        <AuctionTime expirationDate={auction.expirationDate} />
      </View>
      <View mx={16}>
        <Button>BID</Button>
        <Button variant='lighGray'>REPORT</Button>
      </View>
    </>
  );
}

export default AuctionTemplate;
