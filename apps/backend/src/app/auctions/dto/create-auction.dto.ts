import { IsNumber, IsOptional, IsPositive, IsString, MaxLength, MinLength } from 'class-validator';
import { Category } from '../../categories/entities/category.entity';

export class CreateAuctionDto {
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  readonly title: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  readonly description: string;

  @IsNumber()
  @IsPositive()
  readonly category: Category;
}
