import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FindOptionsOrderValue } from 'typeorm';
import { AuctionsService } from './auctions.service';
import { AuctionSorkKey } from './auctions.types';
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
  findAll(
    @Query('authorId') authorId: string,
    @Query('categoryId') categoryId: string,
    @Query('isExpired') isExpired: boolean,
    @Query('sortBy') sortBy: AuctionSorkKey,
    @Query('order') order: FindOptionsOrderValue,
    @Query('bidAuthorId') bidAuthorId: string
  ) {
    const queryParams = {
      authorId,
      categoryId,
      isExpired,
      sortBy,
      order,
      bidAuthorId,
    };
    return this.auctionsService.findAll({ limit: 100, offset: undefined }, queryParams);
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
