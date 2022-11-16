import { IsNumber, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';
import { Category } from '../../categories/entities/category.entity';

export class CreateAuctionDto {
  @IsString()
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
