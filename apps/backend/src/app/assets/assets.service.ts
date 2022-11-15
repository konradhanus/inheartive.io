import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { Repository } from 'typeorm';
import { CreateAssetDto } from './dto/create-asset.dto';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private readonly assetRepository: Repository<Asset>
  ) {}

  findAll() {
    return this.assetRepository.find();
  }

  async findOne(id: number) {
    const asset = await this.assetRepository.findOneBy({ id });

    if (!asset) {
      throw new NotFoundException(`Asset #${id} not found`);
    }

    return asset;
  }

  create(createAssetDto: CreateAssetDto) {
    const asset = this.assetRepository.create(createAssetDto);

    return this.assetRepository.save(asset);
  }

  async remove(id: number) {
    const asset = await this.assetRepository.findOneBy({ id });

    if (!asset) {
      throw new NotFoundException(`Auction #${id} not found`);
    }

    return this.assetRepository.remove(asset);
  }
}
