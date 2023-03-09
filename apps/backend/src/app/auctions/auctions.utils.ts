import { FindOptionsWhere, LessThan, MoreThan } from 'typeorm';
import { AuctionParams } from './auctions.types';
import { Auction } from './entities/auction.entity';

const toAuthorId = (id: string): FindOptionsWhere<Auction> => ({
  author: {
    id,
  },
});

const toCategoryId = (id: string): FindOptionsWhere<Auction> => ({
  category: {
    id,
  },
});

const toExpiresAt = (isExpired: boolean) => {
  if (isExpired) {
    const dateCompare = isExpired ? LessThan : MoreThan;
    return {
      expiresAt: dateCompare(new Date()),
    };
  }
  return {};
};

const WHERE_QUERY_PARAMS = ['authorId', 'categoryId', 'isExpired'] as const;

type QueryParamsStrategy = Record<
  typeof WHERE_QUERY_PARAMS[number],
  (id: string | boolean) => FindOptionsWhere<Auction>
>;

const QueryParamsStrategy: QueryParamsStrategy = {
  authorId: toAuthorId,
  categoryId: toCategoryId,
  isExpired: toExpiresAt,
};

export const toWhereQuery = (params: AuctionParams): FindOptionsWhere<Auction> =>
  WHERE_QUERY_PARAMS.reduce((acc, elem) => {
    const value = params[elem];
    return value
      ? {
          ...acc,
          ...QueryParamsStrategy[elem](value),
        }
      : acc;
  }, {});
