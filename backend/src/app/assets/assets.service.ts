import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { Repository } from 'typeorm';
import { CreateAssetBody } from './dto/create-asset.dto';
import { unlink } from 'fs';
import { AssetDto } from './dto/asset.dto';

@Injectable()
export class AssetsService {
  private readonly logger = new Logger(AssetsService.name);

  constructor(
    @InjectRepository(Asset)
    private readonly assetRepository: Repository<Asset>
  ) {}

  findAll() {
    return this.assetRepository.find();
  }

  async findOne(id: string) {
    return await this.assetRepository.findOneByOrFail({ id });
  }

  create(createAssetDto: CreateAssetBody) {
    const asset = this.assetRepository.create(createAssetDto);

    return this.assetRepository.save(asset);
  }

  async remove(id: string) {
    const asset = await this.assetRepository.findOneByOrFail({ id });

    unlink(asset.fullPath, (err) => {
      this.logger.error(err);
    });

    return this.assetRepository.remove(asset);
  }

  static toAssetDto(asset: Asset): AssetDto {
    return {
      id: asset.id,
      originalName: asset.originalName,
      fullPath: asset.fullPath,
      mimeType: asset.mimeType,
      createdAt: asset.createdAt,
      updatedAt: asset.updatedAt,
    }
  }
}
