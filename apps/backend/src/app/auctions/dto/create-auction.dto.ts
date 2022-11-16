import { IsNumber, IsPositive, IsString } from 'class-validator';
import { Category } from '../../categories/entities/category.entity';

export class CreateAuctionDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  @IsPositive()
  readonly category: Category;
}
