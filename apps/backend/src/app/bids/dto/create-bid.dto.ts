import { IsNumber, IsPositive } from 'class-validator';

export class CreateBidDto {
  @IsNumber()
  @IsPositive()
  readonly value: number;
}
