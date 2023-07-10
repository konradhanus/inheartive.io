import { CategoryDto } from '../../categories/dto/category.dto';
import { AuctionStatus } from '../auctions.types';
import { UserDto } from '../../users/dto/user.dto';
import { BidDto } from '../../bids/dto/bid.dto';
import { ApiProperty } from '@nestjs/swagger';

export class AuctionDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  category: CategoryDto;

  @ApiProperty()
  author: UserDto;

  @ApiProperty({ enum: AuctionStatus })
  status: AuctionStatus;

  @ApiProperty()
  expiresAt: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ type: [BidDto] })
  bids: BidDto[];

  @ApiProperty()
  location: string;

  @ApiProperty()
  isFinished: boolean;
}
