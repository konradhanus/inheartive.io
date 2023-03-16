import { Controller, Get, Post, Body } from '@nestjs/common';
import { BidsService } from './bids.service';
import { CreateBidDto } from './dto/create-bid.dto';

@Controller('bids')
export class BidsController {
  constructor(private readonly bidsService: BidsService) {}

  @Post()
  create(@Body() createBidDto: CreateBidDto) {
    console.log('create', createBidDto);
    return this.bidsService.create(createBidDto);
  }

  @Get()
  findAll() {
    const bids = this.bidsService.findAll();

    return bids;
  }
}
