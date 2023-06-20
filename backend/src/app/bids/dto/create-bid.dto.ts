import { IsInt, IsPositive, IsUUID, Max, Validate } from 'class-validator';
import { UserExistsRule } from '../../users/validators/user-exists';
import { AuctionExistsRule } from '../../auctions/validators/auction-exists';

export class CreateBidDto {
  @IsPositive()
  @Max(parseInt(process.env.MAX_BID_VALUE))
  @IsInt()
  readonly value: number;

  @IsUUID()
  @Validate(AuctionExistsRule)
  readonly auction: string;

  @IsUUID()
  @Validate(UserExistsRule)
  readonly user: string;
}
