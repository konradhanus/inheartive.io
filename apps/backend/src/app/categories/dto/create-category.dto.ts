import { IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @MaxLength(30)
  readonly name: string;
}
