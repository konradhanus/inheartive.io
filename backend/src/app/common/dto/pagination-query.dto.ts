import { IsNumber, IsOptional, IsPositive, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationQueryDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Max(50)
  limit: number;

  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(0)
  offset: number;
}
