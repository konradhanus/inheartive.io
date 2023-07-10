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
import { AuctionStatus } from '../auctions.types';
import { CategoryDto } from 'src/app/categories/dto/category.dto';
import { UserDto } from 'src/app/users/dto/user.dto';

export class CreateAuctionDto {
  id: string;

  title: string;

  description: string;

  price: number;

  status: AuctionStatus;

  // don't pay attension on type
  // will be category id as string 
  // due typeorm returns here category id from database 
  category: CategoryDto;

  // don't pay attension on type
  // will be user id as string 
  // due typeorm returns here user id from database
  author: UserDto;

  expiresAt: Date;

  createdAt: Date;

  updatedAt: Date;

  location: string;
}

export class CreateAuctionBody {
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
