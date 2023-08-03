import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserDto } from '../../users/dto/user.dto';

export class BidDto {
  @ApiProperty()
  id: string;
  
  @ApiPropertyOptional()
  auctionId?: string;

  @ApiPropertyOptional()
  user?: UserDto;
  
  @ApiProperty()
  value: number;
  
  @ApiProperty()
  createdAt: Date;
}
