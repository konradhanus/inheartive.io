import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bid } from './entities/bid.entity';
import { User } from '../users/entities/user.entity';
import { Auction } from '../auctions/entities/auction.entity';
import { CreateBidDto } from './dto/create-bid.dto';
import { findByAuctionId } from './bids.utils';

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

  maxBid(auctionId: string) {
    const byAuctionId = findByAuctionId(auctionId);

    return this.bidsRepository.findOne(byAuctionId);
  }

  async create(createBidDto: CreateBidDto) {
    const auction = await this.auctionsRepository.findOne({
      where: {
        id: createBidDto.auction,
      },
    });

    const user = await this.usersRepository.findOne({
      where: {
        id: createBidDto.user,
      },
    });

    if (!auction || !user) {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }

    const bid = this.bidsRepository.create({
      auction,
      user,
    });

    const { value } = createBidDto;

    const maxBid = (await this.maxBid(createBidDto.auction)) || { value: 0 };

    if (value > maxBid.value) {
      bid.value = value;
      return await this.bidsRepository.save(bid);
    }

    return null;
  }

  findAll() {
    return this.bidsRepository.find({ relations: ['auction', 'user'] });
  }
}
