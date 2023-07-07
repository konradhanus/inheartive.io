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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAuctionDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty({ enum: AuctionStatus })
  status: AuctionStatus;

  // don't pay attension on type
  // will be category id as string 
  // due typeorm returns here category id from database 
  @ApiProperty({ type: String })
  category: CategoryDto;

  // don't pay attension on type
  // will be user id as string 
  // due typeorm returns here user id from database
  @ApiProperty({ type: String })
  author: UserDto;

  @ApiProperty()
  expiresAt: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  location: string;
}

export class CreateAuctionBody {
  @ApiProperty()
  @IsString()
  @Length(6, 50)
  readonly title: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @MaxLength(500)
  readonly description: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @Max(99999)
  readonly price: number;

  @ApiProperty()
  @IsDateString()
  readonly expiresAt: Date;

  @ApiProperty({ type: String })
  @IsUUID()
  @Validate(CategoryExistsRule)
  readonly category: Category;

  @ApiProperty({ type: String })
  @IsUUID()
  @Validate(UserExistsRule)
  readonly author: User;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MinLength(3)
  readonly location: string;
}
