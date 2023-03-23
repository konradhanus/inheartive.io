import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { AuctionParams } from './auctions.types';
import { toOrderQuery, toWhereQuery } from './auctions.utils';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './entities/auction.entity';

const MAX_LIMIT = 50;
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

  findAll(paginationQuery: PaginationQueryDto, params: AuctionParams) {
    const { limit, offset } = paginationQuery;

    return this.auctionsRepository.find({
      relations: ['category', 'author', 'bids'],
      skip: offset,
      take: limit || MAX_LIMIT,
      order: toOrderQuery(params),
      where: toWhereQuery(params),
    });
  }

  findOne(id: string) {
    return this.auctionsRepository.findOneOrFail({ where: { id }, relations: ['category', 'author', 'bids'] });
  }

  async update(id: string, updateAuctionDto: UpdateAuctionDto) {
    const auction = await this.auctionsRepository.preload({
      id,
      ...updateAuctionDto,
    });

    if (!auction) {
      throw new EntityNotFoundError(Auction, { id });
    }

    return this.auctionsRepository.save(auction);
  }

  async remove(id: string) {
    const auction = await this.auctionsRepository.findOneByOrFail({ id });

    return this.auctionsRepository.remove(auction);
  }
}
