import { IsInt, IsNumber, IsPositive, Max } from 'class-validator';

export class CreateBidDto {
  @IsPositive()
  @Max(99999)
  @IsInt()
  readonly value: number;
}
