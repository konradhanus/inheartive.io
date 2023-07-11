import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, LessThan, MoreThan, Repository } from 'typeorm';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { toOrderQuery, toWhereQuery, toSearchQuery } from './auctions.utils';
import { CreateAuctionBody, CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionBody, UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './entities/auction.entity';
import { AuctionDto } from './dto/auction.dto';
import { CategoriesService } from '../categories/categories.service';
import { UsersService } from '../users/users.service';
import { BidsService } from '../bids/bids.service';
import { AuctionsListParamsDto } from './dto/auctions-list-params.dto';
import { isUUID } from '../../common/utils/uuid';
import { DeleteAuctionDto } from './dto/delete-auction.dto';

const MAX_LIMIT = 50;
@Injectable()
export class AuctionsService {
  constructor(
    @InjectRepository(Auction)
    private readonly auctionsRepository: Repository<Auction>,
  ) { }

  create(createAuctionData: CreateAuctionBody): Promise<Auction> {
    const auction = this.auctionsRepository.create(createAuctionData);

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

  async update(id: string, updateAuctionData: UpdateAuctionBody): Promise<Auction> {
    const auction = await this.auctionsRepository.preload({
      id,
      ...updateAuctionData,
    });

    if (!auction) {
      throw new EntityNotFoundError(Auction, { id });
    }

    return this.auctionsRepository.save(auction);
  }

  async remove(id: string): Promise<Auction> {
    const auction = await this.auctionsRepository.findOneByOrFail({ id });

    return this.auctionsRepository.remove(auction);
  }

  static parse(auction: Auction): AuctionDto {
    return {
      id: auction.id,
      title: auction.title,
      description: auction.description,
      price: auction.price,
      category: CategoriesService.toCategoryDto(auction.category),
      author: UsersService.toUserDto(auction.author),
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

  static toCreateAuctionDto(auction: Auction): CreateAuctionDto {
    return {
      id: auction.id,
      title: auction.title,
      description: auction.description,
      price: auction.price,
      status: auction.status,
      category: auction.category,
      author: auction.author,
      expiresAt: auction.expiresAt,
      createdAt: auction.createdAt,
      updatedAt: auction.createdAt,
      location: auction.location,
    }
  }

  static toUpdateAuctionDto(auction: Auction): UpdateAuctionDto {
    return {
      title: auction.title,
      description: auction.description,
      price: auction.price,
      status: auction.status,
      expiresAt: auction.expiresAt,
      createdAt: auction.createdAt,
      updatedAt: auction.createdAt,
      location: auction.location,
      isFinished: auction.isFinished,
    }
  }

  static toDeleteAuctionDto(auction: Auction): DeleteAuctionDto {
    return {
      title: auction.title,
      description: auction.description,
      price: auction.price,
      status: auction.status,
      expiresAt: auction.expiresAt,
      createdAt: auction.createdAt,
      updatedAt: auction.createdAt,
      location: auction.location,
      isFinished: auction.isFinished,
    }
  }
}
