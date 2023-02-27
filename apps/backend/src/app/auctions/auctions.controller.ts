import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { AuctionsService } from './auctions.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';

@Controller('auctions')
export class AuctionsController {
  constructor(private readonly auctionsService: AuctionsService) {}

  @Post()
  create(@Body() createAuctionDto: CreateAuctionDto) {
    return this.auctionsService.create(createAuctionDto);
  }

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.auctionsService.findAll(paginationQuery);
  }

  @Get('/category/:id')
  findAllByCategory(@Query() paginationQuery: PaginationQueryDto, @Param('id') id: string) {
    return this.auctionsService.findAllByCategory(paginationQuery, id);
  }

  @Get('/my/:id')
  findAMyAuctions(@Query() paginationQuery: PaginationQueryDto, @Param('id') id: string) {
    return this.auctionsService.findMyAuctions(paginationQuery, id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const auction = this.auctionsService.findOne(id);

    return auction;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuctionDto: UpdateAuctionDto) {
    return this.auctionsService.update(id, updateAuctionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.auctionsService.remove(id);

    return result;
  }
}
