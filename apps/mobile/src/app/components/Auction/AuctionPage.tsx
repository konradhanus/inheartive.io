import React, { useEffect, useState } from 'react';
import AuctionTemplate from './AuctionTemplate';
import { useParams } from 'react-router-native';
import { auctionsMock, IAuction } from '@inheartive/data';

export function AuctionPage() {
  const [auction, setAuction] = useState<IAuction>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    // TODO: Auction API call
    setAuction(auctionsMock.find((a) => a.id === id));
    setIsLoading(false);
  }, [id]);

  if (!auction) {
    return <p>Loading ...</p>;
  }

  return <AuctionTemplate isLoading={isLoading} auction={auction} />;
}

export default AuctionPage;
