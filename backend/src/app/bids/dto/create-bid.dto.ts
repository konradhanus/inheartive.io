import { IsInt, IsPositive, IsUUID, Max, Validate } from 'class-validator';
import { UserExistsRule } from '../../users/validators/user-exists';
import { AuctionExistsRule } from '../../auctions/validators/auction-exists';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBidBody {
  @ApiProperty()
  @IsPositive()
  @Max(parseInt(process.env.MAX_BID_VALUE))
  @IsInt()
  readonly value: number;

  @ApiProperty()
  @IsUUID()
  @Validate(AuctionExistsRule)
  readonly auction: string;

  @ApiProperty()
  @IsUUID()
  @Validate(UserExistsRule)
  readonly user: string;
}
