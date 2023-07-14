import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bid } from './entities/bid.entity';
import { User } from '../users/entities/user.entity';
import { Auction } from '../auctions/entities/auction.entity';
import { CreateBidBody } from './dto/create-bid.dto';
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

  async create(createBidData: CreateBidBody): Promise<void> {
    const queryRunner = this.bidsRepository.manager.connection.createQueryRunner();
    await queryRunner.startTransaction();

    try {
      const auction = await this.auctionsRepository.findOneOrFail({
        where: { id: createBidData.auction },
      });

      const user = await this.usersRepository.findOneOrFail({
        where: { id: createBidData.user },
      });

      const bid = this.bidsRepository.create({
        auction,
        user,
      });

      const { value } = createBidData;
      const maxBid = (await this.maxBid(createBidData.auction)) || { value: 0 };

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

  findAll(): Promise<Bid[]> {
    return this.bidsRepository.find({ relations: ['auction', 'user'] });
  }

  static toBidDto(bid: Bid): BidDto {
    return {
      id: bid.id,
      auctionId: bid.auction ? bid.auction.id : undefined,
      user: bid.user ? UsersService.toUserDto(bid.user) : undefined,
      value: bid.value,
      createdAt: bid.createdAt,
    };
  }
}
