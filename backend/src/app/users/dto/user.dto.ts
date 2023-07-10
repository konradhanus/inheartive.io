import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  @ApiProperty()
  id: string;
  
  @ApiProperty()
  email: string;
  
  @ApiProperty()
  firstName: string;
  
  @ApiProperty()
  lastName: string;
  
  @ApiProperty()
  initials: string;
  
  @ApiProperty()
  createdAt: Date;
  
  @ApiProperty()
  updatedAt: Date;
}
