import { AuctionDto } from '../../auctions/dto/auction.dto';
import { UserDto } from '../../users/dto/user.dto';

export class BidDto {
  id: string;
  auction?: AuctionDto;
  user?: UserDto;
  value: number;
  createdAt: Date;
}
