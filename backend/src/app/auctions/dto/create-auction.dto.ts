import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  Length,
  Max,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { Category } from '../../categories/entities/category.entity';
import { CategoryExistsRule } from '../../categories/validators/category-exists';
import { User } from '../../users/entities/user.entity';
import { UserExistsRule } from '../../users/validators/user-exists';

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
  @Max(99999)
  readonly price: number;

  @IsDateString()
  readonly expiresAt: Date;

  @IsUUID()
  @Validate(CategoryExistsRule)
  readonly category: Category;

  @IsUUID()
  @Validate(UserExistsRule)
  readonly author: User;

  @IsString()
  @IsOptional()
  @MinLength(3)
  readonly location: string;
}
