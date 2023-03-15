import { IsInt, IsNumber, IsPositive, Max } from 'class-validator';

export class CreateBidDto {
  @IsPositive()
  @Max(parseInt(process.env.MAX_BID_VALUE))
  @IsInt()
  readonly value: number;
}
