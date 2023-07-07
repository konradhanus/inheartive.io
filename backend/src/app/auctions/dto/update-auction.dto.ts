import { PartialType } from '@nestjs/swagger';
import { CreateAuctionBody } from './create-auction.dto';
import { DeleteAuctionDto } from './delete-auction.dto';

export class UpdateAuctionDto extends DeleteAuctionDto { }

export class UpdateAuctionBody extends PartialType(CreateAuctionBody) { }
