import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AuctionsService } from './auctions.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { AuctionDto } from './dto/auction.dto';
import { AuctionsListParamsDto } from './dto/auctions-list-params.dto';

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
    const auction = await this.auctionsService.findOne(id);
    return AuctionsService.parse(auction);
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
