import { Controller, Get, Post, Body } from '@nestjs/common';
import { BidsService } from './bids.service';
import { CreateBidBody } from './dto/create-bid.dto';
import { BidDto } from './dto/bid.dto';

@Controller('bids')
export class BidsController {
  constructor(private readonly bidsService: BidsService) { }

  @Post()
  create(@Body() createBidDto: CreateBidBody): Promise<void> {
    return this.bidsService.create(createBidDto);
  }

  @Get()
  async findAll(): Promise<BidDto[]> {
    const bids = await this.bidsService.findAll();
    return bids.map((bid) => BidsService.toBidDto(bid));
  }
}
