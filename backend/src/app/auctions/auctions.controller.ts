import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuctionsService } from './auctions.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { AuctionDto } from './dto/auction.dto';
import { AuctionsListParamsDto } from './dto/auctions-list-params.dto';
import { parseStringError } from '../../common/utils/errors';

@Controller('auctions')
export class AuctionsController {
  constructor(private readonly auctionsService: AuctionsService) {}

  @Post()
  create(@Body() createAuctionDto: CreateAuctionDto) {
    return this.auctionsService.create(createAuctionDto);
  }

  @Get()
  async findAll(@Query() params: AuctionsListParamsDto): Promise<AuctionDto[]> {
    const results = await this.auctionsService.findBy(
      { limit: 100, offset: 0 },
      params,
    );
    return results.map((item) => AuctionsService.parse(item));
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AuctionDto> {
    const auction = await this.auctionsService.findOne(id).catch(() => null);
    if (!auction) {
      throw new HttpException(
        parseStringError('Auction not found'),
        HttpStatus.NOT_FOUND,
      );
    }
    return AuctionsService.parse(auction);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAuctionDto: UpdateAuctionDto) {
    const auction = await this.auctionsService.findOne(id).catch(() => null);
    if (!auction) {
      throw new HttpException(
        parseStringError('Auction not found'),
        HttpStatus.NOT_FOUND,
      );
    }
    return this.auctionsService.update(id, updateAuctionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const auction = await this.auctionsService.findOne(id).catch(() => null);
    if (!auction) {
      throw new HttpException(
        parseStringError('Auction not found'),
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.auctionsService.remove(id);
  }
}
