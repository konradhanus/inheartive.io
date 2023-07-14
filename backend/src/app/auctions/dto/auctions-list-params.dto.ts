import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AuctionSorkKey } from '../auctions.types';
import { FindOptionsOrderValue } from 'typeorm';

export class AuctionsListParamsDto {
  @ApiPropertyOptional()
  authorId?: string;

  @ApiPropertyOptional()
  categoryId?: string;

  @ApiPropertyOptional()
  isFinished?: string;

  @ApiPropertyOptional()
  sortBy?: AuctionSorkKey;

  @ApiPropertyOptional()
  order?: FindOptionsOrderValue;

  @ApiPropertyOptional()
  bidAuthorId?: string;
}
