import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FindOptionsOrderValue } from 'typeorm';
import { AuctionsService } from './auctions.service';
import { AuctionSorkKey, SearchTopic } from './auctions.types';
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

  // TODO: This endpoint is extendable. You can add other options to search
  // for example: search by title, description, author, category, etc.
  // query parameter can be: title, description, author, category, etc. All in all query is most often field name in Auction entity
  @Get('search')
  findBy(@Query('query') query?: SearchTopic, @Query('author') author?: string) {
    const queryParams = { query, author };
    return this.auctionsService.findBy({ limit: 100, offset: undefined }, queryParams);
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
