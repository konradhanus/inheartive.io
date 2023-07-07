import { ApiProperty } from "@nestjs/swagger";
import { AuctionStatus } from "../auctions.types";

export class DeleteAuctionDto {
  @ApiProperty()
  title: string;
  
  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty({ enum: AuctionStatus })
  status: AuctionStatus;

  @ApiProperty()
  expiresAt: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  location: string;

  @ApiProperty()
  isFinished: boolean;
}
