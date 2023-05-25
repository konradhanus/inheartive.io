import React from 'react';
import AuctionTemplate from './AuctionTemplate';
import { useParams } from 'react-router-native';
import { useQuery } from '@tanstack/react-query';
import { apiRoutes, routeWithId } from '@inheartive-data';

export function AuctionPage() {
    const params = useParams();
    const { id = '' } = params;
    const {
        isLoading,
        error,
        data: auction,
        refetch,
    } = useQuery({
        queryKey: ['auction', id],
        queryFn: () =>
            fetch(routeWithId(apiRoutes.auction, id)).then((res) => res.json()),
    });

    return (
        auction && (
            <AuctionTemplate
                isLoading={isLoading}
                isError={!!error}
                auction={auction}
                refetch={refetch}
            />
        )
    );
}

export default AuctionPage;
