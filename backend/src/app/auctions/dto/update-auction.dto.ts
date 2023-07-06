import { PartialType } from '@nestjs/mapped-types';
import { CreateAuctionBody, CreateAuctionDto } from './create-auction.dto';
import { DeleteAuctionDto } from './delete-auction.dto';

export class UpdateAuctionDto extends DeleteAuctionDto { }

export class UpdateAuctionBody extends PartialType(CreateAuctionBody) { }
