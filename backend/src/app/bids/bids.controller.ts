import { Controller, Get, Post, Body } from '@nestjs/common';
import { BidsService } from './bids.service';
import { CreateBidBody } from './dto/create-bid.dto';
import { BidDto } from './dto/bid.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Bids')
@Controller('bids')
export class BidsController {
  constructor(private readonly bidsService: BidsService) { }

  @ApiCreatedResponse({ description: 'The bid record has been successfully created.' })
  @Post()
  create(@Body() createBidBody: CreateBidBody): Promise<void> {
    return this.bidsService.create(createBidBody);
  }

  @ApiResponse({ type: [BidDto] })
  @Get()
  async findAll(): Promise<BidDto[]> {
    const bids = await this.bidsService.findAll();
    return bids.map((bid) => BidsService.toBidDto(bid));
  }
}
