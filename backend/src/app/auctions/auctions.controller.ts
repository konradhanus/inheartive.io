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
import { CreateAuctionBody, CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionBody, UpdateAuctionDto } from './dto/update-auction.dto';
import { AuctionDto } from './dto/auction.dto';
import { AuctionsListParamsDto } from './dto/auctions-list-params.dto';
import { parseStringError } from '../../common/utils/errors';
import { DeleteAuctionDto } from './dto/delete-auction.dto';

@Controller('auctions')
export class AuctionsController {
  constructor(private readonly auctionsService: AuctionsService) { }

  @Post()
  async create(@Body() createAuctionBody: CreateAuctionBody): Promise<CreateAuctionDto> {
    const createdAuction = await this.auctionsService.create(createAuctionBody);

    return AuctionsService.toCreateAuctionDto(createdAuction);
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
  async update(@Param('id') id: string, @Body() updateAuctionBody: UpdateAuctionBody): Promise<UpdateAuctionDto> {
    const auction = await this.auctionsService.findOne(id).catch(() => null);
    if (!auction) {
      throw new HttpException(
        parseStringError('Auction not found'),
        HttpStatus.NOT_FOUND,
      );
    }
    const updatedAuction = await this.auctionsService.update(id, updateAuctionBody);
    return AuctionsService.toUpdateAuctionDto(updatedAuction);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteAuctionDto> {
    const auction = await this.auctionsService.findOne(id).catch(() => null);
    if (!auction) {
      throw new HttpException(
        parseStringError('Auction not found'),
        HttpStatus.NOT_FOUND,
      );
    }
    const deletedAuction = await this.auctionsService.remove(id);
    return AuctionsService.toDeleteAuctionDto(deletedAuction);
  }
}
