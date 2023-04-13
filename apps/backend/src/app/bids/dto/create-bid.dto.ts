import { IsInt, IsPositive, IsUUID, Max, Validate } from 'class-validator';
import { Auction } from '../../auctions/entities/auction.entity';
import { User } from '../../users/entities/user.entity';
import { UserExistsRule } from '../../users/validators/user-exists';

export class CreateBidDto {
  @IsPositive()
  @Max(parseInt(process.env.MAX_BID_VALUE))
  @IsInt()
  readonly value: number;

  @IsUUID()
  readonly auction: string;

  @IsUUID()
  @Validate(UserExistsRule)
  readonly user: string;
}
