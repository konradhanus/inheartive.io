import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  findAll() {
    return this.assetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetsService.findOne(+id);
  }

  @Post()
  create(@Body() createAssetDto: CreateAssetDto) {
    return this.assetsService.create(createAssetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetsService.remove(+id);
  }
}
