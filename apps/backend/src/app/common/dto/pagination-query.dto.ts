import { IsOptional, IsPositive, Max } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @Max(50)
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
