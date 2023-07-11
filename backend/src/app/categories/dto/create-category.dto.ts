import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { CategoryDto } from './category.dto';

export class CreateCategoryDto extends CategoryDto { }

export class CreateCategoryBody {
  @ApiProperty()
  @IsString()
  @Length(2, 30)
  readonly name: string;
}
