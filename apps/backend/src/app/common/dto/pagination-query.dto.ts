import { IsNumber, IsOptional, IsPositive, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class PaginationQueryDto {
  @Transform(({ value }) => +value)
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Max(50)
  limit: number;

  @Transform(({ value }) => +value)
  @IsOptional()
  @IsNumber()
  @Min(0)
  offset: number;
}
