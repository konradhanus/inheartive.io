import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bid } from './entities/bid.entity';
import { CreateBidDto } from './dto/create-bid.dto';
import { findByAuctionId } from './bids.utils';

@Injectable()
export class BidsService {
  constructor(
    @InjectRepository(Bid)
    private bidsRepository: Repository<Bid>
  ) {}

  maxBid(auctionId: string) {
    const byAuctionId = findByAuctionId(auctionId);

    return this.bidsRepository.findOne(byAuctionId);
  }

  async create(createBidDto: CreateBidDto) {
    const bid = this.bidsRepository.create(createBidDto);

    const { value } = createBidDto;

    const maxBid = (await this.maxBid(createBidDto.auction.id)) || { value: 0 };

    if (value > maxBid.value) {
      return this.bidsRepository.save(bid);
    }

    return null;
  }

  findAll() {
    return this.bidsRepository.find({ relations: ['auction', 'user'] });
  }
}
