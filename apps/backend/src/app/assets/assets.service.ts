import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { Repository } from 'typeorm';
import { CreateAssetDto } from './dto/create-asset.dto';
import { unlink } from 'fs';

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

  async findOne(id: number) {
    return await this.assetRepository.findOneByOrFail({ id });
  }

  create(createAssetDto: CreateAssetDto) {
    const asset = this.assetRepository.create(createAssetDto);

    return this.assetRepository.save(asset);
  }

  async remove(id: number) {
    const asset = await this.assetRepository.findOneByOrFail({ id });

    unlink(asset.fullPath, (err) => {
      this.logger.error(err);
    });

    return this.assetRepository.remove(asset);
  }
}
