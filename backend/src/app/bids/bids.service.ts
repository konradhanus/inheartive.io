import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bid } from './entities/bid.entity';
import { User } from '../users/entities/user.entity';
import { Auction } from '../auctions/entities/auction.entity';
import { CreateBidDto } from './dto/create-bid.dto';
import { findByAuctionId } from './bids.utils';
import { Category } from '../categories/entities/category.entity';
import { CategoryDto } from '../categories/dto/category.dto';
import { BidDto } from './dto/bid.dto';
import { AuctionsService } from '../auctions/auctions.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class BidsService {
  constructor(
    @InjectRepository(Bid)
    private bidsRepository: Repository<Bid>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Auction)
    private auctionsRepository: Repository<Auction>
  ) {}

  maxBid(auctionId: string): Promise<Bid> {
    const byAuctionId = findByAuctionId(auctionId);

    return this.bidsRepository.findOne(byAuctionId);
  }

  async create(createBidDto: CreateBidDto) {
    const queryRunner = this.bidsRepository.manager.connection.createQueryRunner();
    await queryRunner.startTransaction();

    try {
      const auction = await this.auctionsRepository.findOneOrFail({
        where: { id: createBidDto.auction },
      });

      const user = await this.usersRepository.findOneOrFail({
        where: { id: createBidDto.user },
      });

      const bid = this.bidsRepository.create({
        auction,
        user,
      });

      const { value } = createBidDto;
      const maxBid = (await this.maxBid(createBidDto.auction)) || { value: 0 };

      if (value > maxBid.value) {
        bid.value = value;

        await queryRunner.manager.update(Auction, auction.id, { price: value });
        await queryRunner.manager.save(bid);
        await queryRunner.commitTransaction();
      }
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return this.bidsRepository.find({ relations: ['auction', 'user'] });
  }

  static parse(bid: Bid): BidDto {
    return {
      id: bid.id,
      auction: bid.auction ? AuctionsService.parse(bid.auction) : undefined,
      user: bid.user ? UsersService.toUserDto(bid.user) : undefined,
      value: bid.value,
      createdAt: bid.createdAt,
    };
  }
}
