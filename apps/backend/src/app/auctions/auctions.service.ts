import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
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

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;

    return this.auctionsRepository.find({
      relations: ['category'],
      skip: offset,
      take: limit,
      order: {
        id: 'ASC',
      },
    });
  }

  async findOne(id: number) {
    const auction = await this.auctionsRepository.findOneOrFail({ where: { id }, relations: ['category'] });

    return auction;
  }

  async update(id: number, updateAuctionDto: UpdateAuctionDto) {
    const auction = await this.auctionsRepository.preload({
      id,
      ...updateAuctionDto,
    });

    if (!auction) {
      throw new EntityNotFoundError(Auction, { id });
    }

    return this.auctionsRepository.save(auction);
  }

  async remove(id: number) {
    const auction = await this.auctionsRepository.findOneByOrFail({ id });

    return this.auctionsRepository.remove(auction);
  }
}
