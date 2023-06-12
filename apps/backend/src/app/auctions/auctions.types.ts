import { FindOptionsOrderValue } from 'typeorm';

export type AuctionSorkKey = 'title' | 'price' | 'createdAt' | 'expiresAt';

export type SearchTopic = 'bids' | 'category' | 'author';

export enum AuctionStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  REJECTED = 'rejected',
  FINISHED = 'finished',
  NOWINNERS = 'noWinners',
}

interface AuctionBaseParams {
  authorId: string;
  categoryId: string;
  isExpired: boolean;
  sortBy: AuctionSorkKey;
  order: FindOptionsOrderValue;
  bidAuthorId: string;
}

interface SearchAuctionParams {
  query: SearchTopic;
  author: string;
}

export type AuctionParams = Partial<AuctionBaseParams>;
export type AuctionSearchParams = Partial<SearchAuctionParams>;
