import { AuctionSorkKey } from '../auctions.types';
import { FindOptionsOrderValue } from 'typeorm';

export class AuctionsListParamsDto {
  authorId?: string;
  categoryId?: string;
  isFinished?: string;
  sortBy?: AuctionSorkKey;
  order?: FindOptionsOrderValue;
  bidAuthorId?: string;
}
