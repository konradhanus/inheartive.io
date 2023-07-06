import { AuctionStatus } from "../auctions.types";

export class DeleteAuctionDto {

  title: string;
  
  description: string;

  price: number;

  status: AuctionStatus;

  expiresAt: Date;

  createdAt: Date;

  updatedAt: Date;

  location: string;

  isFinished: boolean;
}