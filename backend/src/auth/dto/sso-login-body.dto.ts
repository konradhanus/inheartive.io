import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SsoLoginBody {
    @ApiProperty()
    @IsString()
    @IsEmail()
    readonly username: string;

    @ApiProperty()
    @IsString()
    readonly name: string;
}