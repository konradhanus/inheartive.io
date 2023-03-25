import { FindOptionsOrderValue } from 'typeorm';

export type AuctionSorkKey = 'title' | 'price' | 'createdAt' | 'expiresAt';

interface AuctionBaseParams {
  authorId: string;
  categoryId: string;
  isExpired: boolean;
  sortBy: AuctionSorkKey;
  order: FindOptionsOrderValue;
  bidAuthorId: string;
}

export type AuctionParams = Partial<AuctionBaseParams>;
