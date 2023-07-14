import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AuctionDto } from '../../auctions/dto/auction.dto';
import { UserDto } from '../../users/dto/user.dto';

export class BidDto {
  @ApiProperty()
  id: string;
  
  auctionId?: string;

  user?: UserDto;
  
  @ApiProperty()
  value: number;
  
  @ApiProperty()
  createdAt: Date;
}
