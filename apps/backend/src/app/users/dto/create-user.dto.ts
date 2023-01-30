import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @Length(2, 50)
  readonly firstName: string;

  @IsString()
  @Length(2, 50)
  readonly lastName: string;

  @IsString()
  @Length(8, 50)
  readonly password: string;
}
