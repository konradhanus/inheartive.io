import { CategoryDto } from '../../categories/dto/category.dto';
import { AuctionStatus } from '../auctions.types';
import { UserDto } from '../../users/dto/user.dto';
import { BidDto } from '../../bids/dto/bid.dto';

export class AuctionDto {
  id: string;
  title: string;
  description: string;
  price: number;
  category: CategoryDto;
  author: UserDto;
  status: AuctionStatus;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
  bids: BidDto[];
  location: string;
  isFinished: boolean;
}
