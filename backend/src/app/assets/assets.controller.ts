import { Controller, Get, Post, Delete, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AssetsService } from './assets.service';
import { Multer } from 'multer';
import { CreateAssetBody } from './dto/create-asset.dto';
import { ApiBody, ApiConsumes, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AssetDto } from './dto/asset.dto';

@ApiTags('Assets')
@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) { }

  @ApiResponse({ type: [AssetDto] })
  @Get()
  async findAll(): Promise<AssetDto[]> {
    const assets = await this.assetsService.findAll();
    return assets.map((asset) => AssetsService.toAssetDto(asset));
  }

  @ApiParam({
    name: 'id',
    required: true,
    description: 'should be an id of asset that exists in the database',
    type: String
  })
  @ApiResponse({ type: AssetDto })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AssetDto> {
    const asset = await this.assetsService.findOne(id);
    return AssetsService.toAssetDto(asset);
  }

  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateAssetBody })
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file: Multer.File): Promise<AssetDto> {
    const asset: CreateAssetBody = {
      originalName: file.originalname,
      fullPath: file.path,
      mimeType: file.mimetype,
    };
    const createdAsset = await this.assetsService.create(asset);
    return AssetsService.toAssetDto(createdAsset);
  }

  @ApiResponse({ type: AssetDto })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<AssetDto> {
    const deletedAsset = await this.assetsService.remove(id);
    return AssetsService.toAssetDto(deletedAsset);
  }
}
