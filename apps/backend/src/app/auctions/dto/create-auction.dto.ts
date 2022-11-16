import { IsNumber, IsOptional, IsPositive, IsString, Length, MaxLength } from 'class-validator';
import { Category } from '../../categories/entities/category.entity';

export class CreateAuctionDto {
  @IsString()
  @Length(6, 50)
  readonly title: string;

  @IsString()
  @IsOptional()
  @MaxLength(500)
  readonly description: string;

  @IsNumber()
  @IsPositive()
  readonly category: Category;
}
