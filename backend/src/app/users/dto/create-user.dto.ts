import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserBody {
  @ApiProperty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @Length(2, 50)
  readonly firstName: string;

  @ApiProperty()
  @IsString()
  @Length(2, 50)
  readonly lastName: string;

  @ApiProperty()
  @IsString()
  @Length(8, 50)
  readonly password: string;
}
