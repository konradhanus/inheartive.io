import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './entities/auction.entity';

@Injectable()
export class AuctionsService {
  constructor(
    @InjectRepository(Auction)
    private readonly auctionsRepository: Repository<Auction>
  ) {}

  create(createAuctionDto: CreateAuctionDto) {
    const auction = this.auctionsRepository.create(createAuctionDto);

    return this.auctionsRepository.save(auction);
  }

  findAll() {
    return this.auctionsRepository.find();
  }

  async findOne(id: number) {
    const auction = await this.auctionsRepository.findOneBy({ id });

    if (!auction) {
      throw new NotFoundException(`Auction #${id} not found`);
    }

    return auction;
  }

  async update(id: number, updateAuctionDto: UpdateAuctionDto) {
    const auction = await this.auctionsRepository.preload({
      id,
      ...updateAuctionDto,
    });

    if (!auction) {
      throw new NotFoundException(`Auction #${id} not found`);
    }

    return this.auctionsRepository.save(auction);
  }

  async remove(id: number) {
    const auction = await this.auctionsRepository.findOneBy({ id });

    if (!auction) {
      throw new NotFoundException(`Auction #${id} not found`);
    }

    return this.auctionsRepository.remove(auction);
  }
}
