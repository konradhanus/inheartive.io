import {
  FindOptionsOrder,
  FindOptionsWhere,
  LessThan,
  MoreThan,
} from 'typeorm';
import { AuctionParams, AuctionSearchParams } from './auctions.types';
import { Auction } from './entities/auction.entity';
import { AuctionsListParamsDto } from './dto/auctions-list-params.dto';

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

const toExpiresAt = (isExpired: boolean): FindOptionsWhere<Auction> => {
  if (isExpired) {
    const dateCompare = isExpired ? LessThan : MoreThan;
    return {
      expiresAt: dateCompare(new Date()),
    };
  }
  return {};
};

const toBidAuthorId = (id: string): FindOptionsWhere<Auction> => ({
  bids: {
    user: {
      id,
    },
  },
});

const WHERE_QUERY_PARAMS = [
  'authorId',
  'categoryId',
  'isFinished',
  'bidAuthorId',
] as const;

type QueryParamsStrategy = Partial<
  Record<
    keyof AuctionParams,
    (id: string | boolean) => FindOptionsWhere<Auction>
  >
>;

const QueryParamsStrategy: QueryParamsStrategy = {
  authorId: toAuthorId,
  categoryId: toCategoryId,
  isExpired: toExpiresAt,
  bidAuthorId: toBidAuthorId,
};

export const toWhereQuery = (
  params: AuctionsListParamsDto,
): FindOptionsWhere<Auction> =>
  WHERE_QUERY_PARAMS.reduce((acc, elem) => {
    const value = params[elem];
    return value
      ? {
          ...acc,
          ...QueryParamsStrategy[elem](value),
        }
      : acc;
  }, {});

const DEFAULT_ORDER = {
  createdAt: 'DESC',
} as const;

export const toOrderQuery = (
  params: AuctionsListParamsDto,
): FindOptionsOrder<Auction> => {
  if (params.sortBy) {
    return {
      [params.sortBy]: params.order || 'ASC',
    };
  }

  return DEFAULT_ORDER;
};

export const toSearchQuery = (
  params: AuctionSearchParams,
): FindOptionsWhere<Auction> => {
  let condition = null;

  if (params.author) {
    condition = { user: { id: params.author } };
  }
  if (params.query) {
    return {
      [params.query]: condition,
    };
  }

  return {};
};
