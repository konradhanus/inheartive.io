export const findByAuctionId = (id: string) =>
  ({
    order: {
      value: 'DESC',
    },
    where: {
      auction: {
        id,
      },
    },
  } as const);
