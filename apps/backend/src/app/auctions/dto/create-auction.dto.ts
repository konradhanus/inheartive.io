import { IsNumber, IsOptional, IsPositive, IsString, IsUUID, Length, Max, MaxLength, Validate } from 'class-validator';
import { Category } from '../../categories/entities/category.entity';
import { CategoryExistsRule } from '../../categories/validators/category-exists';

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
  @Max(10000)
  readonly minPrice: number;

  @IsUUID()
  @Validate(CategoryExistsRule)
  readonly category: Category;
}
