import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, LessThan, MoreThan, Repository } from 'typeorm';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { toOrderQuery, toWhereQuery, toSearchQuery } from './auctions.utils';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './entities/auction.entity';
import { AuctionDto } from './dto/auction.dto';
import { CategoriesService } from '../categories/categories.service';
import { UsersService } from '../users/users.service';
import { BidsService } from '../bids/bids.service';
import { AuctionsListParamsDto } from './dto/auctions-list-params.dto';
import { isUUID } from '../../common/utils/uuid';

const MAX_LIMIT = 50;
@Injectable()
export class AuctionsService {
  constructor(
    @InjectRepository(Auction)
    private readonly auctionsRepository: Repository<Auction>,
  ) {}

  create(createAuctionDto: CreateAuctionDto) {
    const auction = this.auctionsRepository.create(createAuctionDto);

    return this.auctionsRepository.save(auction);
  }

  findBy(paginationQuery: PaginationQueryDto, params: AuctionsListParamsDto) {
    const { limit, offset } = paginationQuery;
    return this.auctionsRepository.find({
      relations: {
        category: true,
        author: true,
        bids: {
          user: true,
        },
      },
      skip: offset,
      take: limit || MAX_LIMIT,
      order: toOrderQuery(params),
      where: {
        ...(params.authorId && isUUID(params.authorId)
          ? { author: { id: params.authorId } }
          : {}),
        ...(params.categoryId && isUUID(params.categoryId)
          ? { category: { id: params.categoryId } }
          : {}),
        ...(['true', 'false'].includes(params.isFinished)
          ? {
              expiresAt:
                params.isFinished === 'true'
                  ? LessThan(new Date())
                  : MoreThan(new Date()),
            }
          : {}),
        ...(params.bidAuthorId && isUUID(params.bidAuthorId)
          ? { bids: { user: { id: params.bidAuthorId } } }
          : {}),
      },
    });
  }

  findOne(id: string) {
    return this.auctionsRepository.findOneOrFail({
      where: { id },
      relations: ['category', 'author', 'bids'],
    });
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

  static parse(auction: Auction): AuctionDto {
    return {
      id: auction.id,
      title: auction.title,
      description: auction.description,
      price: auction.price,
      category: CategoriesService.parse(auction.category),
      author: UsersService.parse(auction.author),
      status: auction.status,
      expiresAt: auction.expiresAt,
      createdAt: auction.createdAt,
      updatedAt: auction.createdAt,
      location: auction.location,
      isFinished: auction.isFinished,
      bids: Array.isArray(auction.bids)
        ? auction.bids.map((bid) => BidsService.parse(bid))
        : [],
    };
  }
}
