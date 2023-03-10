import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
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
    @Query('auctionId') auctionId: string,
    @Query('authorId') authorId: string,
    @Query('categoryId') categoryId: string,
    @Query('isExpired') isExpired: boolean,
    @Query('sortBy') sortBy: AuctionSorkKey
  ) {
    const queryParams = {
      auctionId,
      authorId,
      categoryId,
      isExpired,
      sortBy,
    };
    return this.auctionsService.findAll({ limit: 100, offset: undefined }, queryParams);
  }

  @Get('/category/:id')
  findAllByCategory(@Query() paginationQuery: PaginationQueryDto, @Param('id') id: string) {
    return this.auctionsService.findAllByCategory(paginationQuery, id);
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
